import { deletePost } from "../../../actions/posts";
import {useDispatch} from 'react-redux';

const Post =({author, title, article, createAt, setId, postId})=>{
    const dispatch = useDispatch()
    return(
        <div className="post-container">
            <div className="post-content">
                <div className="post-header">
                    <div className="header-author-section">
                        <img className="author-img" src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"/>
                        <h4 className="post-author">{author} </h4>
                    </div>
                    <div className="header-title-section">
                        <h1 className="post-title">{title}</h1> 
                        <span className="post-date">Posted on: {createAt}</span>
                    </div>

                </div>

                <div className="post-body">
                    <p className="post-article">{article}</p>
                </div>
            </div>

            <div className="post-buttons">
                <button onClick={()=>{setId(postId)}}>Udpdate</button>
                <button onClick={()=>{dispatch(deletePost(postId))}}>Delete</button>
            </div>
        </div>
    )
}

export default Post