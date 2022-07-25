import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='contacthome'>
<div className="container">
<div className="section-title">
  <h2>Contact</h2>
  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
</div>
</div>

<div className="container">
 <iframe className='iframe'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8947291638333!2d76.33668231461681!3d10.025545275345102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x534abac4429d539d!2sSunrise%20Hospital!5e0!3m2!1sen!2sin!4v1654230908459!5m2!1sen!2sin" />
</div>

<div className="container ">
<div className="row mt-5">

  <div className="col-lg-4">
    <div className="info">
      <div className="address">
        <i className="bi bi-geo-alt"></i>
        <h4>Location:</h4>
        <p>A108 Adam Street, New York, NY 535022</p>
      </div>

      <div className="email">
        <i className="bi bi-envelope"></i>
        <h4>Email:</h4>
        <p>info@example.com</p>
      </div>

      <div className="phone">
        <i className="bi bi-phone"></i>
        <h4>Call:</h4>
        <p>+1 5589 55488 55s</p>
      </div>

    </div>

  </div>

  <div className="col-lg-8 mt-5 mt-lg-0">

    <form  role="form" >
      <div className="row">
        <div className="col-md-6 form-group">
          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
        </div>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
      </div>
      <div className="form-group mt-3">
        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
      </div>
      <div className="text-center button"><button type="submit">Send Message</button></div>
    </form>

  </div>

</div>

</div>
    </div>
  )
}

export default Contact