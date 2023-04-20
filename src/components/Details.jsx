import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const movieId = useParams();
  let url = fetch(`https://www.omdbapi.com/?i=${movieId.id}&apikey=59244570`);
  const [details, setDetails] = useState([]);

  const render = async () => {
    const res = await url;
    const data = await res.json();
    setDetails(data);
    console.log(data);
  };
  console.log(movieId);
  useEffect(() => {
    render();
  }, []);
  return (
    <div className="each">
      <Link to={"/"} className="return">
        return
      </Link>

      <div className="details">
        <img src={details.Poster} alt="" />
        <h1>{details.Title}</h1>
        <div className="sub-det">
          <h6>year: {details.Year}</h6>
          <h6>Imdb Rating: {details.imdbRating}</h6>
          <h6>Runtime: {details.Runtime}</h6>
        </div>
        <p>{details.Plot}</p>

        <div className="accordion accord" id="accordionExample">
          <div className="accordion-item card">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                more details
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Writers</strong>
                <h4>{details.Writer}</h4>

                <strong>Directors</strong>
                <h4>{details.Director}</h4>

                <strong>Actors</strong>
                <h4>{details.Actors}</h4>

                <strong>Box office</strong>
                <h4>{details.BoxOffice}</h4>

                <strong>Country</strong>
                <h4>{details.Country}</h4>

                <strong>DVD</strong>
                <h4>{details.DVD}</h4>

                <strong>Language</strong>
                <h4>{details.Language}</h4>

                <strong>Genre</strong>
                <h4>{details.Genre}</h4>

                <strong>Released</strong>
                <h4>{details.Released}</h4>

                <strong>Rated</strong>
                <h4>{details.Rated}</h4>

                <h2>Other Ratings</h2>
            
                {details.Ratings && details.Ratings.map((m) => (
                  <div>
                    <h5>{m.Source}:</h5> <p>{m.Value}</p>
                  </div>
                ))}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
