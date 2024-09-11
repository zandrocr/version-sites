import ReactPlayer from "react-player";

//import css
import '../../css/KiDelicia.css'

//import icons
import { FaGithubSquare } from "react-icons/fa"
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";

const KiDelicia = () => {
    return (
        <span className="portfolio d-flex flex-column-reverse flex-lg-row justify-content-between">
            <div className="col-lg-5 col-12 d-flex flex-column justify-content-around">
                <p className='textPortfolio'>
                    Desenvolvido para divulgação e apresentação dos trabalhos efetuados pela pequena, mais porém empenhada, a empresa trás a variedade de pratos e e tipos de festas já feitos pela mesma.
                    O site tem como ponto, um estilo mais limpo e simplista, criado para o intuito de demonstrar a qualidade dos produtos e incentivar a utilização do serviço pelas pessoas que o procuram.
                </p>
                <div className="d-flex justify-content-between">
                    <a target='_blank' className="d-flex justify-content-center" href="https://github.com/zandrocr/KiDelicia-TiaMaria">
                        <FaGithubSquare className='media'/>
                    </a>

                    <div className='mediaM col-4 d-flex justify-content-between'>
                        <p>
                            <SiHtml5 className='gl h media'/>
                        </p>
                        <p>
                            <SiCss3 className='gl c media'/>
                        </p>
                        <p>
                            <SiJavascript className='gl j media'/>
                        </p>
                    </div>
                </div>
            </div>

            <div className='video d-flex justify-content-center col-12 col-lg-6'>
                <ReactPlayer controls url='https://www.youtube.com/watch?v=Y5aQc0ElcMk&ab_channel=ZANDROCR' />
            </div>
        </span>
     );
}

export default KiDelicia;