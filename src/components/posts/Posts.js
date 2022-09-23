
import { useSelector } from 'react-redux';
import Post from './post/Post';
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)

const Posts =({setId})=>{
    const posts = useSelector(state=>state.posts)
    return(
        <div>
            <h2>Recent Posts:</h2>
            {
                posts.map(post=>{
                    return(
                        <Post 
                            key={post._id}
                            setId={setId}
                            postId={post._id}
                            author={post.author}
                            title={post.title}
                            article={post.article}
                            createAt = {dayjs(post.createAt).format('MM/DD/YYYY')}
                        />
                    )
                })
            }
        </div>
    )
}


export default Posts
