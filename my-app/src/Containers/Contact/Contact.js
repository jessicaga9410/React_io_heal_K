import React from 'react';
import './contact.css';

 import {
  
   Tooltip,
      Typography,
     
   } from "@material-tailwind/react";

 function Contact() {
  return (
    <>
   
   <div className="inline-grid gpt3__whatgpt3-heading">
    <h1 className="contact-heading">Contact</h1>
      
      </div>
   
    
    <form 
      method='POST' 
      name='contact-form' 
      className='contact-form'>

      <input 
        type='text' 
        name='name' 
        placeholder=' Enter your name' />

      <input 
        type='email' 
        name='email' 
        placeholder=' Enter your email' />

      <textarea 
        name='message' 
        placeholder=' Send a message '></textarea>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded submit-btn">
Send
</button>
    </form>
    <div>
 
  <h2>Click below to follow</h2>

    <Typography
     as="a"
     href="#instagram"
     variant="lead"
     color="purple"
      textGradient
   >
    <Tooltip content="Follow">
     <i className="fa fa-instagram" id="insta" aria-hidden="true"></i>
      </Tooltip>
   </Typography>
</div>
    </>
  )
}
export default Contact;

// alert({
//   title: 'Cellular Data is Turned Off for "Safari"',
//   message: 'You can turn on cellular data for this app in Settings.'
// });