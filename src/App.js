import React, { useState, useEffect } from "react";

// function ShowCard() {
//   const [shows, setShow] = useState();
//   useEffect(() => {
//     fetch(`https://api.tvmaze.com/shows/82/episodes`)
//       .then((res) => res.json())
//       .then((data) => {
//         setShow(data);
//         console.log(shows);
//       });
//   }, [shows]);
//   shows.map((show) => {
//     return <h1> {show.name}</h1>;
//   });
// }

function App() {
  const [data, setData] = useState();

  const [loading, setLoading] = useState();
  const [error, setError] = useState();
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
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading....";
  if (error) return "Error!!!";

  return (
    <div className="App">
      <h2>Tv show</h2>
      <div class="mx-20">
        <ul>
          {data.map((show) => (
            <div class="">
              <p>{show.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
