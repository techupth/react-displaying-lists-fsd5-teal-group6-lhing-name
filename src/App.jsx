import "./App.css";
import movies from "./data/movies.jsx";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {movies.map((item, index) => {
          return (
            <div
              css={css`
                display: flex;
              `}
            >
              <div className="image">
                <img src={item.image} className="image" />
              </div>
              <div className="text">
                <p>Title: {item.title} </p>
                <p>Year: {item.year} </p>
                <p>Runtime: {item.runtime} </p>
                <p>
                  Genres:{" "}
                  {item.genres.map((Ans) => {
                    //Ans คือช่องเปล่ารอรับคำตอบจาก item.genres.map
                    return <span>{Ans}</span>;
                  })}
                </p>
                <p>IMDB Ratings: {item.imdbRating} </p>
                <p>IDMB Votes: {item.imdbVotes} </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
