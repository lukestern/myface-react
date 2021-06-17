import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Styles/UserDetails.scss";
import { PostsScroll } from "./PostsScroll";

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
            <div className='user-details'>
                <img className='cover-image' alt='' src={userData.coverImageUrl} />
                <div className='user-info'>
                    <img className='profile-image' alt='' src={userData.profileImageUrl} />
                    <p className='full-name'>{userData.name}</p>
                    <p className='user-email'>{userData.email}</p>
                    <p className='username'>{userData.username}</p>
                </div>
                <PostsScroll title='User Posts' posts={userData.posts} />
                <PostsScroll title='User Likes' posts={userData.likes} />
                <PostsScroll title='User Dislikes' posts={userData.dislikes} />
            </div>
        </div>
    )
}