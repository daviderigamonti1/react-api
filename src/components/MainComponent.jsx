import Card from "./Card.jsx";
import posts from "../data/posts.js";
import MyForm from "./MyForm.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:3000/posts";

function MainComponent() {
    const [postItem, setPostItem] = useState(posts);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios.get(apiUrl).then((res) => {
            console.log(res.data);
            setPostItem(res.data.data);
        })
            .catch((error) => {
                console.error("Errore durante il recupero dei dati", error)
            });
    }

    function deleteItem(id) {
        axios.delete(`${apiUrl}/${id}`)
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
            date: postData.date
        };

        // aggiorno lo stare di postItem
        setPostItem([...postItem, newPost]);
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
                            posts={postItem}
                            setPosts={setPostItem}
                            onDelete={() => deleteItem(postItem.id)}
                        />
                    </div>
                ))}
            </div>

            <MyForm onAddPost={addPost} />
        </main>
    );
}
export default MainComponent;