import "./Styles/Post.scss"
import "./Styles/Buttons.scss"

export function Post(props) {

    const handleSubmit = (event, interactionType) => {
        event.preventDefault();
        const url = `http://localhost:3001/posts/${props.post.id}/${interactionType}/`
        sendInteraction(url);
    }

    async function sendInteraction(url) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json' }
        };

        await fetch(url, requestOptions)
            .then(() => props.setInteraction(props.interaction + 1));
    }

    const postHasNotHadInteraction = () => {
        if (props.post.likedBy && props.post.dislikedBy) {
            return (props.post.likedBy.filter(user => user.id === 1).length === 0
                && props.post.dislikedBy.filter(user => user.id === 1).length === 0)
        }
    }

    return (
        <div className={props.className}>
            <img className='image' alt='' src={props.post.imageUrl} />
            <div className='interaction-container'>
                {props.post.likedBy && props.post.dislikedBy
                    ? <p>
                        {props.post.likedBy.length} 👍 {props.post.dislikedBy.length} 👎
                    </p>
                    : null
                }
                {postHasNotHadInteraction()
                    ? <div className='interaction-button-container'>
                        <button className='interaction-button' onClick={(e) => handleSubmit(e, 'like')}>👍</button>
                        <button className='interaction-button' onClick={(e) => handleSubmit(e, 'dislike')}>👎</button>
                    </div>
                    : null
                }
            </div>
            {props.post.postedBy && <p>{props.post.postedBy.name}</p>}
            <p>{props.post.message}</p>
            <p>{props.post.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
        </div >
    )
}