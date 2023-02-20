<script>
    /** @type {{rank: string, suit: string}} */
    export let card;
    export let onlyBack = false;
</script>

<div class="card">
    {#if !onlyBack}
        <div class="card__front">
            <img src="/playing_cards/fronts/{card.suit.toLowerCase()}_{card.rank.toLowerCase()}.svg" alt="{card.suit}_{card.rank}">
        </div>
    {:else}
        <div class="card__back"><img src="/playing_cards/backs/blue2.svg" alt="back"></div>
    {/if}
    
</div>

<style>
    .card {
        width: 100px;
        
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: -30px;
        scale: 0.8;
    }

    .card img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>