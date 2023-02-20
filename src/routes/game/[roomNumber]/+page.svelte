<script>
    import { gameState, players, usernameStore } from '$lib/stores';
    import Deck from '$lib/game/Deck.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    $: {
        let ip = $players.findIndex(player => player.name == $usernameStore);
        $players = $players.slice(ip).concat($players.slice(0, ip));
    }

    const rayon = 190;

    let path = ""
    $: {
        path = `M0 0 q${rayon} 0 ${rayon} -${rayon} t-${rayon} -${rayon} t-${rayon} ${rayon} t${rayon} ${rayon}`;
    }
</script>

<main>
    <h1>Game {data.roomNumber}</h1>
    
    <div class="players-decks">
        {#each $players as player}
            <div 
                class="deck-cercle"
                style:--path="'{path}'"
                style="offset-distance: {($players.indexOf(player))/$players.length * 100}%;"
                >
                <Deck player={player}  />
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    :global(html, body) {
        height: 100%;
        overflow: hidden;
        margin: 0;
    }

    .players-decks { 
        position: relative;
        top: 9em;
    }

    .deck-cercle {
        position: absolute;
        left: 0;
        
        offset-path: path(var(--path));
    }
</style>