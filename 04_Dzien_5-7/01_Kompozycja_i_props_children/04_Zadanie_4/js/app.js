import React, { Component } from "react";
import { createRoot } from "react-dom/client";

function ChatHeader () {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}

function ChatMessages({message}) {
    return (
        <div>
            <ul>
                {message.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
            </ul>
        </div>
    )
}

const message = ['message1','message2','message3']

function NewChatMessage () {
    return (
        <footer>
            <form>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        </footer>
    )
}

function Chat(props) {
    return (
        <section className="chat">
            <ChatHeader/>
            <ChatMessages message={message}/>
            <NewChatMessage/>
        </section>
    );
}

function App(props) {
  return <Chat />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
