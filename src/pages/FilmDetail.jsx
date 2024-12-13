import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';

const FilmDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const fetchMovieDetails = () => {
        fetch(`http://127.0.0.1:3005/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error('Errore nel recupero del dettaglio:', error));
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Caricamento...</div>;

    return (
        <div className="container">
            <h1>{movie.title}</h1>
            <p><strong>Regista:</strong> {movie.director}</p>
            <p><strong>Genere:</strong> {movie.genre}</p>
            <p><strong>Anno:</strong> {movie.release_year}</p>
            <p>{movie.abstract}</p>
            <h3>Recensioni</h3>
            <ul>
                {movie.reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.name}:</strong> {review.text} <span>({review.vote}/5)</span>
                    </li>
                ))}
            </ul>
            <ReviewForm movieId={id} onReviewAdded={fetchMovieDetails} />
        </div>
    );
};

export default FilmDetail;
