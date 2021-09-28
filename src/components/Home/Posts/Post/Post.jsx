import React from 'react';


function Post (props) {
    return (
        <div className="post BlockTemplate">
            <div className="post_author">{props.author}</div>
            <div className="post_content">{props.text}</div>
        </div>
    )
}

export default Post;