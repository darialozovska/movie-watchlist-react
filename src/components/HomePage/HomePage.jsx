import HeroSection from "../HeroSection/HeroSection";
import MovieSection from "../MovieSection/MovieSection";
import ContinueWatchingSection from "../ContinueWatchingSection/ContinueWatchingSection";

const HomePage = ({ favourites, toggleFavourite }) => {
    return (
        <>
            <HeroSection />
            <MovieSection
                favourites={favourites}
                toggleFavourite={toggleFavourite}
            />
            <ContinueWatchingSection />
        </>
    );
};

export default HomePage;