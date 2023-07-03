import React, { useState } from "react";
import "./Random.css";
const Randomquote = () => {
  const firstQuote = {
    content:
      "Never give up because you never know if the next try is going tobe the one that works.",
    author: "Mary Kay Ash",
  };
  const [randomQuotes, setRandomQuotes] = useState(firstQuote);

  const voice = () => {
    const synth = window.speechSynthesis;

    // if (!quoteBtn.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(
      `${randomQuotes.content} by ${randomQuotes.author}`
    );
    synth.speak(utterance);
    // setInterval(() => {
    //   !synth.speaking
    //     ? speechBtn.classList.remove("active")
    //     : speechBtn.classList.add("active");
    // }, 10);
    // }
  };

  const randomQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((result) => {
        setRandomQuotes(result);
        // quoteText.innerText = result.content;
        // authorName.innerText = result.author;
        // quoteBtn.classList.remove("loading");
        // quoteBtn.innerText = "New Quote";
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "35px 0 35px 0",
      }}
    >
      <div  class="wrapper">
        <header className="header-random">Quote of the Day</header>
        {
          <div class="content-random">
            <div class="quote-area">
              <i class="fas fa-quote-left"></i>
              <p class="quote">
                {/* {randomQuotes === null
                  ? "Never give up because you never know if the next try is going tobe the one that works." */}
                {/* : */}
                {randomQuotes.content}
                {/* } */}
              </p>
              <i class="fas fa-quote-right"></i>
            </div>
            <div class="author">
              <span>__</span>
              <span class="name">Mary Kay Ash</span>
            </div>
          </div>
        }
        <div class="buttons">
          <div class="features">
            <ul>
              <li onClick={voice} class="speech">
                <i class="fas fa-volume-up"></i>
              </li>
              <li class="copy">
                <i class="fas fa-copy"></i>
              </li>
              <li class="twitter">
                <i class="fab fa-twitter"></i>
              </li>
            </ul>
            <button onClick={randomQuote}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Randomquote;
