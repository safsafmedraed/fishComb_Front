import React from 'react'
import {Fragment} from 'react'
import {checkout} from '../../../../Actions/cart'
import PropTypes from 'prop-types';
import {useState} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import {Button, Col, Row,Card} from 'react-bootstrap';
import { connect } from 'react-redux';


const Checkout = ({checkout}) => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        shipping_address: "",
        phone: "",
        post_code: "",
        email: "",
        description: ""
    })
    const {
        first_name,
        last_name,
        shipping_address,
        phone,
        post_code,
        email,
        description
    } = formData;
    const onchange = e => setFormData({  
        ...formData,
        [e.target.name]: e.target.value
    });
    const [disable,setdisable]=useState(false)
    const submit =e=>{
        e.preventDefault()
      checkout(formData)
      setdisable(true)
    }
   
    return (
        <Fragment>
           
            <Row className='pb-5'>
            
                <form onSubmit={e=>submit(e)} >
                    <Row>
                    <Col xs={2}></Col>
                    <Col sm={4}
                        md={4}
                        className='pt-3 pb-3'>
                        <FormControl className='input_event' placeholder="first_name" margin="dense" label="first_name" name="first_name"
                            value={first_name}
                            onChange={
                                e => onchange(e)
                            }
                            type="text"
                            disabled={disable}
                            /></Col>
                           <Col sm={4}
                        md={4}
                        className='pt-3 pb-3'>
                        <FormControl className='input_event' placeholder="last_name" margin="dense" label="last_name" name="last_name"
                            value={last_name}
                            onChange={
                                e => onchange(e)
                            }
                            disabled={disable}
                            type="text"/></Col>
                    </Row>
                    <Row>
                    <Col xs={2}></Col>
                    <Col sm={4}
                        md={4}
                        className='pt-3 pb-3'>
                        <FormControl className='input_event' placeholder="shipping_address" margin="dense" label="shipping_address" name="shipping_address"
                            value={shipping_address}
                            onChange={
                                e => onchange(e)
                            }
                            disabled={disable}
                            type="text"/></Col>
                               <Col sm={4}
                        md={4}
                        className='pt-3 pb-3'>
                        <FormControl className='input_event' placeholder="phone" margin="dense" label="phone" name="phone"
                            value={phone}
                            onChange={
                                e => onchange(e)
                            }
                            disabled={disable}
                            type="text"/></Col>
                    </Row>
                         <Row>
                         <Col xs={2}></Col>
                         <Col sm={4}
                        md={4}
                        className='pt-3 pb-3'>
                        <FormControl className='input_event' placeholder="post_code" margin="dense" label="post_code" name="post_code"
                            value={post_code}
                            onChange={
                                e => onchange(e)
                            }
                            disabled={disable}
                            type="text"/></Col>
                               <Col sm={4}
                        md={4}
                        className='pt-3 pb-3'>
                        <FormControl className='input_event' placeholder="email" margin="dense" label="email" name="email"
                            value={email}
                            onChange={
                                e => onchange(e)
                            }
                            disabled={disable}
                            type="text"/></Col>
                         </Row>
                          <Row>
                          <Col xs={2}></Col>
                          <Col sm={8}
                        md={8}
                        className='pt-3 pb-3'>
                        <FormControl className='input_event' placeholder="description" margin="dense" label="description" name="description"
                            value={description}
                            onChange={
                                e => onchange(e)
                            }
                            disabled={disable}
                            type="text"/></Col>
                          </Row>
                         <Row>
                         <Col xs={2}></Col>
                         <Col sm={3} md={3}><Button type='submit'  variant="outline-secondary" disabled={disable}>Confirm</Button></Col>
                         </Row>  
                </form>
            
                </Row>   
        </Fragment>
    )

};
Checkout.prototype = {
    checkout: PropTypes.func.isRequired
}
export default connect(null,{checkout}) (Checkout);
