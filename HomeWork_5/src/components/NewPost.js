import React from "react";

const NewPost = ({info}) => {
    return (
        <div>
            <h1>{info.city}</h1>
            <h1>{info.street}</h1>
            <p>-----------------------</p>
        </div>
    )
}

export default NewPost;