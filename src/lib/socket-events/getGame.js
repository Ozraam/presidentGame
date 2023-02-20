import socket from "$lib/socket.js";
import { gameState  } from "$lib/stores.js";

socket.on("getGame", (data) => {
    console.log('getGame', data);
    gameState.set(data);
});