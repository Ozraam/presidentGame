<script>
    import socket from "./socket.js";
    import { chatMessages, roomStore, usernameStore } from "./stores.js";

    function sendMessage() {
        if(input_text == "") return;

        socket.emit("chat", {message: input_text, name: $usernameStore, roomNumber: $roomStore});
        input_text = "";
        setTimeout(scrollToBottom, 1000);
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
        {#each $chatMessages as message}
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

        background-color: rgba(255, 255, 255, 0.8);

        border: 1px solid rgba(0, 0, 0, 0.2);

        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

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
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }

    .message__name {
        font-size: 0.7rem;
        color: #888;
    }

    .send {
        margin: 0.2rem;
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 0.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.5);
        padding: 0.3rem;
    }

    .send input {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }

    .send input:focus {
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 1)
    }

    .send button {
        border: none;
        border-radius: 28px;
        background-color: #4d2caa;
        color: white;

        cursor: pointer;
        transition: 0.2s;
    }

    .send button:hover {
        background-color: #704bd3;
        scale: 1.1;
    }

    .send button:active {
        background-color: #4d2caa;
    }
</style>
