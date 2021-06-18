import React, { useState, useEffect } from "react";
import { Post } from './Post';
import "./Styles/PostsList.scss";
import "./Styles/Buttons.scss"

export function PostsList() {
    const [postData, setPostData] = useState(null);
    const [interaction, setInteraction] = useState(0);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(response => response.json())
            .then(data => setPostData(data));
    }

    useEffect(() => {
        fetchData('/posts')
    }, [interaction]);

    if (!postData) {
        return <div>Waiting for data!</div>
    }

    return (
        <div>
            <ol className='posts-list'>
                {postData.results.map(post =>
                    <Post
                        key={post.id}
                        name={post.postedBy.name}
                        id={post.id}
                        createdAt={post.createdAt}
                        imageUrl={post.imageUrl}
                        message={post.message}
                        className='post'
                        interaction={interaction}
                        setInteraction={setInteraction} />
                )}
            </ol>

            {postData.previous
                ? <button onClick={() => fetchData(postData.previous)}>Previous</button>
                : null}

            {postData.next
                ? <button onClick={() => fetchData(postData.next)}>Next</button>
                : null}

        </div>
    )
}
