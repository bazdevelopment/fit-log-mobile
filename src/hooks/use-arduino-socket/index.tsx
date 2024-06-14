import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import socket from "../../api/common/socket";

/**
 * Custom hook used to get the card id from arduino based on socket io
 */
export const useArduinoSocket = ({
  onSubmitMembershipCardId,
  handleRegisterGymVisit,
}: {
  onSubmitMembershipCardId: (cardId: string) => void;
  handleRegisterGymVisit: (cardId: string) => void;
}) => {
  const [cardScanned, setCardScanned] = useState("");
  const { name: focusedScreenName } = useRoute();

  useEffect(() => {
    const handleConnect = () => {
      console.log("Socket.io connected");
    };

    const handleMessage = async (cardId: string) => {
      console.log("Received:", cardId);
      /**Update state with received data /* */

      if (focusedScreenName === "index") {
        try {
          const { record } = await handleRegisterGymVisit(cardId);
          record.cardMembershipId && setCardScanned(cardId);
        } catch (err) {
          //you don't have to do anything here, the error is handled in onError utility fnc
        }
      }

      if (focusedScreenName === "scan-membership/index") {
        onSubmitMembershipCardId && onSubmitMembershipCardId(cardId);
      }
    };

    const handleDisconnect = () => {
      console.log("Socket.io disconnected");
    };

    // Attach event listeners
    socket.on("connect", handleConnect);
    socket.on("message", handleMessage);
    socket.on("disconnect", handleDisconnect);

    /** Clean up socket.io connection on component unmount */
    return () => {
      socket.disconnect();
      // // Remove event listeners
      socket.off("connect", handleConnect);
      socket.off("message", handleMessage);
      socket.off("disconnect", handleDisconnect);
    };
  }, []);

  return { cardScanned };
};

export default useArduinoSocket;
