import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🎅": " Santa Claus",
  "🤶": " Mrs. Claus",
  "⛪": " Church",
  "☃️": "Snowman",
  "🔔": " Bell",
  "🎄": " Christmas Tree"
};

var emojisWeKNow = Object.keys(emojiDictionary);
var heading = "🎁 Christmas Emojis Collection";

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we Dont have this emoji in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{heading}</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="   Paste the emoji here!"
      />

      <h2> {meaning}</h2>

      <h2>Emojis we Know</h2>

      {emojisWeKNow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
