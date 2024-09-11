import '../css/contato.css'
//import icons
import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
//img imports
import oculos from '../img/oculos.svg'
//hook
import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contato = () => {

    useEffect(() =>{
        AOS.init({duration: 1000})
    }, [])

    return (
        <div id='contato' className='background col-12 d-flex justify-content-center'>
            <div className="page col-11 d-flex flex-column justify-content-between align-items-center">
                <div className="col-12 d-flex flex-column align-items-center text-center" data-aos="fade-up">
                    <p>Entre em contato comigo!</p>
                </div>
                <div className="col-12 d-flex flex-column align-items-center" data-aos="fade-up">
                    <p className='col-sm-8 text-center'>
                        Eu estou sempre de olho no meu e-mail, então pode me mandar um oi, e vamos ver o que de bom podemos criar.
                    </p>
                </div>

                <div className="col-12 d-flex flex-column align-items-center">
                    <a href="mailto:alezandrocosta@live.com" className='d-flex flex-column align-items-center'>
                        <img src={oculos} alt="oculos" className='col-10' data-aos="fade-up"/>
                        <button data-aos="fade-up">Diga, oi!</button>
                    </a>
                </div>

                <div className='col-5 col-sm-3 d-flex d-lg-none align-items-center justify-content-between'>
                    <a href="https://github.com/zandrocr" target='_blank' ><FiGithub /></a>
                    <a href="https://www.linkedin.com/in/zandrocr/" target='_blank' ><BsLinkedin /></a>
                </div>

                <div className="back col-12 col-sm-8 d-flex flex-column align-items-center">
                    <p>
                        © Projetado e desenvolvido por ZandroCR 2022
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Contato;