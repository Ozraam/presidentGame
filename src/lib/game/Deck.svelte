<script>
    import { usernameStore } from "$lib/stores";
    import Card from "./Card.svelte";
    /** @type {{name: string, deck: {cards: []}}}*/
    export let player;

    let deckWidth = 0;

    let path = "M0 100 q200 -100 400 0";

    $: {
        let pathLength = deckWidth;
        path = `M0 100 q${pathLength/2} -100 ${pathLength} 0`;
    }
</script>

<main>
    <h1>{player.name}</h1>
    
    <div class="deck" bind:clientWidth={deckWidth}>
        {#each player.deck.cards as card, i}
            <div class="cards" style="offset-distance: {(i + i/player.deck.cards.length)/player.deck.cards.length * 100}%;" style:--path="'{path}'">
                <Card card={card} onlyBack={$usernameStore != player.name}/>
            </div>
        {/each}
    </div>
</main>

<style>
   
    .deck {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        width: clamp(100px, 50vw, 300px);
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        scale: 0.8;
    }

    .cards {
        bottom: -5rem;
        left: 0;
        position: absolute;
        offset-path: path(var(--path));
    }

    h1{
        z-index: 1;
    }
</style>