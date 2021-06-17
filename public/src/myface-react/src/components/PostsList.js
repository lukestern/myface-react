import React, { useState, useEffect } from "react";
import {Post} from './Post';

export function PostsList() {
    const [postData, setPostData] = useState(null);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(response => response.json())
            .then(data => setPostData(data));   
    }
    
    useEffect(() => {
        fetchData('/posts')
    }, []);

    if (!postData) {
        return <div>Waiting for data!</div>
    }

    return (
        <div>
            <ol className='posts'>
                {postData.results.map(post => 
                    <Post name={post.postedBy.name} createdAt={post.createdAt} imageUrl={post.imageUrl} message={post.message} />
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
