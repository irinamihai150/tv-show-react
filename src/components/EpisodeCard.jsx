import React, { useState, useEffect } from "react";

function EpisodeCard() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/82/episodes`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })

  }, []);

  return (
    <div className="card">
      <div>
        <ul>
          {data.map((show) => (
              <p>{show.name}</p>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EpisodeCard;
