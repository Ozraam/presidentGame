<script>
    import { goto } from "$app/navigation";
    import { usernameStore, roomStore } from "./stores";


    export let username = '';
    export let room = '';

    /** @type {HTMLElement}*/
    let usernameError;
    /** @type {HTMLElement}*/
    let roomError;

    function joinRoom() {
        if(!username) {
            usernameError.style.display = 'block';
            return;
        } else {
            usernameError.style.display = 'none';
        }

        if(!room) {
            roomError.style.display = 'block';
            return;
        } else {
            roomError.style.display = 'none';
        }

        $usernameStore = username;
        $roomStore = room;

        goto(`/room/${room}/join`);
    }

</script>

<div class="input">
    <span class="input__username-error error" bind:this={usernameError}>Username needed</span>
    <input type="text" class="input__username input__input" placeholder="Username" bind:value={username}>

    <span class="input__room-error error" bind:this={roomError}>Username needed</span>
    <input type="text" class="input__room input__input" placeholder="Room number" bind:value={room}>

    <button class="input__join input__input" on:click={joinRoom}>
        Join
    </button>
</div>

<style>
    .input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 20em;
    }

    .input__input {
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .input__username {
        width: 100%;
        height: 3rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }

    .input__room {
        width: 100%;
        height: 3rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }

    .input__join {
        width: 100%;
        height: 3rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        padding: 0 1rem;
        margin-bottom: 1rem;
        background-color: #ccc;
        color: rgb(65, 65, 65);
        font-weight: 600;
        cursor: pointer;
    }

    .input__join:hover {
        background-color: #aaa;
    }

    .input__join:active {
        background-color: #888;
    }

    .error {
        display: none;
        color: red;
    }
</style>