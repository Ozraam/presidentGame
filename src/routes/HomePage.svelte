<script>
    import Title from "$lib/Title.svelte";
    import HomePageInput from "$lib/HomePageInput.svelte";
    import { resetAllStore, roomStore, usernameStore } from "$lib/stores.js";
    import { onMount } from "svelte";
    import socket from "$lib/socket";

    onMount(() => {
        if($usernameStore != "") {
            socket.emit("disconnectFromRoom", {roomNumber: $roomStore, username: $usernameStore});
        }
        resetAllStore();
    });
</script>

<main>
    <Title text="President the Game" />

    <HomePageInput />
</main>

<style>
    :global(body) {
        background-color: antiquewhite;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
