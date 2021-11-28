import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("Popular Movies");
  const [results, setResults] = useState([]);

  useEffect(() => {
    //React runs clean up function before running other code in useEffect
    //Async can not be used before callback of useEffect
    //We can create another function inside callback of useEffect
    //We can also immediately invoke function(Arrow functins can also be immedietly invoked)
    //Or we can use promises with axios.get()
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutID = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
      return () => clearTimeout(timeoutID);
    }
  }, [term, results.length]);

  const searchList = results.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            className="ui button"
          >
            Visit
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="">Search Wikipedia</label>
          <input
            type="text"
            value={term}
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{searchList}</div>
    </div>
  );
}
