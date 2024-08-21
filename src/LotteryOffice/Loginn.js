import React, { Fragment } from 'react';
import { RiAppleFill,  RiFacebookFill,  RiGoogleFill, } from 'react-icons/ri'
import './Stylee.css';
import { Link } from 'react-router-dom';
import Header from './Header';


function Loginn() {
  return (
    <Fragment>
        <Header/>
        <div className="col-12 overflow-y-scroll Login_Main loginInPage">
            
                <div className="col-6 mx-auto bg-dark loginmain ">
                    <div className="p-2 bg-dark position-relative rounded-4 rounded-bottom-0 text-end">
                        <div className="btn-close position-absolute top-0  end-0 bg-white p-2 rounded-circle"></div>
                        <h4 className='text-center mt-5 text-light '>Log in</h4>
                        <p className='text-light'>Don't have an Account? <Link to="/signup" className='text-white linked'>Sign Up</Link></p>

                    </div>
                    <div className="form col-8 mx-auto py-3 px-2">
                            <input type="text" className='rounded-pill LoginFormDetails ps-3 border-2 border-primary col-12' name="" placeholder='Email' id="" style={{outline:'none'}}/>
                            <input type="text" className='rounded-pill LoginFormDetails ps-3 mt-3 border-2 border-primary col-12' placeholder='password' name="" id="" style={{outline:'none'}}/>
                            <div className="d-flex justify-content-center mt-3">
                            <Link to="#" className=' linked'>Forgot Password?</Link>
                            </div>
                            <div className="btn col-12 btn-danger LoginFormDetails mt-3 rounded-pill" style={{padding:"10px 0px"}}>
                                Log in
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <hr className='col-5 linked' />
                                <span className='linked'>OR</span>
                                <hr className='col-5 linked' />
                            </div>
                            <div className="bg-dark lo mt-3 px-3 py-3 rounded-4 text-center">
                                <h5 className='text-light'>Log in with SMS code</h5>
                                <p className='linked'>Get a one-time access code via SMS</p>
                                <input type="date" className='rounded-pill LoginFormDetails ps-3 border-2 border-primary col-12' name="" placeholder='Email' id="" style={{outline:'none'}}/>
                            <input type="number" className='rounded-pill LoginFormDetails ps-3 mt-3 border-2 border-primary col-12' placeholder='Verified mobile phone number' name="" id="" style={{outline:'none'}}/>
                            <div className="btn col-12 btn-danger LoginFormDetails mt-3 rounded-pill" style={{padding:"10px 0px"}}>
                                Send code
                            </div>
                            
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <hr className='col-5 linked' />
                                <span className='linked'>OR</span>
                                <hr className='col-5 linked' />
                            </div>

                            <div className="col-12 d-flex align-items-center rounded-pill bg-primary ps-1">
                                <div className='rounded-circle d-flex justify-content-center align-items-center' style={{ height:'50px',width:'50px'}}>
                                <RiFacebookFill className='fs-5' />
                                </div>
                                <p className='m-0 col-9 text-center text-light'>Log in with Facebook</p>
                            </div>

                            <div className="col-12 mt-3 d-flex align-items-center rounded-pill bg-primary ps-1">
                                <div className='rounded-circle d-flex justify-content-center align-items-center' style={{ height:'50px',width:'50px'}}>
                                <RiGoogleFill className='fs-5' />
                                </div>
                                <p className='m-0 col-9 text-center text-light'>Log in with Facebook</p>
                            </div>

                            <div className="col-12 mt-3 d-flex align-items-center rounded-pill bg-primary ps-1">
                                <div className='rounded-circle d-flex justify-content-center align-items-center' style={{ height:'50px',width:'50px'}}>
                                <RiAppleFill className='aaa' />
                                </div>
                                <p className='m-0 col-9 text-center text-light'>Log in with Facebook</p>
                            </div>
                    </div>
                </div>
        </div>
    </Fragment>
  );
}

export default Loginn;
