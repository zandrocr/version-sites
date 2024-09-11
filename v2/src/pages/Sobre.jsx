//import css
import '../css/sobre.css'
//hook
import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Sobre = () => {

    useEffect(() =>{
        AOS.init()
    }, [])

    return (
        <div id='sobre' className='background col-11 d-flex justify-content-center'>
            <div className='page col-12 d-flex flex-column justify-content-between'>
                <div className='col-12' data-aos="fade-up" data-aos-duration="1000">
                    <p className='msmRight mFirst col-10'>
                        Bem... eu comecei com um computar bem fraquinho da <span className='textColor'>Kennex</span> que não rodava nem
                        nem o navegador direito, época da <span className='textColor'>internet discada</span> ainda, Telefônica e sua super conexão, para época era boa até.
                        Já nas <span className='textColor'>lanhouses</span> da vida ficava fuçando, aprendendo <span className='textColor'>desmontar computadores</span> com alguns conhecidos que eram donos, ai com tempo comecei a aprender a fazer alguns comandos para fazer os <span className='textColor'>computadores desligarem</span> e essas coisas mais bobas, ai peguei gosto pelos <span className='textColor'>códigos</span>.
                    </p>
                </div>
                <div className='right col-12 d-flex justify-content-end' data-aos="fade-down" data-aos-duration="1000">
                    <p className='msmLeft col-10'>
                        Hoje na faculdade ampliei meus horizontes para diversas possibilidades, atualmente desenvolvendo em <span className='textColor'>ReatJs</span> indo para outros campos referente a <span className='textColor'>Js</span>.
                        Procuro por novidades e aprimoramento sempre que posso e quando tenho oportunidade aplico em algo novo para testar novos caminhos.
                    </p>
                </div>
                <div className='left col-12' data-aos="fade-up" data-aos-duration="1000">
                    <p className='msmRight col-10 col-sm-4'>
                        <span className='textColor'>HTML</span> e <span className='textColor'>CSS</span> de um lado <span className='textColor'>JavaScript</span> de outro
                    </p>
                </div>
                <div className='col-12 d-flex justify-content-end' data-aos="fade-down" data-aos-duration="1000">
                    <p className='msmLeft col-10 col-sm-5'>
                        <span className='textColor'>React</span>, um pouco de <span className='textColor'>Sass</span>, <span className='textColor'>Bootstrap</span> para agilizar as coisas,
                    </p>
                </div>
                <div className='col-12' data-aos="fade-up" data-aos-duration="1000">
                    <p className='msmRight col-10 col-sm-5' >
                        <span className='textColor'>Jquery</span> porque nunca se sabe ne, vai que volta
                    </p>
                </div>
                <div className='msm col-12 d-flex justify-content-end' data-aos="fade-down" data-aos-duration="1000" data-aos-offset="0">
                    <p className='msmLeft col-10'>
                        logo menos entrando no
                        <span className='textColor'> Angular </span> e nosso querido
                        <span className='textColor'> Java </span>
                        'Eu ama <span className='textColor'>Java</span> quando tinha uns quatorze anos depois larguei mão, pior coisa que fiz..'
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;