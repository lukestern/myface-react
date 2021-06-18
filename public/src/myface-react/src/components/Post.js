import "./Styles/Post.scss"
import "./Styles/Buttons.scss"

export function Post(props) {

    const handleSubmit = (event, interactionType) => {
        event.preventDefault();
        const url = `http://localhost:3001/posts/${props.id}/${interactionType}/`
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

    return (
        <div className={props.className}>
            <img className='image' alt='' src={props.imageUrl} />
            <div className='interaction-button-container'>
                <button onClick={(e) => handleSubmit(e, 'like')}>Like</button>
                <button onClick={(e) => handleSubmit(e, 'dislike')}>Dislike</button>
            </div>
            {props.name && <p>{props.name}</p>}
            <p>{props.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
            <p>{props.message}</p>
        </div>
    )
}