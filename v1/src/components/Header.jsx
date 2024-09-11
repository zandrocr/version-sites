//import css
import '../css/Header.css'

const Header = () => {
    return (
        <nav className='navbar d-flex flex-lg-row flex-column'>
            <p className='text1'>ZANDROCR</p>{/*
            <ul className='d-flex col-12 col-lg-7 justify-content-around'>
                <li className='text1 link'>
                    Sobre
                </li>
                <li className='text1 link'>
                    Portfolio
                </li>
                <li className='text1 link'>
                    Contatos
                </li>
            </ul>*/}
            <div className='circle'></div>
        </nav>
     );
}

export default Header;