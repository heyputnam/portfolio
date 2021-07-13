import './Footer.scss'
import React from 'react'
import Wave from 'react-wavify'



const Footer = () =>{

    return(
        <div className="wave">
            <Wave
            fill='#68A4FE'
            options={{
                height: 5,
                speed: 0.3,
    
            }}
        
            />
        <h1>hi</h1>
        </div>
    )
}

export default Footer;