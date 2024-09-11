//import css
import '../css/projetos.css'
//import hook play
import ReactPlayer from "react-player";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
//import icons
import { FiGithub } from 'react-icons/fi'

const ProjetoD = ({titulo, descricao, linguagens, video, lado, git}) => {

    useEffect(() =>{
        AOS.init()
    }, [])

    return (
    <div className='video d-flex flex-column'>
        <h2 className='d-flex align-items-center'
        data-aos="zoom-up" data-aos-duration="2000">
            {titulo}
            <div className='line'></div>
        </h2>
        <div className={`d-flex flex-column ${lado} align-items-center justify-content-around`}>
            <div className='page col-11 col-sm-4' data-aos="zoom-in-left" data-aos-duration="2000">
                <p>
                    {descricao}
                </p>
                <span className='d-flex justify-content-between'>
                    <a target='_blank' className="d-flex justify-content-center" href={git}>
                        <FiGithub/>
                    </a>
                    <span>{linguagens}</span>
                </span>
            </div>
            <div className='video d-flex justify-content-center align-items-end col-11 col-sm-6' data-aos="fade-right"
            data-aos-duration="2000">
                <ReactPlayer controls url={video} />
            </div>
        </div>
    </div>
     );
}

export default ProjetoD;