import { useState } from "react";

const ReviewForm = ({ movieId, onReviewAdded }) => {
    const [formData, setFormData] = useState({
        name: "",
        text: "",
        vote: ""
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        fetch(`http://127.0.0.1:3005/movies/reviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, movie_id: movieId })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore durante l'invio della recensione");
                }
                return response.json();
            })
            .then((data) => {
                setFormData({ name: "", text: "", vote: "" }); // Reset del form
                onReviewAdded(); // Aggiorna le recensioni
            })
            .catch((error) => setError(error.message));
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <h4>Scrivi una recensione</h4>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Recensione</label>
                <textarea
                    id="text"
                    name="text"
                    className="form-control"
                    value={formData.text}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Voto</label>
                <input
                    type="number"
                    id="vote"
                    name="vote"
                    className="form-control"
                    value={formData.vote}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Invia</button>
        </form>
    );
};

export default ReviewForm;
