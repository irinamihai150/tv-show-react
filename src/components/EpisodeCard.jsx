import React, { useState, useEffect } from "react";
import useTextFit from "use-text-fit";

function EpisodeCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const { ref } = useTextFit();
  return (
    <div className="maincard">
      <ul>
        {data.map((show) => {
          return (
            <div className="card">
              <h2>{show.name}</h2>
              {show.image ? (
                <img className="img" src={show.image.medium} alt={show.name} />
              ) : null}
              <div ref={ref} className="description">
                <p className="item">
                  {show.summary.replace("<p>", "").replace("</p>", "")}
                </p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default EpisodeCard;
