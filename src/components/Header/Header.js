import './Header.scss'
import person from '../../images/bwperson.png'
const Header = () => {
    return(
        <>
<header className="header">
<div className="left">
    <a href="/">
    <h1>Hailey Putnam.</h1>
    </a>
    <img src={person} alt="person"></img>
</div>
<div className="right">
    <ul>
    <li>
        <a href="/work">work .   </a>
        </li>
        <li>
            <a href="/contact">contact .    </a>
        </li>
        <li>
            <a href="/about">about .      </a>
        </li>
    </ul>
</div>
</header>
        </>
    )
}


export default Header;