import Card from "./Card.jsx";
import posts from "../data/posts.js";
import MyForm from "./MyForm.jsx";
import { useState } from "react";
function MainComponent() {
    const [postItem, setPostItem] = useState(posts);

    /**
     * Aggiunge un post (aggiornando lo state) sul evento di onSubmit di MyForm.jsx
     * @param {object} postData 
     */
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
                        />
                    </div>
                ))}
            </div>

            <MyForm onAddPost={addPost} />
        </main>
    );
}
export default MainComponent;