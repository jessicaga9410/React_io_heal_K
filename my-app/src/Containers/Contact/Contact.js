import React from 'react';
import './contact.css'

export default function Form() {
  return (
    <>
   
   <div className="inline-grid gpt3__whatgpt3-heading">
    <h1 className="contact-heading">Contact</h1>
      
      </div>
   
    
    <form 
      method='POST' 
      name='contactform' 
      className='contactForm'>

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
        placeholder='  Send a message'></textarea>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded submit-btn">
Submit
</button>
    </form>
    {/* </div> */}
    </>
  )
}