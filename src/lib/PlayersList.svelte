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

        border-bottom: 1px solid var(--color-secondary);
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

        background-color: var(--color-primary-dark);

        border: 1px solid var(--color-secondary);

        width: 17rem;

        height: 100%;
    }

    .green {
        background-color: var(--color-tertiary);
    }
</style>
