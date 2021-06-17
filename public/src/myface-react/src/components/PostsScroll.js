import { Post } from "./Post";
import './Styles/PostsScroll.scss'

export function PostsScroll({ title, posts }) {
    return (
        <div>
            <p>{title}</p>
            <ul className='posts-scroll-container'>
                {posts.map((post) =>
                    <Post 
                    createdAt={post.createdAt} 
                    imageUrl={post.imageUrl} 
                    message={post.message}
                    className='post-thumbnail' />
                )}
            </ul>
        </div>
    )
}