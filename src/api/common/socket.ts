import { io, Socket } from "socket.io-client";
/** SocketIO client declaration */
const socket: Socket = io(
  `${process.env.EXPO_PUBLIC_LOCAL_HOST_ADDRESS}:${process.env.EXPO_PUBLIC_SOCKET_IO_SERVER_PORT}`
);
export default socket;
