import React from 'react'
import { Form } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>

      <p style={{fontSize:'50px', backgroundColor: 'lightblue' }}> inline css.jsx</p>

      <p className='myclass'>we use className here in jsx</p>
       {/* <input type="text" className='Form' placeholder='First name' />  
      <input type="text" className='Form' placeholder='Last name' /><br />
      <input type="email" className='Form' placeholder='Email' /> <br />
   <input type="password" className='Form' placeholder='Password' /> */}
    </div>
  )
}

export default Home;