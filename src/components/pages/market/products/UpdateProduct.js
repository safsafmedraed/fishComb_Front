import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from 'react-bootstrap/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar } from "@material-ui/core";
import { updateProduct } from '../../../../Actions/Market';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Switch from '@material-ui/core/Switch';
const UpdateProduct = ({ auth: { user }, updateProduct, market: { product, categories }, loading }) => {
    /**********************************/
    /*************************/
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [category_id, setcategoryid] = useState('')
    const [price, setprice] = useState('')
    const [stock, setstock] = useState('')
    const [image, setimage] = useState('')
    const [status, setStatus] = useState('')
    useEffect(() => {
        setname(loading || !product.name ? '' : product.name)
    }, [loading])
    useEffect(() => {
        setcategoryid(loading || !product.category_id ? '' : product.category_id)
    }, [loading])
    useEffect(() => {
        setdescription(loading || !product.description ? '' : product.description)
    }, [loading])
    useEffect(() => {
        setStatus(loading || !product.status ? 1 : product.status)
    }, [loading])
    useEffect(() => {
        setimage(loading || !product.image ? '' : product.image)
    }, [loading])
    useEffect(() => {
        setstock(loading || !product.stock ? '' : product.stock)
    }, [loading])
    useEffect(() => {
        setprice(loading || !product.price ? '' : product.price)
    }, [loading])

    const onnamechange = e => {
        setname(e.target.value)
    }
    const ondescchange = e => {
        setdescription(e.target.value)
    }
    const oncategorychange = e => {
        setcategoryid(e.target.value)
    }
    const onpricechange = e => {
        setprice(e.target.value)
    }
    const onstockchange = e => {
        setstock(e.target.value)
    }
    const onimagechange = e => {
        setimage(e.target.files[0])
    }
    const onstatuschange = e => {
        setStatus(e.target.value)
    }
    /**********************/
    const [state, setState] = React.useState({ checkedA: true });
    const handleswitch = (product) => {
        setState({
            ...state,
            [product.target.name]: product.target.checked
        });
        if (product.target.checked === true) {
            setStatus(1)
        } else {
            setStatus(0)
        }
        console.log(status)
    };
    /**************************/
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('name', name);
        file.append('description', description);
        file.append('category_id', category_id);
        file.append('price', price);
        file.append('stock', stock);
        file.append('image', image);
        file.append('status', status);
        updateProduct(file, product.id)
        setOpen2(false);
        e.target.reset();
    }
    /*****************************/
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const [open2, setOpen2] = React.useState(false);
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleOpen2 = () => {
        setOpen1(true);
    };
    /*********************************/
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    /**********************************/
    return (
        <Fragment>

            <div>
                <form className='addProduct' onSubmit={e => submit(e)}>
                    <DialogContent>
                        <div className='row'>
                            <div className='col-sm-1 mr-2'>
                                <Avatar src={user && user.attributes.profile_image} />
                            </div>
                            <div className='col-sm-10 pt-3 '>
                                <div className='row'>
                                    <div className='row'>
                                        <div className='col-sm-12 pb-3'>
                                            <h6><b>{user && user.attributes.first_name.charAt(0).toUpperCase() + user.attributes.first_name.slice(1)}  {user && user.attributes.last_name.charAt(0).toUpperCase() + user.attributes.last_name.slice(1)}</b> </h6>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='row pt-3'>
                                            <div className='col-sm-12'>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Label>Name Product</Form.Label>
                                                    </Col>
                                                    <Col xs={8}>
                                                        <FormControl
                                                            className='input_event'
                                                            placeholder={product && product.name}
                                                            label="Product_name"
                                                            name="name" value={name}
                                                            onChange={onnamechange}
                                                            type="text" />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className='row pt-3'>
                                            <div className='col-sm-12'>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Label>Price </Form.Label>
                                                    </Col>
                                                    <Col xs={8}>
                                                        <FormControl
                                                            className='input_event'
                                                            placeholder={product && product.price}
                                                            margin="dense"
                                                            name="price" value={price} onChange={onpricechange}
                                                            type="text" />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className='row pt-3 pb-3'>
                                            <div className='row pt-3 '>
                                                <div className='col-sm-12'>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <Select
                                                                className='col-md-12'
                                                                labelId="demo-controlled-open-select-label"
                                                                id="demo-controlled-open-select"
                                                                open={open1}
                                                                onClose={handleClose1}
                                                                onOpen={handleClickOpen1}
                                                                value={category_id}
                                                                name="category_id"
                                                                onChange={oncategorychange}>
                                                                {categories && categories.map(c =>
                                                                    (<MenuItem key={c.id} value={c.id} >{c.name}</MenuItem>)
                                                                )}
                                                            </Select>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row pt-2'>
                                            <div className='col-12 pb-3'>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Label>Quantity</Form.Label>
                                                    </Col>
                                                    <Col xs={8}>
                                                        <FormControl
                                                            placeholder={product && product.stock}
                                                            className='input_event'
                                                            margin="dense"
                                                            name="stock" value={stock} onChange={onstockchange}
                                                            type="text" />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className='row pt-3 pb-2'>
                                            <div className='col-12'>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Label>Description</Form.Label>
                                                    </Col>
                                                    <Col xs={8}>
                                                        <FormControl
                                                            placeholder={product && product.description}
                                                            className='input_event'
                                                            margin="dense"
                                                            id="Description"
                                                            as="textarea" aria-label="With textarea"
                                                            name="description" value={description} onChange={ondescchange}
                                                            type="textarea" />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <Row className='pt-2 pb-2'>
                                            <Col xs={12}>
                                                <FormControl // placeholder={event && event.status}
                                                    className='input_event'
                                                    hidden='true'
                                                    id="status"
                                                    name="status"
                                                    value={
                                                        status.toString()
                                                    }
                                                    type="textarea"
                                                    fullWidth
                                                    onChange={onstatuschange} />
                                                        Disable Product
                                                    <Switch checked={
                                                    state.checkedA
                                                    }
                                                    onChange={handleswitch}
                                                    name="checkedA"
                                                    inputProps={
                                                        { 'aria-label': 'secondary checkbox' }} />
                                                    Enable Product
                                            </Col>
                                        </Row>
                                        <div className='row pt-3 pb-3'>
                                            <div className='col-md-5'>
                                                <div className='row '>
                                                    <div className="btn-group btn-group-toggle col-md-12  ">
                                                        <input accept="image/*" id="icon-button-file" type="file" onChange={onimagechange} name='image' />
                                                        { /*<Button variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                                        <span  >Upload Video </span>
                                                        </Button>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Row className='pt-3 pb-3'>
                                        <Col xs={7}></Col>
                                        <Col xs={5}>
                                            <Button type='submit'
                                                variant="contained" color="primary"
                                                onClick={handleClose2}>
                                                Update Product
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </form>
            </div>

        </Fragment>
    )
}
UpdateProduct.prototype = {
    auth: PropTypes.object.isRequired,
    updateProduct: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    market: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    market: state.market,
    updateProduct: state.market,
    categories: state.market,
    auth: state.auth
})
export default connect(mapStateToProps, { updateProduct })(UpdateProduct);