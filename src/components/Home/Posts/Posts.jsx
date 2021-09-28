import React from 'react';
import Post from './Post/Post';
import './posts.css';
import {addPostActionCreator, inputPostChangeActionCreator} from '../../../state/home_reduser'

function Posts (props) {
    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost(addPostActionCreator());
    }

    let onInputPostsChange = () => {
        let text = newPost.current.value;
        props.inputPostsChange(text);
    }

    let postsMovePage = props.posts.map(el=>{
        return (<Post author={el.author} text={el.text} />);
    })

    return (
        <div className="home_posts">
            <div className="post_creator BlockTemplate">
                <button onClick={onAddPost}>Create post</button>
                <textarea onChange={onInputPostsChange} value={props.postInput} ref={newPost}></textarea>
            </div>
            <div className="posts_wrapper">
                {postsMovePage}
            </div>
        </div>
    )
}

export default Posts;