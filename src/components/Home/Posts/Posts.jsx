import React from 'react';
import Post from './Post/Post';
import './posts.css';
import {addPostActionCreator, inputPostChangeActionCreator} from '../../../state/home_reduser'

function Posts (props) {
    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onInputPostsChange = () => {
        let text = newPost.current.value;
        props.inputPostsChange(text);
    }

    let a = new Array();
    let posts = props.posts

    function postsMovePage () {
        for(let key in props.posts){
            a.push(<Post author={posts[key].author} text={posts[key].text}/>);
        }
    }
    postsMovePage();

    
    return (
        <div className="home_posts">
            <div className="post_creator BlockTemplate">
                <button onClick={onAddPost}>Create post</button>
                <textarea onChange={onInputPostsChange} value={props.postInput} ref={newPost}></textarea>
            </div>
            <div className="posts_wrapper">
                {a}
            </div>
        </div>
    )
}

export default Posts;