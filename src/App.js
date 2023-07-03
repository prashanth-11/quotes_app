import React, { useEffect, useState } from "react";
import "./App.css";

import Page from "./Page";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Top from "./Top";
import Quote from "./Quote";
import Signin from "./Signin";
import Quoteday from "./Quoteday";
import Picture from "./Picture";
import Login from "./Login";
// import Random from "./Random"
import About from "./About";
import axios from "axios";
import Footer from "./Footer";
import { MoreQuotations } from "./MoreQuotations";
import Contact from "./Contact";
import Randomquote from "./RandomQuote";

const App = () => {
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState([]);
  const [message, setMessage] = useState("");
  const [remainingQuotes, setRemainingQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://type.fit/api/quotes`);
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Page
                data={data}
                setData={setData}
                setQuote={setQuote}
                quote={quote}
                message={message}
                setMessage={setMessage}
                remainingQuotes={remainingQuotes}
                setRemainingQuotes={setRemainingQuotes}
              />
            }
          />
          <Route path="/Top" element={<Top />} />
          <Route path="/Quote" element={<Quote />} />

          <Route path="/Picture" element={<Picture />} />

          <Route
            path="/quotations"
            element={<MoreQuotations remainingQuotes={remainingQuotes} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Quoteday" element={<Quoteday />} />
          <Route path="/random" element={<Randomquote />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;

// SPA => single page applications;
