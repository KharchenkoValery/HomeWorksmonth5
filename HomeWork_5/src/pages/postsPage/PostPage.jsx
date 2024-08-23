import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts, getPosts } from "../../store/PostsSlice";
import Post from "../../components/Post";
import { Spinner } from "react-bootstrap";


const PostPage = () => {
    
    const {posts, preloader}  = useSelector(state => state.postReducer)
    const dispatch = useDispatch()
    const getPostsFunction = () => {
        dispatch(getPosts())
    }

    const deleteAllFunc = () => {
        dispatch(deletePosts())
    }

    useEffect(() => {
        getPostsFunction()
    }, [])
    console.log(posts);
    
    return (
       
           <>
            {
                preloader ? <Spinner animation="border"/>
                :  
                <div>
                    <button onClick={deleteAllFunc}>delete</button>
                    { posts.map(post => <Post key={post.id} postInfo={post}/>) }
                 </div>
            }
           </>
           
           
       
    )
}
export default PostPage;