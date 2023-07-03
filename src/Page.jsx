import image from "./images/MULTI.jpg";
import image1 from "./images/live.webp";

import "./Page.css"


import React from "react";

import { Link } from "react-router-dom";
import Dummy from "./Name/Dummy";
import Card from "./card/Carousel";
import Search from "./Search";
import Quotation from "./Quotation";
// import Slider from "./Slider/Slider"

const Page = ({
  data,
  setData,
  setQuote,
  quote,
  message,
  setMessage,
  remainingQuotes,
  setRemainingQuotes,
}) => {
  return (
    <div style={{ backgroundColor: "#D3E5FE" }}>
      <div style={{ backgroundColor: "#D3E5FE" }} className=" vh-10">
        <div className=" d-flex align-items-center">
          <ul>
            <h1  className="om text-dark text-left p-1 align-items-left">
              A quotation is the repetition of a sentence.
            </h1>
            {/* <Link to="/Picture">
              <h2 class="btn btn-primary bottom-end animate__animated animate__shakeY  ">
                Go somewhere
              </h2>
            </Link> */}
          </ul>
          <div className="text-center">
            <div></div>
          </div>
          <ul>
            <img src={image} class="card-img" alt="..." />
          </ul>
        </div>
      </div>
      <Search
        data={data}
        setData={setData}
        setQuote={setQuote}
        quote={quote}
        message={message}
        setMessage={setMessage}
        remainingQuotes={remainingQuotes}
        setRemainingQuotes={setRemainingQuotes}
      />

      {((quote && quote.length > 0) || message != "") && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Dummy
            quote={quote}
            message={message}
            remainingQuote={remainingQuotes}
          />
        </div>
      )}
      <div style={{ display: "flex" }}>
        <Quotation />
        <div>
        <img src={image1} class="card-img" alt="..." />

          {/* <div class="name">
        <h1>hello pk</h1>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/t0Q2otsqC4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>           

    </div> */}
    
        </div>
        
      </div>
      <Card />
     
      
    </div>
  );
};

export default Page;
