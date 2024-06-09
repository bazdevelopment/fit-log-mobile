import { NativeModules } from "react-native";
import { showMessage } from "react-native-flash-message";

import { setStorageItem } from "../api/common/storage";

export const onLogout = () => {
  setStorageItem("access_token", null);
  setStorageItem("refresh_token", null);
  setStorageItem("is_authenticated", "false");
  // Clear the query cache//
  //use query client from useQueryClient() hook instead of creating a new instance of query client
  // queryClient.clear();
  // queryClient.invalidateQueries();
  // queryClient.resetQueries();
  // router.navigate("/"); //navigate to index
  /**
   * !for now this is an workaround to cleanup the react query cache, the user will be redirected to index "/"           * the above methods seems to have no effect
   * TODO: investigate later on
   */
  showMessage({
    message: "Logged out",
    type: "danger",
    duration: 4000,
    floating: true,
  });
  return NativeModules.DevSettings.reload();
};
