<script>
    /**
     * @type {string}
     */
    export let text;

    export let animate = true;

    export let size = "9";
</script>

<h1 class="{animate ? 'animate' : ''}" style="font-size: {size}rem">{text}</h1>

<style>

    h1 {
        margin: 0;
        font-family: "ChikiBubbles";
        height: 35vh;
        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--color-secondary);

        text-align: center;
        
    }

    .animate {
        animation: bounce 1.5s infinite ease-in-out;
    }

    @font-face {
        font-family: "ChikiBubbles";
        src: url("/ChikiBubbles.ttf");
    }

    @keyframes bounce {
        0% {
            transform:  rotate(-5deg);
        }
        
        50% {
            transform: rotate(5deg);
        }
        
        100% {
            transform: rotate(-5deg);
        }
    }
</style>

