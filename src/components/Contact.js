import React from 'react'

const Contact = () => {
    return (
        <div>
            <h2 className='my-5'>Feel Free to Contact Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d924.1794028408049!2d82.11529229865526!3d22.09859890372472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1671602819865!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map">

            </iframe>
            <div className='container my-4 w-25 border border-5 rounded' readOnly="" >
                <form className="my-3" action='https://formspree.io/f/xeqwjzjk' method='POST' >
                    <div className="mb-3  text-start">
                        <label className='mb-3 fw-bold'>User Name</label>
                        <input type="text" placeholder='Name' className="form-control" autoComplete='off' required />
                    </div>
                    <div className="mb-3 text-start">
                        <label className='mb-3 fw-bold '>Email</label>
                        <input type="email" className="form-control" placeholder='email' name="email" />

                    </div>
                    <div className="mb-3 text-start">
                        <label className="my-3 fw-bold">Message</label>
                        <textarea name='message' required className="form-control" autoComplete='off' placeholder='Enter Your Message' ></textarea>
                    </div>

                    <button value={"send"} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default Contact