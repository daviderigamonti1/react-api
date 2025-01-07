function Card({ image, title, content, author, date, id, posts, setPosts, deletePost }) {
    const handleDelete = (e) => {
        const updatePosts = posts.filter((post) => post.id !== id)
        setPosts(updatePosts);
    }

    return (
        <div className="card">
            <img src={image} className="card-img-top" />
            <div className="card-body">
                <h5>{title}</h5>
                <p>{content}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">scopri di più</button>
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}>Elimina
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;