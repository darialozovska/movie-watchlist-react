import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Trending from "../Trending/Trending";
import MovieDetails from "../MovieDetails/MovieDetails";
import movieDetails from "../../data/moviedetails";

const TrendingPage = ({ favourites, toggleFavourite }) => {
    const [selectedMovieId, setSelectedMovieId] = useState(204);

    const selectedMovie = movieDetails.find((movie) => movie.id === selectedMovieId);

    return (
        <>
            <Navigation />
            <Trending
                movies={movieDetails}
                selectedMovieId={selectedMovieId}
                onSelectMovie={setSelectedMovieId}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
            />
            <MovieDetails
                movie={selectedMovie}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
            />
        </>
    );
};

export default TrendingPage;