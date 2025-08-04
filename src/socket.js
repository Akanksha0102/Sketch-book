import { io } from "socket.io-client";
const URL=process.env.NODE_ENV === 'production' ? 'https://sketch-book-backend-oosd.onrender.com' ;
 export const socket = io("URL");