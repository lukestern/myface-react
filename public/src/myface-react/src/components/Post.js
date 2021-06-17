import "./Styles/Post.scss"

export function Post({ name, createdAt, imageUrl, message, className }) {
    return (
        <div className={className}>
            <img className='image' alt='' src={imageUrl}/>
            {name && <p>Posted By: {name}</p>}
            <p>Created on: {createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
            <p>{message}</p>
        </div>
    )
}