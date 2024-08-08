import React from 'react'
import '../STYLECSS/Contact.css'
import { useState } from 'react'

const Contact = () => {
  let [data,setdata] = useState({name:'',email:"",message:""})

  let handlechange = ({target:{name,value}}) =>{
    setdata({...data,[name]:value})


  }
  let updatedata = (e) =>{
     e.preventDefault()
     console.log(data)
     data = JSON.stringify(data)
     localStorage.setItem('user',data)
  }

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <div id='Contact'>
        <form action="">
            <div>
             <h1>Contact me</h1>
             <p>Submit the form or send me an Email:
             <span>
             <a href="abhishek.khasempure@gmail.com">abhishek.khasempure@gmail.com</a>
             <p>Mobie: 9449542709, 6362556080</p>
             </span>
             
             </p>
            </div>
            <input type="text" placeholder='Name' name='name' onChange={handlechange}/> <br />
            <input type="email" placeholder='Email' name='email' onChange={handlechange} /> <br />
            <textarea className='textarea'  name="message" onChange={handlechange} placeholder='Type your Message Here...' rows={4} n id=""></textarea><br />
            <button onClick={updatedata}>Let's Collaborate</button>

            <br /><br />
               <small>&copy; Abhishek.khasempure, {getYear()} | All rights reserved.</small>
             

        </form>
        <div id='maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7592.475036891663!2d77.52212127770993!3d17.9210724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec72d9b5a29b3%3A0x36b4bccba4e3d780!2sThe%20Bidar%20Fort%20-%20Bidar%20District%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1719755064725!5m2!1sen!2sin" width="600" height="500" frameborder="0"loading="lazy"  referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Google Maps</p>
        </div>
    </div>
  )
}

export default Contact
