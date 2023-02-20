<script>
    import {players, usernameStore} from "$lib/stores";
    import Title from '$lib/Title.svelte';
    import PlayersList from '$lib/PlayersList.svelte';
    import Chat from "$lib/Chat.svelte";
    import { goto } from "$app/navigation";
    import socket from "$lib/socket.js";
    import { gameStartSateStore } from "$lib/stores.js";
    import { onDestroy } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let started = false;

    function startGame() {
        if(!started) {
            started = true;
            socket.emit("startGame", {roomNumber: data.roomNumber});
        }
    }

    gameStartSateStore.subscribe((value) => {
        if(value == "notStarted") {
            started = false;
        } else if(value == "started") {
            goto(`/game/${data.roomNumber}`);
        }
    })

    function disconnect() {
        socket.emit("disconnectFromRoom", {roomNumber: data.roomNumber, username: $usernameStore});
        $usernameStore = "";
        goto("/");
    }

    onDestroy(() => {
        socket.emit("leaveRoom", {roomNumber: data.roomNumber, username: $usernameStore});
    });

    
</script>

<Title text = {`Room ${data.roomNumber}: Waiting to start`} size=7 animate={false}></Title>

<div class="menu">
    <PlayersList />
    <span>
    <Chat />
    <div class="menu__right">
        <button class="menu__button menu__disconnect" on:click={disconnect}>Disconnect</button>
        {#if $players.length >= 4 && $players[0].name == $usernameStore && !started}
            <button class="menu__button" on:click={startGame}>Start</button>
        {/if}

        {#if started} 
            <button class="menu__button">Loading ...</button>
        {/if}
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

        background-color: #7a7171;
        color: white;
        border: none;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

        cursor: pointer;
        transition: 0.2s;
    }

    .menu__button:hover {
        transform: scale(1.1);
        background-color: #9a8f8f;
    }

    .menu__disconnect {
        background-color: #9e5555;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .menu__disconnect:hover {
        background-color: #b66a6a;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .menu__button:active {
        background-color: #7a7171;
    }

    .menu__disconnect:active {
        background-color: #9e5555;
    }

    
</style>