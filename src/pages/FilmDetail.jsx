import { useParams } from 'react-router-dom';

const FilmDetail = () => {
    const { id } = useParams();
    return <div className="container">Dettaglio del film {id}</div>;
};

export default FilmDetail;
