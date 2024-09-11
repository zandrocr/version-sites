//css import
import Style from '../css/navbar.module.css'
//hooks import
import { useState } from 'react'
import Logo from './Logo'
import LogoNav from './LogoNava'

const Navbar = () => {
	let [ state, setState ] = useState(false)

	let open = () => {
		setState(!state)
	}

    let close = () => {
        setState(false)
    }


    return (
    <div className={`${Style.navbar} col-12 d-flex justify-content-between align-items-center`}>
        <div className={`col-5 col-sm-2 d-flex justify-content-around`} onClick={close}>
            <a href="/" onClick={close}>
				<LogoNav />
            </a>
        </div>
        <nav className={`${state == true ? Style.ope : Style.nav} col-6 d-flex flex-column flex-lg-row align-items-center justify-content-around`}>
            <a href="#sobre" onClick={close} className='text col-2 d-flex justify-content-center'>Sobre</a>
            <a href="#projetos" onClick={close} className='text col-2 d-flex justify-content-center'>Projetos</a>
            <a href="#habilidades" onClick={close} className='text col-2 d-flex justify-content-center'>Habilidades</a>
            <a href="#contato" onClick={close} className='text col-2 d-flex justify-content-center'>Contato</a>
            <button className='d-lg-none' onClick={close} ></button>
        </nav>
        <div onClick={open} className={`${Style.menu} col-3 col-sm-2 d-flex d-lg-none flex-column justify-content-around align-items-center`}>
            <li className={state == false ? Style.line : Style.lineHover}></li>
            <li className={state == false ? Style.line : Style.lineHover}></li>
            <li className={state == false ? Style.line : Style.lineHover}></li>
        </div>
        <div className='col-lg-2 d-none d-lg-flex justify-content-center'>
            <button className='butt'></button>
        </div>
    </div>
    );
}

export default Navbar;