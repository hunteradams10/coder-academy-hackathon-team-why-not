import React from 'react'


const NotFound = () => {
    return (
      <div className='notfound'>
        <div className='notfound-text'>
          <p>Sorry! The page you’re looking for cant be found.</p>
       </div>

       <div className='notfound-home'>
         <p>Back to <a href=''>Home</a></p>
       </div>

       <div className='notfound-img'>
         <img src='image/Su.png' alt='Su'></img>
         <img src='image/Nhi.png' alt='Nhi'></img>
         <img src='image/Hunter.png' alt='Hunter'></img>
         <img src='image/Sofia.png' alt='Sofia'></img>
       </div>
        
        
      </div>
    )
  }

export default NotFound;
