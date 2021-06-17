import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostsScroll } from "./PostsScroll";
import { UserProfile } from "./UserProfile"

export function UserDetails() {
    const [userData, setUserData] = useState(null);
    const { userId } = useParams()

    function fetchData(userRoute) {
        fetch(`http://localhost:3001${userRoute}`)
            .then(response => response.json())
            .then(data => setUserData(data));
    }

    useEffect(() => {
        fetchData(`/users/${userId}`)
    }, []);

    if (!userData) {
        return <div>Waiting for data!</div>
    }

    return (
        <div className='main'>
            <UserProfile userData={userData}/>
            <PostsScroll title='User Posts' posts={userData.posts} />
            <PostsScroll title='User Likes' posts={userData.likes} />
            <PostsScroll title='User Dislikes' posts={userData.dislikes} />
        </div>
    )
}