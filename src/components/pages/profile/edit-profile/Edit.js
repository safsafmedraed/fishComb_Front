import React from 'react'
import { Fragment ,useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { edit } from '../../../../Actions/profile';
import {  withRouter } from 'react-router-dom';
export const Edit = ( { auth: {user}, edit , loading , history}) => {
    const [formdata, setFormData] = useState({
        first_name: '',
        last_name: '', 
        birthday: '',
        phone: '',
        about: '',
        username: '',
        location:'',
        profile_image: '',
      });
      const {
        first_name,
        last_name,
        birthday,
        phone,
        about,
        location,
        username
      } = formdata;
      useEffect(() => {
        setFormData({
        })
      }, [loading])
      const onchange = e => setFormData({ ...formdata, [e.target.name]: e.target.value });
      const onSubmit = e => {
        e.preventDefault();
        edit(formdata, history, true);
      }
return (
        <Fragment>
             <div className='row pt-1'>
              <div className='col-sm-12'>
                <form className='card ' id='cardpro' onSubmit={e => onSubmit(e)}  >
                  <div className='kk' >
                    <div className='row'>  
                    <div className='col-sm-9'></div>
                    <div className='col-sm-2'>
                    <div className="btn-group btn-group-toggle col-md-12 ">
                      <Button  type='submit' variant="outlined">
                        <span className='button__Edit'> Save Update </span>
                      </Button>
                      </div>
                    </div>
                  </div>
                  <div className='row pt-4 pb-3'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <input className="form-control mb-4"  placeholder={user && user.attributes.first_name} autoComplete="first_name" name="first_name" value={first_name} onChange={e => onchange(e)} />
                    </div>
                  <div className='col-sm-6'>
                <input className="form-control mb-4"  placeholder={user && user.attributes.last_name} autoComplete="last_name" name="last_name" value={last_name} onChange={e => onchange(e)} />
              </div>
             </div>
              <div className='row'>
                <div className='col-sm-12'>
                        <input className="form-control mb-4"  placeholder={user && user.attributes.name} autoComplete="username" name="username" value={username} onChange={e => onchange(e)} />
                        <input className="form-control mb-4 "  placeholder={user && user.attributes.location} autoComplete="location" name="location" value={location} onChange={e => onchange(e)} />
                        <input className="form-control mb-4 "  placeholder={user && user.attributes.birthday} autoComplete="birthday" name="birthday" value={birthday} onChange={e => onchange(e)} />
                        <input className="form-control mb-4 "  placeholder={user && user.attributes.phone} autoComplete="phone" name="phone" value={phone} onChange={e => onchange(e)} />  
                        <textarea className="form-control mb-4" placeholder={user && user.attributes.about} autoComplete="about" name="about" value={about} onChange={e => onchange(e)}/>
                </div>
                </div>
              </div>
           
             </div>
            </form>
          </div>
          <div className="col-sm-2">
          </div>
          
        </div>
        </Fragment>
    )
}
Edit.propTypes = {
    auth: PropTypes.object.isRequired,
    editt: PropTypes.func.isRequired,
  };
const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps, { edit })(withRouter(Edit));

