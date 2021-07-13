import './Header.scss'
import smile from '../../images/smile.png'
import person from '../../images/bwperson.png'

const Header = () => {
    return(
        <>
<header className="header">

<div className="left">
    <a href="/">
    <h1>Hailey Putnam .</h1>
    </a>

</div>

<img className="smile" src={smile} alt="person">
</img>

<div className="right">
        <img src={person}></img>
    <ul>

    <li>
   
        <a href="/work" className="work"><mark>work.   </mark></a>
        </li>
        <li>
            <a className="contact" href="/contact"><mark>contact.   </mark> </a>
        </li>
        <li>
            <a className="about" href="/about"><mark>about.   </mark>   </a>
        </li>
    </ul>
</div>
</header>
        </>
    )
}


export default Header;