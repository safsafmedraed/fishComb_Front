import { combineReducers } from 'redux';
import auth from './auth.red'
import Post from './Post'
import Friends from './friends'
export default combineReducers({

    auth,Post,Friends

});