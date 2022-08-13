import React from 'react';
import './contact.css'

export default function Form() {
  return (
    <>
   
   <div className="inline-grid gpt3__whatgpt3-heading">
    <h1 className="gradient__text">Contact</h1>
      
      </div>
    <div className="contact-me">
       Send a Message
    
    <form 
      method='POST' 
      name='contactform' 
      className='contactForm'>

      <input 
        type='text' 
        name='name' 
        placeholder='Enter your name' />

      <input 
        type='email' 
        name='email' 
        placeholder='Enter your email' />

      <textarea 
        name='message' 
        placeholder='...'></textarea>

      <button className="btn-form" type='submit'>Submit</button>

    </form>
    </div>
    </>
  )
}