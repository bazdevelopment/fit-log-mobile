import { useEffect, useState } from "react";

import socket from "../../api/common/socket";

/**
 * Custom hook used to get the card id from arduino based on socket io
 */
export const useArduinoSocket = () => {
  const [cardScanned, setCardScanned] = useState("");

  useEffect(() => {
    const handleConnect = () => {
      console.log("Socket.io connected");
    };

    const handleMessage = (data: string) => {
      console.log("Received:", data);
      /**Update state with received data /* */
      setCardScanned(data);
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
