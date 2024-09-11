/* eslint-disable react/prop-types */
import "./index.sass"
export function Experiencia(info) {
	return (
		<div id="experiencia">
			<div className="imgs">
				<img src={info.info.img2} alt="fundo" />
				<img src={info.info.img1} alt="frente" />
			</div>
			<div className="descricao">
				<p>{info.info.titulo}</p>
				<p className="texto">{info.info.texto}</p>
				<div className="tecnologias">
					{info.info.tecnologias.map((i) => {
						return <span key={i.id}>{i.nome}</span>
					})}
				</div>
			</div>
		</div>
	)
}
