<script>
    import Title from "$lib/Title.svelte";
    import HomePageInput from "$lib/HomePageInput.svelte";
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
