import './Header.scss'
import smile from '../../images/smile.png'
import line2 from '../../images/line2.png'
import line from '../../images/line.png'
import line3 from '../../images/line3.png'
import circle from '../../images/circle.png'
const Header = () => {
    return(
        <>
<header className="header">

<div className="left">
    <a href="/">
    <h1>Hailey Putnam .</h1>
    </a>

</div>
<img className="smile" src={smile} alt="person"></img>
<div className="right">

    <ul>

    <li>
   
        <a href="/work" className="work">work.   </a>
        </li>
        <li>
            <a className="contact" href="/contact">contact.    </a>
        </li>
        <li>
            <a className="about" href="/about">about.      </a>
        </li>
    </ul>
</div>
</header>
        </>
    )
}


export default Header;