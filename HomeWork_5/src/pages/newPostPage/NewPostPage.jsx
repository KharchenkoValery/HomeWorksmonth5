// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { newPost } from "../../store/PostsSlice";
// // import NewPost from "../../components/newPost";

// const NewPostPage = () => {
    
//     const [newForm, setNewForm] = useState({})
//     const dispatch = useDispatch()

//     const changeNewForm = (e) => {
//         setNewForm({...newForm, [e.target.name]: e.target.value})
//     }

//     const savaChanges = (e) => {
//         e.preventDefault()
//         dispatch(newPost(newForm))
        
//     }
  
  
//     return (
//         <div>
//              <form onSubmit={savaChanges}>
//                 <input type="text" name="city" onChange={changeNewForm}/>
//                 {/* <textarea name="metadata" cols={"30"} rows={"10"} onChange={changeNewForm}></textarea> */}
//                 <input type="text" name="street" onChange={changeNewForm} />
//                 <button type="submit">create new post</button>
//             </form>
//         </div>
//     )
// }

// export default NewPostPage;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../../store/PostsSlice";

const NewPostPage = () => {
    const [newForm, setNewForm] = useState({});
    const dispatch = useDispatch();
    const postResponse = useSelector((state) => state.posts.postResponse);
    

    const changeNewForm = (e) => {
        setNewForm({ ...newForm, [e.target.name]: e.target.value });
       
    };

    const saveChanges = (e) => {
        e.preventDefault();
        dispatch(newPost(newForm));
    };

    return (
        <div>
            <form onSubmit={saveChanges}>
                <input type="text" name="city" onChange={changeNewForm} />
                <input type="text" name="street" onChange={changeNewForm} />
                <button type="submit">Create New Post</button>
            </form>
            {postResponse && (
                <div>
                    <h3>Response from Server:</h3>
                    <p>City: {newForm.city}</p>
                    <p>Street: {newForm.street}</p>
                    <pre>{JSON.stringify(postResponse, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default NewPostPage;



