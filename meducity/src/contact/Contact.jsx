import React from 'react'
import './contact.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "Yd805f3ef-edc3-4cca-89fb-cb0ce51dfaee");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

 
  return (
    <div className='contact' id='cntct'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque nulla, asperiores maiores, impedit similique voluptatum iste quos odio facere ut aperiam numquam dolorum quibusdam doloribus ea, obcaecati ex autem.</p>
        <ul>
          <li><img src={mail_icon} alt="" /> mkaswin12@gmail.com</li>
          <li><img src={phone_icon} alt="" /> 7012152602</li>
          <li><img src={location_icon} alt="" /> 17 maharashatra road, maharashtra <br />co 82729,india</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <labe>
            Your Name
          </labe>
           <input type="text" name="name" placeholder='Enter your name' required />
          <label>Phone Number</label>
            <input type="tel" name='Phone' placeholder='Enter Your Mobile number' required />
          <label> Write your Message</label>
            <textarea name="message"   rows="6" placeholder='Enter Your message' required></textarea>
            <button type='button' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
  }

export default Contact