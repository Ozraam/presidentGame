<script>
    import { onMount } from "svelte";
    import socket from "./socket";
    import { usernameStore, players } from "./stores";

    players.subscribe((value) => {
        console.log(value);
    });
</script>

<div class="menu">
    {#each $players as player}
        <div class="player {usernameStore == player.name ? "green" : ""}">
            <div class="player__name">{player.name}</div>
            <div class="player__rank">{["President", "Vice-President", "Neutre", "Vice-Merde", "Merde"][player.rank]}</div>
        </div>
    {/each}
</div>

<style>
    .player {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem;

        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }

    .player__name {
        font-size: 1.5rem;
    }

    .player__rank {
        font-size: 1.5rem;
    }

    .menu {
        display: flex;
        flex-direction: column;

        background-color: rgba(255, 255, 255, 0.8) ;

        border: 1px solid rgba(0, 0, 0, 0.2);

        width: 17rem;

        height: 100%;

        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .green {
        background-color: var(--color-tertiary);
    }
</style>
