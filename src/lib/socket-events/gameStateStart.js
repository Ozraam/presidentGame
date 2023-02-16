import socket from "$lib/socket.js";
import { gameStartSateStore } from "$lib/stores.js";

socket.on("gameStateStart", (data) => {
    gameStartSateStore.set(data);
});