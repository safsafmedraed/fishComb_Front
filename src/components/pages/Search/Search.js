import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { AiOutlineUserAdd,AiOutlineTeam } from 'react-icons/ai';
import './Search.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFriend } from '../../../Actions/Friends'
import { NavLink } from 'react-router-dom';
import { getUsers } from '../../../Actions/profile';

const Search = ({ friend, addFriend ,getUser }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const friend_id = friend.data.user_id
  // eslint-disable-next-line
 const [disable,setDisable]=useState(false)
  return (
    <div className='row pt-3'>
      <div className='col-1'>
      </div>
      <div className='col-12'>
        <div className='row pt-4 pb-4'>
          <div className='card pt-3 pb-3' id='cardSearsh'>
          <form  onSubmit={e => {
              e.preventDefault();
              addFriend({ friend_id });
             setDisable(true);
            }}>
          <div className='row '>
           <div className='col-sm-1 pt-4 ml-4'>
             <NavLink to={`/dashboard/profileuser/${friend.data.user_id}`}>
             <Avatar src={friend.data.attributes.profile_image} onClick={(e) => getUsers(friend.data.user_id)}  className={classes.large} />
             </NavLink>
              </div>
              <div className='col-sm-8 '>
              <div className='row'>
                <div className='col-sm-5 ml-3 pt-4'>
                  <h5>{friend.data.attributes.first_name.charAt(0).toUpperCase() + friend.data.attributes.first_name.slice(1)} {friend.data.attributes.last_name.charAt(0).toUpperCase() + friend.data.attributes.last_name.slice(1)}</h5>
                  <h6>{friend.data.attributes.about.charAt(0).toUpperCase() + friend.data.attributes.about.slice(1)}</h6>
                </div>
              </div>
            </div>
              <div className='col-sm-2 mr-2 pt-4'>
                {friend && friend.data.attributes.is_friend ===false ? <Button variant="outlined" type="submit" disabled={disable}>Add<AiOutlineUserAdd className='add' /></Button>
                :<NavLink to={`/dashboard/profileuser/${friend.data.user_id}`}>
                  <Button style={{backgroundColor:'white',border:'none'}}><AiOutlineTeam style={{color:'black'}}  /><p style={{color:'black'}}>View Profile</p></Button>
                </NavLink>
                }
              </div>
          </div>
          </form>
          </div>
           </div>
      </div>
    </div>
)
}
Search.propTypes = {
  friend: PropTypes.object.isRequired,
  addFriend: PropTypes.func.isRequired,
  getUsers :PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addFriend ,getUsers })(Search);
