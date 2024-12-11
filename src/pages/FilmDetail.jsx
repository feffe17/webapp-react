import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilmDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:3005/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error('Errore nel recupero del dettaglio:', error));
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
                        <strong>{review.reviewer}:</strong> {review.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmDetail;
