import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom';
import { getThread, addThread } from '../../../Actions/Board';
import Form from 'react-bootstrap/Form';
import './Board.css';
import { Button } from '@material-ui/core';
import SingleThread from './SingleThread';




const Board =( { categories, getThread, addThread , Thread: {thread}}) => {
    useEffect(() => {
        getThread()
    }, [getThread])
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const oncategorychange = e => {
        setcategoryid(e.target.value)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = React.useState(false);
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleOpen1 = () => {
        setOpen1(true);
    };
    const [category_id, setcategoryid] = useState('')

    const [formData, setformData] = useState({
        title: '',
        body: '',
        status: '1'
    })
    const { title, body,status } = formData;
    const onchange = e => setformData({ ...formData, [e.target.name]: e.target.value });
    const submit = e => {
        e.preventDefault();
        addThread(formData);
    }
    return (
        <div>
            <Row className='pt-5 mb-4'>
                <Col md={3}></Col>
                <Col md={4} style={{display:'contents'}}>
                    <Row>
                        <ul className="nav">
                            <Col xs={6}>
                                <li className="nav-item">
                                    <Link className='nav-link' className="link_cart" to={`/dashboard/events`} ><span className="n">Latest</span></Link>
                                </li>
                            </Col>
                            <Col xs={1}></Col>
                            <Col xs={4}>
                                 <li className="nav-item">
                                    <Link className='nav-link' className="link_cart" to={`/dashboard/invited`} ><span className="n" style={{ fontFamily: "arial" }}>New</span></Link>
                                </li>
                           </Col>
                        </ul>
                    </Row>
                </Col>
                    <Col md={5}></Col>
                    <Col>
                        <button className='btn btn-outline-dark' id='Button_board' onClick={handleClickOpen} >Ask Question</button>
                    </Col>         
                </Row>
                <Row className='Side_Bar'>
                    <Col md={3} sm={3} xl={3} className='side_min_bar'>
                        <form onSubmit >
                            <Col md={12} sm={12} xl={12} className="header__input px-0" >
                                <input type="text" placeholder='Search Fishcomb' aria-label="Search" height='25px'  />
                                <button className="col  header__button" >
                                    <svg width="19px" height="19px" version="1.1" xmlns="http://www.w3.org/1999/xlink">
                                        <g id="fishcomb-product-icons-14">
                                            <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
                                        </g>
                                    </svg>
                                </button>
                            </Col>
                        </form>
                        <Row className='pt-2'>
                            <Col xs={4}>
                                <Button className='BoradBotton'><h6>My Account</h6> </Button>
                            </Col> 
                        </Row>
                            </Col>
                            <Col className='border-left'>
                                {thread && thread.map((threads) =>
                                    (
                                    <SingleThread key={threads.id} threads={threads}  />)
                                )}
                            </Col>
                        <Row>   
                    </Row>
                </Row>
                <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <form className='addQuestion' onSubmit={e => submit(e)}>
                        <DialogTitle id="form-dialog-title">Ask Question</DialogTitle>
                            <DialogContent>
                                <Row className=" pt-2">
                                    <Col sm={12} md={12} xl={12}>
                                        <FormControl
                                            className='input_event'
                                            placeholder="Title"
                                            margin="dense"
                                            id="Title"
                                            label="Title"
                                            type="text"
                                            name="title" value={title} onChange={e => onchange(e)} />
                                    </Col>
                                </Row>
                                <Row className='pt-1 pb-1'>
                                </Row>
                                <Row className='pt-3'>
                                    <Col xs={12}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" 
                                                rows={3}
                                                className='input_event'
                                                placeholder="descreption" 
                                                name="body" value={body} onChange={e => onchange(e)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='pt-3'>
                                    <Col md={10} className='mt-3'></Col>
                                    <Col className='pb-4' >
                                        <Button className='btn btn-light pt-2 pb-2 '  onClick={handleClose} type='submit'>Ask Question</Button>
                                    </Col>
                                </Row>
                            </DialogContent>
                        </form>
                    </Dialog>
                </div>
    )
}
Board.prototype={
    categories: PropTypes.object.isRequired,
    getThread: PropTypes.func.isRequired,
    Thread: PropTypes.object.isRequired,
    addThread: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    categories: state.categories,
    Thread : state.Thread,
})
export default connect (mapStateToProps, { getThread, addThread }) (Board);