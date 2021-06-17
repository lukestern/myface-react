import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post } from "./Post";
import "./Styles/UserDetails.scss";

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

    console.log(userData)
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

                <div>
                    <p>User Posts</p>
                    <ol>
                        {userData.posts.map((post) =>
                            <Post createdAt={post.createdAt} imageUrl={post.imageUrl} message={post.message} />
                        )}
                    </ol>
                </div>

                <div>
                    <p>User Likes</p>
                    <ol>
                        {userData.likes.map((post) =>
                            <Post createdAt={post.createdAt} imageUrl={post.imageUrl} message={post.message} />
                        )}
                    </ol>
                </div>

                <div>
                    <p>User Dislikes</p>
                    <ol>
                        {userData.dislikes.map((post) =>
                            <Post createdAt={post.createdAt} imageUrl={post.imageUrl} message={post.message} />
                        )}
                    </ol>
                </div>
            </div>
        </div>
    )
}