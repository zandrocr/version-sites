//import css
import '../css/Main.css'
import '../css/ImgAle.css'
//import png
import ale from '../img/oculos.svg'
//import icons
import { SiCss3, SiHtml5, SiJavascript, SiJquery, SiReact } from "react-icons/si";
import { BsFillBootstrapFill } from 'react-icons/bs';
import { IoLogoSass } from 'react-icons/io';

const Main = () => {

    return (
    <main className='d-flex flex-column justify-content-evenly'>
        <div className='d-flex flex-column justify-content-around'>
            <div className='back d-flex flex-column flex-lg-row-reverse justify-content-around align-items-center'>
                <div className='d-flex flex-column col-lg-6'>
                    <span className='d-flex justify-content-center'>
                        <img src={ale} alt="ale" className='col-12'/>
                    </span>
                    <div className='media d-flex col-12 justify-content-around'>
                        <p>
                            <SiHtml5 className='gl h media'/>
                        </p>
                        <p>
                            <SiCss3 className='gl c media'/>
                        </p>
                        <p>
                            <SiJavascript className='gl j media'/>
                        </p>
                        <p>
                            <SiJquery className='gl q media'/>
                        </p>
                        <p>
                            <BsFillBootstrapFill className='gl b media'/>
                        </p>
                        <p>
                            <SiReact className='gl r media'/>
                        </p>
                        <p>
                            <IoLogoSass className='gl s media'/>
                        </p>
                    </div>
                </div>
                <div className='textMain d-flex flex-column'>
                    <p className='text2'>
                        Eae,
                    </p>
                    <p className='text2'>
                        Eu sou Alezandro
                    </p>
                    <p className='text2'>
                        Front-end Developer
                    </p>
                </div>
            </div>
        </div>
    </main> );
}

export default Main;
