import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "./Name/Tables";

export const MoreQuotations = ({ remainingQuotes }) => {
  // const { state } = useLocation();
  // const [s, setS] = useState([]);
  // console.log(s);
  // useEffect(() => {
  //   if (state) {
  //     setS(state);
  //   } else {
  //     setS([]);
  //   }
  // }, [state]);
  console.log(remainingQuotes);
  return (
    <div 
    style={{
      alignItems: "center",
      gap: "30px",
    }}>
      {remainingQuotes &&
        remainingQuotes.map((d) => {
          return <Table key={d.id} quote={d} />;
        })}
    </div>
  );
};
