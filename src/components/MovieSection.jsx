import MovieCard from "./MovieCard"
import movies from "../data/movies"
import { useState } from "react";

const MovieSection = () => {
    const [favourites, setFavourites] = useState([]);
    const toggleFavourite = (id) => {
        if (favourites.includes(id)) {
            setFavourites(favourites.filter((movieId) => movieId !== id));
        } else {
            setFavourites([...favourites, id])
        }
    }
    return (
        <section className="movie-section">
                <h3 className="movie-title">Trending</h3>
                <div className="box-list">
                    <ul className="movie-list">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                info={movie.info}
                                isFavourite={favourites.includes(movie.id)}
                                onToggleFavourite={() => toggleFavourite(movie.id)}
                            />
                        ))}
                    </ul>
                </div>
            </section>
    )
}

export default MovieSection;