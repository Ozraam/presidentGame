import { writable } from "svelte/store";

export const usernameStore = writable("");

export const players = writable([]);

export const noRoom = writable(false);

export const gotoRoom = writable(-1);

export const chatMessages = writable([]);

export const roomStore = writable("");

export const gameStartSateStore = writable(""); 


export const gameState = writable({});

export function resetAllStore() {
    usernameStore.set("John Doe");
    players.set([]);
    noRoom.set(false);
    gotoRoom.set(-1);
}