import socket from "$lib/socket.js";
import { players } from "$lib/stores.js";

socket.on("getPlayers", (data) => {
    console.log("getPlayers", data);
    players.set(data);
});