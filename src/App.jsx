import './App.css'
import MainContent from './components/MainContent/MainContent'
import { useState, useEffect } from 'react';
import FavouriteSection from './components/FavouriteSection/FavouriteSection';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Sidebar from "./components/Sidebar/Sidebar";
import TrendingPage from "./components/TrendingPage/TrendingPage";

function App() {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");

    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((movieId) => movieId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  }

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites))
  }, [favourites])

  return (
    
    <div className="container">
      <Sidebar />
      <MainContent>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                favourites={favourites}
                toggleFavourite={toggleFavourite}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <FavouriteSection
                favourites={favourites}
                toggleFavourite={toggleFavourite}
              />
            }
          />
          <Route
            path="/trending"
            element={
              <TrendingPage 
                favourites={favourites}
                toggleFavourite={toggleFavourite}
              />
            }
          />
        </Routes>
      </MainContent>
    </div>
  )
}

export default App
