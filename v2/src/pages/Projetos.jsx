//import css
import '../css/projetos.css'
//component video
import ProjetoD from '../components/VideoPlay';
//icons
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass} from 'react-icons/io'
import { BsBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiYarn, SiJson } from 'react-icons/si'


const Projetos = () => {


    return (
        <div id='projetos' className='background col-12 d-flex justify-content-center'>
            <div className="page d-flex col-12 flex-column justify-content-between">
                <div className='d-flex flex-column'>
                    <ProjetoD
                    titulo={'# Cadastro de carros'}
                    lado='flex-sm-row'
                    descricao={`
                    Sistema para realização de cadastros de novos donos, onde se tem alguns dados importantes para registro. Registro de novos carros referente a cada um dos donos já pré cadastrados, possibilidade de ser alugado para terceiros e de adicionar infrações caso necessário.
                    (Em desenvolvimento)`
                    }
                    git="https://github.com/zandrocr/Locar"
                    linguagens={<> <FaReact /> <IoLogoSass /> <BsBootstrapFill /> <SiJson/> <SiYarn/> </>}
                    video='https://www.youtube.com/watch?v=EbIOuA7oy_w&ab_channel=ZANDROCR'
                    />
                    <ProjetoD
                    titulo={'# KiDelicia'}
                    lado='flex-sm-row-reverse'
                    descricao='
                    Desenvolvido para divulgação e apresentação dos trabalhos efetuados pela pequena, mais porém empenhada, a empresa trás a variedade de pratos e e tipos de festas já feitos pela mesma. O site tem como ponto, um estilo mais limpo e simplista, criado para o intuito de demonstrar a qualidade dos produtos e incentivar a utilização do serviço pelas pessoas que o procuram.
                    '
                    git="https://github.com/zandrocr/KiDelicia-TiaMaria"
                    linguagens={<> <IoLogoHtml5 /> <IoLogoCss3 /> <IoLogoJavascript/> </>}
                    video='https://www.youtube.com/watch?v=Y5aQc0ElcMk&ab_channel=ZANDROCR'
                    />
                </div>
            </div>
        </div>
     );
}

export default Projetos;