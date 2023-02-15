<script>
    import {usernameStore} from "$lib/stores";
    import { goto } from "$app/navigation";
    import socket from "$lib/socket.js";
    import { onMount } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;


    onMount(() => {
        socket.emit("joinRoom", {roomNumber: data.roomNumber, username: $usernameStore});
        goto("/room/" + data.roomNumber)
    });
</script>

