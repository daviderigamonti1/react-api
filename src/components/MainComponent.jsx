import Card from "./Card.jsx";
import MyForm from "./MyForm.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:3000/posts";

function MainComponent() {
    const [postItem, setPostItem] = useState([]);

    useEffect(getData, []);

    function getData() {
        axios
            .get(apiUrl)
            .then((res) => setPostItem(res.data.data))
            .catch((error) => console.error("Errore durante il recupero dei dati", error))
    }

    function deleteItem(id) {
        axios
            .delete(`${apiUrl}/${id}`)
            .then(() => {
                setPostItem(postItem.filter((el) => el.id !== id));
            })
            .catch((error) => {
                console.error("Errore durante la cancellazione del post", error);
            });

    }

    function addPost(postData) {
        const newPost = {
            id: postData.id,
            image: '/img/image.jpg',
            title: postData.title,
            content: postData.content,
            author: postData.author,
            date: postData.date,
            checkbox: postData.checkbox
        };
        axios
            .post(apiUrl, newPost)
            .then((res) => {
                // aggiorno lo state di postItem
                setPostItem([...postItem, res.data]);
            })
            .catch((error) => {
                console.log("Errore durante l'aggiunta del post", error);
            })
    }

    return (
        <main className="container">
            <div className="row gy-4">
                {postItem.map((post) => (
                    <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                        <Card
                            image={post.image}
                            title={post.title}
                            content={post.content}
                            author={post.author}
                            date={post.date}
                            id={post.id}
                            onDelete={() => deleteItem(post.id)}
                        />
                    </div>
                ))}
            </div>

            <MyForm onAddPost={addPost} />
        </main>
    );
}
export default MainComponent;