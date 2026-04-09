import HeroSection from "../HeroSection/HeroSection";
import MovieSection from "../MovieSection/MovieSection";
import ContinueWatchingSection from "../ContinueWatchingSection/ContinueWatchingSection";
import styles from "./MainContent.module.css";

const MainContent = () => {
    return (
        <div className={styles.main}>
            <HeroSection/>
            <MovieSection />
            <ContinueWatchingSection />
        </div>
    )
}

export default MainContent;