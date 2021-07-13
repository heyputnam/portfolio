import './Footer.scss'
import React from 'react'
import Wave from 'react-wavify'



const Footer = () =>{

    return(
        <>
        <div className="container">

        <div className='hover'> 

        </div>
        <div className="wave">
            <Wave
            fill='#68A4FE'
            options={{
                height: 60,
                speed: 0.3,
    
            }}
        
            />
        <h1>hi</h1>
        </div>
        </div>
        </>
    )
}

export default Footer;