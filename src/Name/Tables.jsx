import axios from "axios";
import { useEffect, useState } from "react";

function App({ quote }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const res = await axios.get(`http://localhost:5000?q=${query}`);
      // setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
      {/* <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      /> */}
      {/* {<Table data={data} />} */}
      <h1>{quote.text}</h1>
    </div>
  );
}

export default App;
