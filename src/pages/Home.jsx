import { useState, useEffect } from 'react';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3005/movies')
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error('Errore nel recupero dei film:', error));
    }, []);

    return (
        <div className="container">
            <h1>Lista dei film</h1>
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-md-4  mt-2 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.abstract}</p>
                                <a href={`/film/${movie.id}`} className="btn btn-primary">
                                    Dettagli
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
