import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT, REMOVE_COMMENT ,UPDATE_COMMENT, UPDATE_POST,LOGOUT } from '../Actions/types'


const initialState = {
    posts: [],
    post: [],
    loading: true,
    isAuthenticated: false,
    error: {}
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ADD_POST:
            return {
                isAuthenticated: true,
                ...state,
                posts: [payload,...state.posts ],
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
               // posts: state.posts.map(post => post.id === payload.pivot.post_id ? { ...post,likes: payload  } : post)
            }
        case UPDATE_POST:
            return{
                ...state,
                posts: state.posts.filter(post => post.data.id !== payload),
                loading: false
            } 
        case UPDATE_LIKES:
            return {
                ...state
                , loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.data.id !== payload),
                loading: false
            }
       case ADD_COMMENT:
            //var index =0;
           
            return {
                ...state,
                posts:state.posts
             /* posts:[{
                      
                       ...state.posts[index],
                       comments:[payload,...state.posts[index].comments]
                   }],*/
            }
           
            case UPDATE_COMMENT:
            return{
                ...state,
                post:{ ...state.posts, comments: payload },
                loading: false
            }
           
        case REMOVE_COMMENT:
            return {
                ...state,
                posts:state.posts
               /* posts:[{
                    ...state.posts[0],
                    comments:[...state.posts[0].comments.filter(c=> c.id !== payload)]
                }],*/
                
            }
            case LOGOUT:
            return {
                ...state, 
                post:null,
                posts:[], 
            }
        default:
            return state;



    }




}







