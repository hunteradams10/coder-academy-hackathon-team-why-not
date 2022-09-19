import React from 'react'


const NotFound = () => {
    return (
      <div className='notfound'>
        <div className='notfound-text'>
          <p>Sorry! The page you’re looking for cant be found.</p>
       </div>

       <div className='notfound-home'>
         <p>Back to <a href='/'>Home</a></p>
       </div>

       <div className='notfound-img'>
         <img className='su' src='image/Su-Sm.png' alt='Su'></img>
         <img className='nhi' src='image/Nhi-Sm.png' alt='Nhi'></img>
         <img className='hunter' src='image/Hunter-Sm.png' alt='Hunter'></img>
         <img className='sofia' src='image/Sofia-Sm.png' alt='Sofia'></img>
       </div>
        
        
      </div>
    )
  }

export default NotFound;
