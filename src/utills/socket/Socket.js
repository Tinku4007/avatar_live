// socket.js
import { io } from "socket.io-client";
import { getLocalStorage } from "@/utills/LocalStorageUtills";


// const socket = io(`${import.meta.env.VITE_APP_VITEAPPLOCAL}/`, {
const socket = io(`https://backend-avatar-local.onrender.com/`, {
  reconnectionAttempts: 5, // Number of reconnection attempts before giving up
  transports: ['websocket'], // Use WebSocket transport
  secure: true, // Secure connection should be true for wss://, but for http use false
});



export default socket;
