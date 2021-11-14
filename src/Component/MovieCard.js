import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({ movie }) => (

    <div className='image-container d-flex justify-content-start m-3'>
        <img style={{ width: 350, height: 400, marginTop: 20 }} src={movie.posterURL} alt='movie'></img>
        <div className='movie-desc overlay' style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} >

            <span style={{ color: '#1c4286', fontSize: 22, marginRight: 20 }}>{movie.title}</span>
            <StarRatingComponent
                starCount={7}
                value={movie.rate}
            />
        </div>
    </div>
)

export default MovieCard;
