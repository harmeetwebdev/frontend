import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='footer'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                        <h6 className='text-start'>Harmeet Technical</h6>
                        <p className='text-start'>I'm much more confident with crypto than with banks or fiat currency because I can actually control it, and the money supply is transparent,</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                        <h6 className='text-start'>subscribes to get inportant updates</h6>
                        <form className='text-start'>
                            <div>
                                <input type='email' placeholder='email' />
                            </div>
                            <div className='text-start mx-5 mt-3 btn-start'>
                                <input className="btn btn-primary btn-start " type="submit" value="Submit"></input>
                            </div>

                        </form>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                        <h6>Follow Us</h6>
                        <div className='fs-4'><AiFillGithub /> <AiOutlineInstagram /> <AiFillYoutube /> <AiFillFacebook /></div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                        <h6>Call Us</h6>
                        <h5>+91 1234567890</h5>
                    </div>

                </div>
                <div className='row text-start mt-5'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12 '>
                        <p>@2022 HarmeetTechnical. All Rights Reserved</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12 '>
                        <p>Privacy Policy <br /> Term And Condition</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer