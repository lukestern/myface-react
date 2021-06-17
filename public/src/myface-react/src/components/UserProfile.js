import "./Styles/UserProfile.scss";

export function UserProfile({ userData }) {
    return (
        <div className='user-details'>
            <img className='cover-image' alt='' src={userData.coverImageUrl} />
            <div className='user-info'>
                <img className='profile-page-image' alt='' src={userData.profileImageUrl} />
                <div className='profile-info'>
                    <p className='full-name'>{userData.name}</p>
                    <p className='user-email'>{userData.email}</p>
                    <p className='username'>{userData.username}</p>
                </div>
            </div>
        </div>
    )
}