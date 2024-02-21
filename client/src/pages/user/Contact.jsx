import React from 'react'
import '../../styles/user/Contact.css'

export default function Contact() {
  return (
    <div>
        <div className='contactus-page'>
                <div className='contact'>
                    <img src={"icons/Mask group.png"} alt='' width={"110%"} height={"350px"} />
                    <div class="centered">CONTACT US</div>
                </div>

                <div className='add'>

                    <div class="address1">
                        <div class="contact-card"><i class="icofont-location-pin"></i>
                            <h4>Head Office</h4>
                            <p>1Hd- 50, 010 Avenue,<br /> NY 90001 United States</p>
                        </div>
                    </div><br />
                    <div class="address1">
                        <div class="contact-card active"><i class="icofont-phone">

                        </i><div className='color'>
                                <h4>Phone Number</h4>
                                <p>009-215-5596 <span><br />(toll free)</span><br />009-215-5595</p>
                            </div>
                        </div>
                    </div><br />
                    <div class="address1">
                        <div class="contact-card"><i class="icofont-email"></i>
                            <h4>Support Mail</h4>
                            <p>contact@example.com<br />info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactus-map'>
                <div className='container1'>
                    <div className='contact-map'>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3916.3623439958014!2d76.9634503!3d11.011417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85985d4208c95%3A0x1bdbbe431f55817b!2sIDM-best%20Software%20Training%20Institute%20in%20Coimbatore%20for%20Java%2C%20Python%2C%20Fullstack%2C%20Web%20design%20%26%20Development%2C%20UI%2FUX%2C%20data%20science!5e0!3m2!1sen!2sin!4v1707806765703!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='user'>
                        <p className='text'>Drop Your Thoughts</p>
                        <div class="form_field">
                            <input type="text" id="yourname" name="firstname" class="form-control"
                                placeholder="Your Name" required="" />

                        </div>
                        <div class="form_field">
                            <input type="email" id="email" name="email" class="form-control"
                                placeholder="Your Email" required="" />

                        </div>
                        <div class="form_field">
                            <input type="text" id="subject" name="subject" class="form-control"
                                placeholder="Your Subject" required="" />

                        </div>
                        <div class="form_field message">
                            <input id="message" name="message" cols="30" rows="4" class="form-control"
                                placeholder="Your Message" required=""></input>

                        </div>
                        <br />
                        <div class="form-button">
                            <div className='form-button'> Send Message</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='office-branch'>
                <div className='address'>
                    <div className='branch'>
                        <div className='coimbatore'>
                            <img src={"icons/coimbatore.jpg"} alt='' />
                            <div className='overlay'>
                                <h3>Coimbatore</h3>
                                <div class="overlay1">
                                    <div class="text1">Sarojini St,Ram Nagar,Coimbatore</div>
                                </div>
                            </div>
                        </div><br />
                        <div className='erode'>
                            <img src={"icons/erode.jpg"} alt='' />
                            <div className='overlay'>
                                <h3>Erode</h3>
                                <div class="overlay1">
                                    <div class="text1">Annamalai Layout,Erode</div>
                                </div>
                            </div>

                        </div><br />
                        <div className='chennai'>
                            <img src={"icons/chennai.jpg"} alt='' />
                            <div className='overlay'>
                                <h3>Chennai</h3>
                                <div class="overlay1">
                                    <div class="text1">IDM Tech Park,Tharamani,Chennai</div>
                                </div>
                            </div>
                        </div><br />
                        <div className='bangalore'>
                            <img src={"icons/bangalore.jpg"} alt='' />
                            <div className='overlay'>
                                <h3>Bangalore</h3>
                                <div class="overlay1">
                                    <div class="text1">1st floor,41st Cross Rd,Bengaluru</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}
