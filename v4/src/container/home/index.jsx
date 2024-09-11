import "./index.sass"
import { SheepCode } from "../../components/sheepCode"
import { OndaSvg } from "../../components/ondaSvg"

export function Home() {
	return (
		<div id="home" className="col-12">
			<SheepCode />
			<div className="nomeImagem">
				<div className="titulos">
					<div className="titulo">
						<h1>ZANDROCR</h1>
					</div>
					<div className="subtitulo">
						<p>Developer.</p>
					</div>
				</div>
			</div>
			<div className="texto">
				<p>
					Visualmente com frontend, tecnicamente com backend e o que mais precisar para
					começar a rodar.
				</p>
			</div>
			<OndaSvg />
		</div>
	)
}
