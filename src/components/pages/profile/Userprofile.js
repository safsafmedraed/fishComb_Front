import React, { Fragment ,useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { getUsers , getNetwork} from '../../../Actions/profile';
import { Col, Row } from 'react-bootstrap';
import './Profile.css'
import ContentUser from './content/ContentUser';


const Userprofile = ( {  match,getUsers, Profile:{profile} ,getNetwork}) => {
  useEffect(() => {
    getUsers(match.params.id);
}, [getUsers, match.params.id]
)
useEffect(() => {
  getNetwork(match.params.id);
}, [getNetwork, match.params.id]
)
return (
    <Fragment>
    <Row>
      <Col sm={12}>
        <form >
         <div className='Top___header px-0'>
            <Image src={profile && profile.data.attributes.cover_image} alt='' className='coverture'/>
              <div className='row'>
                <div className='col-sm-11'></div>
              </div>
          </div>
        </form>
        <div>
          <form >
            <div className='info' >
              <Image  className="profile_img" src={profile && profile.data.attributes.profile_image}  alt='' roundedCircle  />
                <label htmlFor="icon-button-file">
                  <div className='row'>
                  </div>
            </label>
          </div>
          </form>
          </div>
      <div>
        <h2 className='d-flex justify-content-center pb-4'>
          {profile && profile.data.attributes.first_name} {profile && profile.data.attributes.last_name}
        </h2>
      </div>
      </Col>
      </Row>
      <Row className='pb-5'>
        <Col sm={2}></Col>
        <Col sm={5}>
        
        </Col>
      </Row>
      <Row className='pt-2'>
        <Col sm={1}></Col>
        <Col sm={9}>
        <ContentUser />
        </Col>
        <Col sm={1}></Col>
      </Row>
    </Fragment>
    )
}

Userprofile.propTypes = {
    getUsers: PropTypes.func.isRequired,
    getNetwork: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    Profile:state.Profile
})
export default connect(mapStateToProps,{getUsers , getNetwork}) (Userprofile);

