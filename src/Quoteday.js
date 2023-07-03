import axios from "axios";
import React, { useEffect, useState } from "react";
// import Navbar from './Navbar';

const Quoteday = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`http://localhost:5000/users`);

  //     const todayQuote = res.data.data.filter((s) => {
  //       console.log(new Date(s.createdAt).getDate(), new Date().getDate());
  //       return new Date(s.createdAt).getDate() === new Date().getDate();
  //     });
  //     setData(todayQuote);
  //   };
  //   fetchData();
  // }, []);

  console.log(data);
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center", color: "red" }}>
        You can see where it falls short of the quotation
      </h2>
      {data &&
        data.map((s) => {
          return (
            <h1
              style={{
                textAlign: "center",
                display: "flex",
                backgroundColor: "info",
                alignItems: "center",
                justifyContent: "center",
                height: "57vh",
                fontFamily: "cursive",
              }}
            >
              {s.quote}
            </h1>
          );
        })}
    </div>
  );
};

export default Quoteday;
