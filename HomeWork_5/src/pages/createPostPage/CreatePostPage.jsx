import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/PostsSlice";

const CreatePostPage = () => {

    const [form, setForm] = useState({})
    const dispatch = useDispatch()

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submit = (e) =>{
        e.preventDefault()
        dispatch(createPost(form))
    }
    console.log(form);
    
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="title" onChange={changeForm}/>
                <textarea name="body" cols={"30"} rows={"10"} onChange={changeForm}></textarea>
                <button type="submit">create post</button>
                {/* <h1>{form.title}</h1> */}
            </form>
            
        </div>
    )
}

export default CreatePostPage;