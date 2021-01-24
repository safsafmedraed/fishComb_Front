import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './Events.css';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addEvent, getevents, sortEvents,myevents,search } from '../../../Actions/events';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Single from './single'
import FormControl from 'react-bootstrap/FormControl'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SortIcon from '@material-ui/icons/Sort';

const Events = ({ addEvent, getevents, events: { events, categories },sortEvents,myevents,search }) => {
    useEffect(() => {
        getevents()
    }, [getevents])
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category_id: '',
        location: '',
        date: '',
        cover: 'non',
        video_link: '',
        status: '1'
    })
    const [open1, setOpen1] = React.useState(false);
    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
    };

    // eslint-disable-next-line
    const { name, description, category_id, location, date, cover, video_link, status } = formData;
    const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const submit = e => {
        e.preventDefault();
        addEvent({
            name,
            description,
            category_id,
            location,
            date,
            cover: 'non',
            video_link,
            status: '1'
        })
        e.target.reset();
    }
    /****************************************** */
    const [loc,setlocation]=useState({
        location1:'location',
        asc:'asc'
    })
    const {location1 ,asc}=loc;
    const onchange1 = e => setlocation({ ...loc, [e.target.name]: e.target.value });
    const submit1 = e => {
        e.preventDefault();
        console.log(location1+'*****'+asc)
        sortEvents(loc);
    }
    const [filter, setFilter] = React.useState('name');
    const [value,setValue] =React.useState('');
    const handleChange = (event) => {
      setFilter(event.target.value);
      
    };
    const handleChange1 =e=>{
        setValue(e.target.value)
    }
    const onsubmit1=e=>{
        e.preventDefault();
        console.log(filter)
        console.log(value)
        search(filter,value)
    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-12 pt-5 mt-5'>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className="col-8 pb-4">
                        <ul className="nav nav-pills nav-justified " id='navprofil'>
                            <li className="nav-item">
                                <NavLink to={`/NavEvents`} className="m"><span className="n">All Webinars</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/MyStream`} className="m"><span className="n">My Streams</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/invited`} className="m"><span className="n">Invited Webinars</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <span className="filter">Filter</span>
                                <form onSubmit={e=>submit1(e)}>
                                <div className='row'>
                                <div className='col-sm-1'>

                                    <div className='col-sm-1 filtre'>

                                       <div className='col-xs-2 mr-2'> 
                                       <select  value={location1}

                                                name="location1"
                                                onChange={e => onchange1(e)} >
                                            <option value='location'>
                                                    Location
                                             </option>
                                            <option value='category'>
                                                Categories
                                            </option>
                                        </select>
                                        </div>
                                   <div className='col-xs-2 mr-2'> <select value={asc}

                                                name="asc"
                                                onChange={e => onchange1(e)} >
                                        <option value='asc'>&#8593;</option>
                                        <option value='desc'>&#8595;</option>
                                    </select></div>
                                    <div className='col-xs-3'><button type='submit' id='button_sort'> <SortIcon/> Sort Event</button></div>
                                </div>
                                </div>
                                </div>
                                
                                
                                </form>
                                        

                            </li>
                        </ul>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3  side_min_bar'>
                    <form onSubmit={e => onsubmit1(e)} >
                        <div className="col-md-12 header__input" >
                        
     
    
                            <input type="text" placeholder='Search Fishcomb' aria-label="Search" height='25px' value={value} onChange={handleChange1}/>
                            <input  type="checkbox" value="username" onChange={handleChange} /> by user
                            {/*<RadioGroup  className="radio_input col-md-5" aria-label="gender" name="gender1" value={filter} onChange={handleChange}>
                                     <FormControlLabel value="username" control={<Radio />} label="By user" />
    </RadioGroup>*/}
                            <button className="col-1  header__button" >
                                <svg width="19px" height="19px" version="1.1" xmlns="http://www.w3.org/1999/xlink">
                                    <g id="fishcomb-product-icons-14">
                                        <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
                                    </g>
                                </svg>
                               
                            </button>
                        </div>
                       
                       
                        </form>
                        <Button className="event" onClick={myevents}>My Events</Button><br />



                        <Button className="event" onClick={handleClickOpen}>
                            Add Events
                        </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className='dialogForm'   >
                            <form className='add__event'onSubmit={e => submit(e)}>
                                <DialogTitle id="form-dialog-title">Add event</DialogTitle>
                                <DialogContent>
                                    <div className="row pt-3">
                                        <div className=' col-md-12'>
                                            <FormControl
                                                className='input_event'
                                                placeholder="Title"
                                                margin="dense"
                                                id="Title"
                                                label="Title"
                                                type="text"
                                                name="name" value={name} onChange={e => onchange(e)}
                                            /></div></div>
                                    <div className="row pt-3">
                                        <div className='col-8'>
                                            <FormControl
                                                className='input_event'
                                                margin="dense"
                                                id="Date"
                                                type="Date"

                                                name="date" value={date} onChange={e => onchange(e)}
                                            />

                                        </div>
                                        <div className='col-12'>


                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open1}
                                                onClose={handleClose1}
                                                onOpen={handleOpen1}
                                                value={category_id}
                                                name="category_id"
                                                onChange={e => onchange(e)}
                                            >
                                                {categories && categories.map(c =>
                                                    (<MenuItem key={c.id} value={c.id} >{c.name} </MenuItem>)

                                                )}

                                            </Select>


                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className='col-sm-12'>
                                            <Select
                                                 
                                                name="location" value={location} onChange={e => onchange(e)}
                                            >
                                                <option value='default'>Location</option>
                                        <option value="Afganistan" className='reg__input'>Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bonaire">Bonaire</option>
                                        <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Canary Islands">Canary Islands</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Channel Islands">Channel Islands</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Island">Cocos Island</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote DIvoire">Cote DIvoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curaco">Curacao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Ter">French Southern Ter</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Great Britain">Great Britain</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Hawaii">Hawaii</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="India">India</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea North">Korea North</option>
                                        <option value="Korea Sout">Korea South</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Midway Islands">Midway Islands</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Nambia">Nambia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherland Antilles">Netherland Antilles</option>
                                        <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                        <option value="Nevis">Nevis</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau Island">Palau Island</option>
                                        <option value="Palestine">Palestine</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Phillipines">Philippines</option>
                                        <option value="Pitcairn Island">Pitcairn Island</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Republic of Montenegro">Republic of Montenegro</option>
                                        <option value="Republic of Serbia">Republic of Serbia</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="St Barthelemy">St Barthelemy</option>
                                        <option value="St Eustatius">St Eustatius</option>
                                        <option value="St Helena">St Helena</option>
                                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                        <option value="St Lucia">St Lucia</option>
                                        <option value="St Maarten">St Maarten</option>
                                        <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                        <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                        <option value="Saipan">Saipan</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="Samoa American">Samoa American</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Tahiti">Tahiti</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Erimates">United Arab Emirates</option>
                                        <option value="United States of America">United States of America</option>
                                        <option value="Uraguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City State">Vatican City State</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                        <option value="Wake Island">Wake Island</option>
                                        <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zaire">Zaire</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                        
                                            </Select>

                                            </div>
                                        </div>
                                    <div className="row pt-3">
                                        <div className='col-sm-12'>
                                            <FormControl
                                                placeholder="Description"
                                                className='input_event'
                                                margin="dense"
                                                id="Description"
                                                as="textarea" aria-label="With textarea"
                                                type="textarea"

                                                name="description" value={description} onChange={e => onchange(e)}
                                            /></div></div>
                                    <div className='row pt-3'>


                                        <div className="btn-group btn-group-toggle col-md-12  ">
                                            <Button variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                                <span  >Upload Video </span>

                                            </Button>
                                        </div>  </div>
                                    <div className="row pt-3">
                                        <div className='col-sm-12'>
                                            <FormControl
                                                placeholder="Video Link"
                                                className='input_event'
                                                margin="dense"
                                                id="video"

                                                type="textarea"
                                                fullWidth
                                                name="video_link" value={video_link} onChange={e => onchange(e)}
                                            /></div></div>
                                    <div className='row pt-2 px-0'>
                                        <div className='col-md-9'></div>
                                        <div className='col-md-3'>
                                        <Button type='submit'
                                         style={{ backgroundColor: "#f2f3f3", color: 'black', borderRadius: '0' }} 
                                         onClick={handleClose}>
                                        Add Event
                                            </Button>
                                            </div>
                                    </div>
                                </DialogContent>



                            </form>
                        </Dialog>



                    </div>

                    <div className='col-md-9 ' id='body'>
                        <div className='row'>
                            <div className='col-md-12 pb-4'><h6 className="h66"><b>Featred</b></h6></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-3'> <div className='image_holder grid '>
                                <img src='https://picsum.photos/id/99/200/300' width="200" height="150" alt='event' />
                                <div className='description'>
                                   <span>lorem ipsuem</span> <br />

                                    <span>lorem ipsuem</span> <br />

                                </div>
                            </div>
                            </div>
                            <div className='col-md-3'> <div className='image_holder grid '>
                                <img src='https://picsum.photos/id/100/200/300' width="200" height="150" alt='event' />
                                <div className='description'>
                                    <span>lorem ipsuem</span> <br />
                                    <span>lorem ipsuem</span> <br />
                                </div>
                            </div></div>
                            <div className='col-md-3'>
                                <div className='image_holder grid '>
                                    <img src='https://picsum.photos/id/77/200/300' width="200" height="150" alt='event' />
                                    <div className='description'>
                                        <span>lorem ipsuem</span> <br />
                                        <span>lorem ipsuem</span> <br />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image_holder grid '>
                                    <img src='https://picsum.photos/id/98/200/300' width="200" height="150" alt='event' />
                                    <div className='description'>
                                        <span>lorem ipsuem</span> <br />
                                        <span>lorem ipsuem</span> <br />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-md-12 mt-5 mb-3'> <h6 className="h66"><b>All Events</b></h6></div>
                            <div className='row'>
                                {events && events.map((event) =>
                                (
                                    <Single key={event.id} event={event} />)
                                )}

                            </div>
                        </div>

                    </div>


                </div>
            </div>



        </div>
    )
}

Events.prototype = {
    addEvent: PropTypes.func.isRequired,
    getevents: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    sortEvents: PropTypes.func.isRequired,
    myevents: PropTypes.func.isRequired,
    search:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    addEvent: state.addEvent,
    events: state.events,
    categories: state.categories,
})
export default connect(mapStateToProps, { addEvent, getevents, sortEvents,myevents,search })(Events);
