import socket from "$lib/socket.js";
import { noRoom } from "$lib/stores.js";

socket.on("noRoom", (data) => {
    noRoom.set(data);
});