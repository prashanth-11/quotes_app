import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({
  data,
  setData,
  setQuote,
  quote,
  message,
  setMessage,
  remainingQuotes,
  setRemainingQuotes,
}) => {
  const [userInput, setUserInput] = useState("");
  const handleOnChange = (event) => {
    event.preventDefault();
    if (userInput != "") {
      const filteredQuote = data.filter((s) => {
        const lowercaseText = s.text.toLowerCase();

        return lowercaseText.includes(userInput.toLocaleLowerCase());
      });

      setQuote(filteredQuote.slice(0, 3));
      setRemainingQuotes(filteredQuote.slice(3, filteredQuote.length));
      if (filteredQuote.length > 0) {
        setMessage("");
      } else {
        setMessage("No Quotes Found");
      }
    } else {
      setQuote([]);
      setMessage("");
    }
  };
  return (
    <form
      style={{ width: "100%", marginBottom: "20px" }}
      class="d-flex justify-between"
      role="search"
 >

      <div style={{color: 'black'}}
      ></div>

      <div style={{ display: "flex", width: "70%" }}>
        <input
          class="form-control "
          style={{ width: "60%" }}
          type="text"
          onChange={(e) => {
            if (e.target.value === "") {
              setQuote([]);
              setMessage("");
            } else {
              setUserInput(e.target.value);
            }
          }}
          placeholder="Search More Quotation"
          aria-label="Search More Quotation"
        />
        <button
          onClick={handleOnChange}
          class="btn btn-outline-success w-64"
          type="submit"
        >
          Search{" "}
        </button>
      </div>
      <div></div>
    </form>
  );
};
export default Search;
