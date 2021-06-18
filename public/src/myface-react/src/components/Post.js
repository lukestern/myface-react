import "./Styles/Post.scss"
import "./Styles/Buttons.scss"

export function Post(props) {

    const handleSubmit = (interactionType) => {
        const path = `/posts/${props.id}/${interactionType}`
        console.log(props.interaction);
        sendInteraction(path);
        console.log(props.interaction);
    }

    async function sendInteraction(path) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json' }
        };

        await fetch(`http://localhost:3001${path}`, requestOptions)
        .then(() => props.setInteraction(props.interaction + 1));
    }

    return (
        <div className={props.className}>
            <img className='image' alt='' src={props.imageUrl} />
            <div className='interaction-button-container'>
                <button onClick={() => handleSubmit('like')}>Like</button>
                <button onClick={() => handleSubmit('dislike')}>Dislike</button>
            </div>
            {props.name && <p>{props.name}</p>}
            <p>{props.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
            <p>{props.message}</p>
        </div>
    )
}