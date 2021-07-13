import  smile from '../../images/closedsmile.png'
import doodle1 from '../../images/doodle1.png'
import doodle2 from '../../images/doodle2.png'
import doodle3 from '../../images/doodle3.png'
import doodle5 from '../../images/doodle5.png'
import doodle6 from '../../images/doodle6.png'
import doodle7 from '../../images/doodle7.png'
import doodle9 from '../../images/doodle9.png'
import doodle10 from '../../images/doodle10.png'
import green from '../../images/green.png'
import butt from '../../images/butt.gif'

import './Homepage.scss' 
const Homepage = ( ) => {
    return(
        <>

        <div className="nameLocation"> 
        <h3>Hailey Putnam.</h3>
        <h3>Annapolis, MD</h3>
        </div>
        <div className="jobStatus">
            <h1>current job status: </h1>
            <p>looking for remote work</p>
            <img src={doodle10}></img>
            <img src={doodle9}></img>
        </div>
        <div className="main"> 
        <h1>hey there,</h1>
        <h1>friend</h1>
        <img src={doodle3}></img>
        <img src={doodle6}></img>
        <img src={doodle1}></img>
        <img src={green}></img>
        <img src={smile} alt="smile"/>
        <img src={butt} alt="butt"/>
        <p>Everyone has "their thing" mine happens to be web development. My freetime filler, overthinker's escape, carear path, coping mechanism, fconstantly expanding my knowelege, my true passion. ( am I a nerd, yeah maybe! ) What started from a stand to take my life back, turned into more then I could ever imagine (sorry for the cringey emotions ). Programming shed a whole new light on the world for me. Coding and web development gives me purpose and encourages me to cotinually inovaite and improve. </p>
        </div>
        <div className="currentWork">
            <div>
                <img src={doodle7}></img>
                <img src={doodle5}></img>
                <h1>
                where I started
                </h1>
                <a href="">started</a>
            </div>
            <div>
                <h1>
                    how it's going
                </h1>
                <a href="">how its going</a>
            </div>
        </div>
        <div className="letTalk">
            <img src={doodle2}></img>
            <h1>Let's Talk!</h1>
            <ul>
                <li>
                    <a href="">linkedin</a>
                </li>
                <li>
                    <a href="">email</a>
                </li>
            </ul>
        </div>

        </>

    )
}

export default Homepage;