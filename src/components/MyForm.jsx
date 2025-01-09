import { useState } from "react";

const newPost = {
    title: '',
    author: "",
    content: '',
    image: "",
    date: "",
    checkbox: false,
}
function MyForm({ onAddPost }) {
    const [formData, setFormData] = useState(newPost);

    function handleSubmit(e) {
        e.preventDefault();
        if (formData.checkbox) {
            onAddPost(formData);
        }
        setFormData({
            title: "",
            author: "",
            content: "",
            image: "",
            date: "",
            checkbox: false
        })
    }

    function handleInput(e) {
        const { name, type, value, checked } = e.target;
        const inputValue = type == "checkbox" ? checked : value;
        setFormData({ ...formData, [e.target.name]: inputValue, id: crypto.randomUUID() });
    }

    return (
        <section>
            <h3 className="ps-3 pt-5">Aggiungi un tuo post</h3>
            <form className="p-4" onSubmit={handleSubmit}>
                <label htmlFor="title" className="form-label">Titolo</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    name="title"
                    onChange={handleInput}
                    value={formData.title}
                    placeholder="Inserisci Il titolo"
                />
                <label htmlFor="author" className="form-label">Autore</label>
                <input
                    type="text"
                    name="author"
                    className="form-control mb-3"
                    onChange={handleInput}
                    value={formData.author}
                    placeholder="Inserisci l'autore" />
                <label htmlFor="content" className="form-label">Contenuto</label>
                <textarea
                    className="form-control mb-3"
                    name="content"
                    onChange={handleInput}
                    value={formData.content}
                    placeholder="Inserisci il contenuto">
                </textarea>
                <label htmlFor="image" className="form-label">Immagine</label>
                <input
                    type="text"
                    name="image"
                    className="form-control mb-3"
                    onChange={handleInput}
                    value={formData.image}
                    placeholder="Inserisci l'immagine" />
                <label htmlFor="date" className="form-label">Data pubblicazione</label>
                <input
                    type="text"
                    name="date"
                    className="form-control mb-3"
                    onChange={handleInput}
                    value={formData.date}
                    placeholder="Inserisci data di pubblicazione" />
                <div className="d-flex pt-3">
                    <label htmlFor="checkbox" className="form-label">Vuoi aggiungere il post al blog?</label>
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="ms-2 mb-1"
                        onChange={handleInput}
                        checked={formData.checkbox} />
                </div>
                <button className="btn btn-primary mt-4">Invia</button>
            </form>
        </section>
    );
}
export default MyForm;