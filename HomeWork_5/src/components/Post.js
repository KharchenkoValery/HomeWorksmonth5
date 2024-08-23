import React from "react";

const Post = ({postInfo}) => {
    return (
        <div>
            <h1>{postInfo.title}</h1>
            <button>get more</button>
            <p>-----------------------</p>
        </div>
    )
}

export default Post;