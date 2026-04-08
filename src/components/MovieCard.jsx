const MovieCard = ({title, info, isFavourite, onToggleFavourite}) => {
    return (
        <li>
            <button type="button" onClick={onToggleFavourite}>
                {isFavourite ? "Added" : "Favourite"}
            </button>
            <div className="movie-poster"></div>
            <h4>{title}</h4>
            <p>{info}</p>
        </li>
    )
}

export default MovieCard;