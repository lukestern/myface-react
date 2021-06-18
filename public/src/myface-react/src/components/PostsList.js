import React, { useState, useEffect } from "react";
import { Post } from './Post';
import "./Styles/PostsList.scss";
import "./Styles/Buttons.scss"

export function PostsList() {
    const [postData, setPostData] = useState(null);
    const [postPage, setPostPage] = useState('/posts')
    const [interaction, setInteraction] = useState(0);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(response => response.json())
            .then(data => setPostData(data));
        setPostPage(postRoute);
    }
    
    // eslint-disable-next-line
    useEffect(() => { fetchData(postPage) }, [interaction]);

    if (!postData) {
        return <div>Waiting for data!</div>
    }

    return (
        <div className='main'>
            <ol className='posts-list'>
                {postData.results.map(post =>
                    <Post
                        post={post}
                        key={post.id}
                        className='post'
                        interaction={interaction}
                        setInteraction={setInteraction} />
                )}
            </ol>

            {postData.previous
                ? <button
                    className='standard-button'
                    onClick={() => fetchData(postData.previous)}>Previous</button>
                : null}

            {postData.next
                ? <button
                    className='standard-button'
                    onClick={() => fetchData(postData.next)}>Next</button>
                : null}

        </div>
    )
}
