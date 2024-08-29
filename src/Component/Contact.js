import React from 'react'

export default function Contact() {
  return (
    <div>
        <div className="row form_box">
            <div className="col-md-12"> Fill up this form</div>
            <div className="col-md-12"><input type="text" name="full_name" className="form-control" placeholder="Enter Your Full name" /></div>
            <div className="col-md-12"><input type="email" name="email" className="form-control" placeholder="Enter Your Email Id" /></div>
            <div className="col-md-12"><input type="email" name="number" className="form-control" placeholder="Enter Your Phone Number" /></div>
            <div className="col-md-12">
              <textarea className="form-control" placeholder="Enter your address" defaultValue={""} />
            </div>
            <div className="col-md-12 text-center"><button className="btn btn-success btn-comment">Submit</button></div> <br/> <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.266836697266!2d88.13927013761034!3d23.055569738517782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f85f6d3b5298a7%3A0xbba37a7ab1b6560!2sAkabpur%2C%20West%20Bengal%20712303!5e0!3m2!1sen!2sin!4v1715407219655!5m2!1sen!2sin" width='100%' height='400px' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    
  )
}
