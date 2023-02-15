import socket from "$lib/socket";
import { chatMessages } from "$lib/stores.js";

socket.on("getChat", (data) => {
    chatMessages.set(data);
});