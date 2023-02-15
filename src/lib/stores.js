import { writable } from "svelte/store";

export const usernameStore = writable("John Doe");

export const players = writable([]);

export const noRoom = writable(false);

export const gotoRoom = writable(-1);

export const chatMessages = writable([]);

export const roomStore = writable("");

export function resetAllStore() {
    usernameStore.set("John Doe");
    players.set([]);
    noRoom.set(false);
    gotoRoom.set(-1);
}