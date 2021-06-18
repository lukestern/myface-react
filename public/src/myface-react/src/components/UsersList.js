import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styles/UsersList.scss";
import './Styles/Buttons.scss';

export function UsersList() {
    const [usersData, setUsersData] = useState(null);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(response => response.json())
            .then(data => setUsersData(data));
    }
    // eslint-disable-next-line
    useEffect(() => { fetchData('/users') }, []);

    if (!usersData) {
        return <div>Waiting for data!</div>
    }

    return (
        <div>
            <button class='standard-button'>
                <Link to="/users/create">Create User</Link>
            </button>
            <div className='users-list'>
                {usersData.results.map(user =>
                    <Link key={user.id} className='user' to={`/users/${user.id}`}>
                        <img className='profile-image' alt='' src={user.profileImageUrl} />
                        <p className='user-name'>{user.name}</p>
                    </Link>
                )}
            </div>

            {usersData.previous
                ? <button
                    className='standard-button'
                    onClick={() => fetchData(usersData.previous)}>Previous</button>
                : null}

            {usersData.next
                ? <button
                    className='standard-button'
                    onClick={() => fetchData(usersData.next)}>Next</button>
                : null}
        </div>
    )
}