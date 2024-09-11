//css imports
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//components import
import Navbar from './components/navbar'
import Loading from './components/Loading'
import Logo from './components/Logo'
//hooks import
import { useState, useEffect } from 'react'
//pages imports
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Habilidades from './pages/Habilidades'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Redes from './components/redes'
import LogoNav from './components/LogoNava'


function App() {
	const [load, setLoad] = useState(false)
	const [redes, setRedes] = useState(false)

	useEffect(() => {
        setTimeout(() =>{
            setLoad(true)
        }, 1000) //6500
		setTimeout(() =>{
            setRedes(true)
        }, 5000) //8000
    }, [])

	return (
		<div>
			{load &&
			<div className='app col-12 d-flex flex-column align-items-center'>
				<Navbar />
				<Home />
				<Sobre />
				<Projetos />
				<Habilidades />
				<Contato />
				{redes && <Redes />}
			</div>}
		</div>
  	)
}

export default App
