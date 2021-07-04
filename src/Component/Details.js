import React, { useState, useEffect } from "react";

const Details = ({ match, movies }) => {
    const movieId = match.params.id
    const [fetchMovie, setFetchMovie] = useState({})
    useEffect(() => {
        setFetchMovie(() => movies.find((movie) => movie.id === movieId))
    }, [movieId])
    return (
        <div className="details">
            <span style={{ color: '#1c4286', fontSize: 30, marginRight: 20 }}>{fetchMovie.title}</span>
            <span >{fetchMovie.description}</span>
            <iframe
                title="trailer" style={{ width: 560, height: 315, margin: 20 }} src={fetchMovie.trailer}
            ></iframe>
        </div>
    );
};

export default Details;
