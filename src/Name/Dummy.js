import { useEffect, useState } from "react";
import { Users } from "./Users";
import "./App.css";
import Table from "./Tables";
import axios from "axios";
import { Link } from "react-router-dom";

function Dummy({ quote, message, remainingQuote }) {
  return (
    <div className="app">
      <div>
        {quote.map((d) => {
          return <Table key={d.id} quote={d} />;
        })}
      </div>

      <p>{message != "" && message}</p>

      {message === "" && <Link to="/quotations">See more</Link>}
    </div>
  );
}

export default Dummy;
