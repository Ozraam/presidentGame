import "$lib/socket.js";

import { gotoRoom } from "$lib/stores.js";
import socket from "$lib/socket.js";

socket.on("roomCreate", (data) => {
    gotoRoom.set(data.room);
});