import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (info, {dispatch}) {
        
        
       try {
            dispatch(preloaderOn())
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
            if(response.status >= 200 && response.status <= 204) {
                const posts = await response.json()
                dispatch(postsInfo(posts))
                dispatch(preloaderOff())
            }
       }
       catch(e) {
        alert(e)
       }
       finally {
        dispatch(preloaderOff())
       }
    }
)


// const postsSlice = createSlice({
//     name: 'postsSlice',
//     initialState: {
//         posts: [],
//         preloader: false
//     },
//     reducers: {
//         postsInfo: (state, action) => {
//             state.posts = action.payload
//         },
//         deletePosts: (state, action) => {
//             state.posts = []
//         },
//         preloaderOn: (state, action) => {
//             state.preloader = true
//         },
//         preloaderOff: (state, action) => {
//             state.preloader = false
//         }
//     }
// })

export const createPost = createAsyncThunk(
    'createPost',
    async function (info, { dispatch }) {
        try {
            dispatch(preloaderOn())
            const options = {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(info)
            }
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts', options)
        } catch (error) {
            alert(error)
        } finally {
            dispatch(preloaderOff())
        }
    }
)

// export const newPost = createAsyncThunk(
//     'newPost',
//     async function (params, { dispatch }) {
//         try {
//             dispatch(preloaderOn())
//             const options = {
//                 method: "POST",
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify(params)
//             }
//             const response = await fetch ('https://fakestoreapi.com/users', options)
//         } catch (e) {
//             alert(e)
//         } finally {
//             dispatch(preloaderOff())
//         }
//     }
// )

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const newPost = createAsyncThunk(
    'newPost',
    async function (params, { dispatch }) {
        try {
            dispatch(preloaderOn());
            const options = {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(params)
            };
            const response = await fetch('https://fakestoreapi.com/users', options); // https://jsonplaceholder.typicode.com/posts
            const data = await response.json();
            return data;
        } catch (e) {
            alert(e);
        } finally {
            dispatch(preloaderOff());
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postResponse: null,
        // другие состояния
    },
    reducers: {
        preloaderOn: (state) => { /* логика включения прелоадера */ },
        preloaderOff: (state) => { /* логика выключения прелоадера */ },
        // другие редьюсеры
    },
    extraReducers: (builder) => {
        builder.addCase(newPost.fulfilled, (state, action) => {
            state.postResponse = action.payload;
        });
    }
});


export const { postsInfo, deletePosts, preloaderOff, preloaderOn } = postsSlice.actions

export default postsSlice.reducer;