import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { FaWhatsappSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

//import css
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='d-flex flex-column justify-content-around'>
                <div className="end">
                    <h2>Então vamos</h2>
                    <p className="fras">Bora trabalhar juntos com aquele projeto que você está guardado no fundo da gaveta!</p>
                </div>
                <div className='medias d-flex col-lg-2 justify-content-between'>
                    <a target="_blank" href="https://github.com/zandrocr">
                        <FaGithubSquare className='media'/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/zandrocr/">
                        <FaLinkedin className='media'/>
                    </a>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5512982931419&text=Ol%C3%A1%20Alezandro.">
                        <FaWhatsappSquare className='media'/>
                    </a>
                </div>
                <span className="line"></span>
                <div>
                    <div className="text d-flex justify-content-start">
                        &#169; 2022 zandrocr.
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;