<script>
    export let messages = [
        {
            name: "Player 1",
            message: "Hello",
        },
        {
            name: "Player 2",
            message: "Hello",
        }
    ];

    function sendMessage() {
        messages = [...messages, {name: "Player 1", message: input_text}];
        input_text = "";

        // scroll to bottom
        setTimeout(scrollToBottom, 0);
        
    }

    function scrollToBottom() {
        chat.scrollTop = chat.scrollHeight;
    }

    /**
     * @type {HTMLDivElement}
     */
    let chat;

    /**
     * @param {KeyboardEvent} event 
     */
    function sendMessageOnEnter(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    }

    let input_text = "";
</script>

<div class="chat">
    <div class="chat__messages" bind:this={chat}>
        {#each messages as message}
            <div class="message">
                <div class="message__name">- {message.name}</div>
                <div class="message__message">{message.message}</div>
            </div>
        {/each}
    </div>
    <div class="send">
        <input type="text" placeholder="Message" bind:value={input_text} on:keydown={sendMessageOnEnter}/>
        <button on:click={sendMessage}>Send</button>
    </div>
</div>


<style>
    .chat {

        background-color: var(--color-primary-dark);

        border: 1px solid var(--color-secondary);

        display: grid;
        grid-template-rows: 9fr 1fr;
        
        height: 20em;

        overflow: hidden;
    }

    .chat__messages {
        overflow-y: scroll;
    }

    .chat__messages::-webkit-scrollbar {
        width: 0.5rem;
    }

    

    .message {
        text-align: left;
        margin: 0.5rem;
        border-bottom: 1px solid var(--color-secondary);
    }

    .message__name {
        font-size: 0.7rem;
        color: var(--color-secondary-light);
    }

    .send {
        margin: 0.2rem;
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 0.5rem;
        border-top: 1px solid var(--color-secondary);
        padding: 0.3rem;
    }

    .send input {
        border: none;
        border-bottom: 1px solid var(--color-secondary-light);
        background-color: var(--color-primary-dark);
    }

    .send input:focus {
        outline: none;
        border-bottom: 1px solid var(--color-tertiary);
    }

    .send button {
        border: none;
        border-radius: 28px;
        background-color: var(--color-tertiary);
        color: var(--color-primary);

        cursor: pointer;
        transition: 0.2s;
    }

    .send button:hover {
        background-color: var(--color-tertiary-light);
        scale: 1.1;
    }

    .send button:active {
        background-color: var(--color-tertiary);
    }
</style>
