import { Post } from "./Post";
import './Styles/PostsScroll.scss'

export function PostsScroll({ title, posts }) {
    return (
        <div>
            <p className='posts-scroll-title'>{title}</p>
            <ul className='posts-scroll-container'>
                {posts.map((post) =>
                    <Post
                        post={post}
                        key={post.id}
                        className='post-thumbnail'
                     />
                )}
            </ul>
        </div>
    )
}