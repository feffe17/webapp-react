import FilmCard from '../components/FilmCard';

const Home = () => {
    const films = [
        { id: 1, title: 'Film 1', description: 'Descrizione Film 1' },
        { id: 2, title: 'Film 2', description: 'Descrizione Film 2' },
    ];

    return (
        <div className="container">
            <h1>Lista dei film</h1>
            <div className="row">
                {films.map((film) => (
                    <div key={film.id} className="col-md-4">
                        <FilmCard title={film.title} description={film.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
