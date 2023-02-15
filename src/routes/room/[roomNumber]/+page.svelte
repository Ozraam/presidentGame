<script>
    import {usernameStore} from "$lib/stores";
    import Title from '$lib/Title.svelte';
    import PlayersList from '$lib/PlayersList.svelte';
    import Chat from "$lib/Chat.svelte";
    import { goto } from "$app/navigation";
    import socket from "$lib/socket.js";
    import { resetAllStore } from "$lib/stores.js";
    import { onDestroy, onMount } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    function startGame() {
        goto(`/game/${data.roomNumber}`);
    }

    function disconnect() {
        socket.emit("disconnectFromRoom", {roomNumber: data.roomNumber, username: $usernameStore});
        $usernameStore = "";
        goto("/");
    }

    onDestroy(() => {
        socket.emit("leaveRoom", {roomNumber: data.roomNumber});
    });

    
</script>

<Title text = {`Room ${data.roomNumber}: Waiting to start`} size=7 animate={false}></Title>

<div class="menu">
    <PlayersList />
    <span>
    <Chat />
    <div class="menu__right">
        <button class="menu__button menu__disconnect" on:click={disconnect}>Disconnect</button>
        <button class="menu__button" on:click={startGame}>Start</button>
    </div>
    </span>
</div>


<style>
    
    .menu{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        height: 20rem;
    }
   
    .menu__right {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1.7fr 1fr;
        gap: 1rem;
    }

    .menu__button {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: larger;

        border-radius: 28px;

        background-color: var(--color-tertiary);
        color: var(--color-primary);
        border: none;
        box-shadow: 0px 0px 10px 0px var(--color-button-wrong);

        cursor: pointer;
        transition: 0.2s;
    }

    .menu__button:hover {
        transform: scale(1.1);
        background-color: var(--color-tertiary-light);
    }

    .menu__disconnect {
        background-color: var(--color-button-wrong);
        box-shadow: 0px 0px 10px 0px var(--color-tertiary);
    }

    .menu__disconnect:hover {
        background-color: var(--color-button-wrong-hover);
        box-shadow: 0px 0px 10px 0px var(--color-tertiary-light);
    }

    .menu__button:active {
        background-color: var(--color-tertiary);
    }

    .menu__disconnect:active {
        background-color: var(--color-button-wrong);
    }

    
</style>