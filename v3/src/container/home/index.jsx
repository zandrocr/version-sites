import "./index.sass"
import logo from "../../assets/logoSheep.svg"
import zandrocr from "../../assets/fotoPadrao.jpg"
import { SheepCode } from "../../components/sheepCode"
import { useState } from "react"

export function Home() {
	const [primeiro, setPrimeiro] = useState(false)
	const [segundo, setSegundo] = useState(false)
	setTimeout(() => {
		setPrimeiro(true)
		setTimeout(() => {
			setSegundo(true)
		}, 500)
	}, 1000)

	return (
		<div id="home" className="col-12">
			<img className="logo" src={logo} alt="Sheep Code" />
			<SheepCode />
			<div className="nomeImagem">
				<div className="titulos">
					<div className="titulo">{primeiro ? <h1>ZANDROCR</h1> : null}</div>
					<div className="subtitulo">{segundo ? <h2>Developer.</h2> : null}</div>
				</div>
				<div className="texto">
					<p>Visualmente com frontend, tecnicamente com backend</p>
					<p>e o que mais precisar para começar a rodar.</p>
				</div>
				<img className="zandrocr" src={zandrocr} alt="zandrocr" />
			</div>
		</div>
	)
}
