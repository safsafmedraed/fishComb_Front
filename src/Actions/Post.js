import axios from 'axios';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST ,GET_POST ,UPDATE_COMMENT ,ERROR_UPDATE, UPDATE_POST, POST_ERROR_UPDATE } from './types';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
toast.configure();
//get posts
export const getPosts = () => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/posts/getaLlposts', {}, config)
        //console.log(res.data)
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (error) {
        toast.error('Error happened when fetching posts');
        dispatch({
            type: POST_ERROR,
        });
    }
}
//Add like
export const addLike = (post_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/posts/like`, { post_id }, config)
        console.log(res.data.like_count)
        dispatch({
            type: UPDATE_LIKES,
            payload: res.data.like_count,
        })
    } catch (error) {
        dispatch({
            type: POST_ERROR,
        });
    }
}
//delete post 
export const deletePost = id => async dispatch => {
    if (window.confirm('Are you sure? this can not be undone')) {
        try {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('user'),
                    'content-Type': 'application/json'
                }
            }
            await axios.delete(`/api/posts/${id}`, config)
            dispatch({
                type: DELETE_POST,
                payload: id
            })
            toast.info('Delete success');
        } catch (error) {
            dispatch({
                type: POST_ERROR,
            });
            toast.error('Error happened');
        }
    }
}
//Add post 
export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/posts', formData, config)

        dispatch({
            type: ADD_POST,
            payload: res.data.data
        })
        // save post id 
        // create function 
        toast.info('Post Created');
        // 1 call get post function params post id 
        // 2 update layout ==> show post 
    } catch (error) {
        toast.error('Error occured');
        dispatch({
            type: POST_ERROR
        });
    }
}
//get post
export const getPost = (post_id) =>async dispatch=> {
  const config = {
    headers : {
         Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/posts/post`,{"post_id":post_id},config);
        dispatch({
            type: GET_POST,
            payload : res.data.data
        })
        console.log(res)
    }catch{   
    }  
}
// Update Post 
export const updatePost  = (formData ,post_id) => async dispatch  => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.patch(`/api/posts/${post_id}`,formData,config)
        dispatch ({
            type: UPDATE_POST,
            payload: res.data
        })
        toast.info('Post Updated');
    }catch{
        dispatch({
            type: POST_ERROR_UPDATE,
        })
        toast.error('Error Updated')
    }
}
//Add comment
export const addComment = (idpost, formData) => async (dispatch,getState) => {
   // console.log(getState().Post.posts)
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'application/json'
        }
    }
    try {
            await axios.post(`/api/posts/${idpost}/comment`, formData, config)
             const res = await axios.post('/api/posts/getaLlposts', {}, config)
             //  const finded= getState().Post.posts.filter(el=>el.id !==res.data.post_id)
       // console.log(res.data.data)
        dispatch({
            type: GET_POSTS,
            payload: res.data //finded.concat(res.data)
            
        })
        toast.success('Your have commented this Post');
    } catch (error) {
        dispatch({
            type: POST_ERROR,
        });
        toast.error('Comment Error');
    }
}
//delete Comment 
export const deleteComment = id => async dispatch => {
    if (window.confirm('Are you sure? this can not be undone')) {
        try {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('user'),
                    'Content-Type': 'application/json'
                }
            }
            await axios.delete(`/api/posts/comments/${id}`, config);
            const res = await axios.post('/api/posts/getaLlposts', {}, config)
            // console.log(res.data.data)
            //console.log(res.data)
            dispatch({
                type: GET_POSTS,
                payload: res.data,

            })
            toast.success('Delete success');
        } catch (error) {
            toast.error('Delete error');
            dispatch({
                type: POST_ERROR,
            });
        }

    }

}
//Update comments
export const updateComment = (commentId , formData) => async dispatch => {
    const config = {
        headers: {
            Authorization : 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'application/json'
        }
    }
    try {
         await axios.patch(`/api/posts/${commentId}/comment`,formData,config);
         const res = await axios.post('/api/posts/getaLlposts', {}, config)
        dispatch({
            type:UPDATE_COMMENT,
            payload: res.data
        })
     }
     catch (error) {
        dispatch({
            type: ERROR_UPDATE,
        });
     }
}