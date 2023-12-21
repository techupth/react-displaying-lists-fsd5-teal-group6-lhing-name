import "./App.css";
import movies from "./data/movies.jsx";
function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        {/* Render Movie Lists Here */}
        {movies.map((item, index) => {
          return (
            <div className="movies-list">
              <div className="movies-image">
                <img src={item.image} className="image" />
              </div>
              <div className="movies-detail">
                <p>Title: {item.title}</p>
                <p>Year: {item.year}</p>
                <p>Runtime: {item.runtime}</p>
                <p>
                  Genres:{" "}
                  {item.genres.map((item) => {
                    return <span>{item}</span>;
                  })}
                </p>
                <p>IMDB Ratings: {item.imdbRating}</p>
                <p>IMDB Votes: {item.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
