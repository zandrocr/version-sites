import { Experiencia } from "../../components/experiencia"
import "./index.sass"
import frente from '../../assets/experiencias/garagemF.png'
import fundo from '../../assets/experiencias/garagemFu.png'
import fundo1 from '../../assets/experiencias/kidelicia.png'
import frente1 from '../../assets/experiencias/maldivas.png'
import frente2 from '../../assets/experiencias/crm.png'
import fundo2 from '../../assets/experiencias/crmFu.png'

export function Experiencias() {
	return (
		<div id="experiencias">
			<Experiencia info={info1} />
			<Experiencia info={info2} />
			<Experiencia info={info3} />
		</div>
	)
}

const info1 = {
	img1: frente2,
	img2: fundo2, 
	titulo:"Extensão Chrome CRM / Atual",
	texto: "Uma extensão para conectar o CRM diretamente ao WhatsApp Web, facilitando a transferência de informações como valores e dados para cadastros de cada cliente, já que hoje uma das forma mais rápida de trocar informações é justamente por essa feramente.",
	tecnologias: [
		{ id: "0", nome: "Javascript" },
		{ id: "1", nome: "React" },
		{ id: "2", nome: "Sass" }
	],
}
const info2 = {
	img1: frente1,
	img2: fundo1, 
	titulo:"Landing Page",
	texto: "Páginas desenvolvidas para diversos tipos de nichos, mas com uma finalidade simples, mostrar o máximo potencial do produto ou serviço exposto ali. Por isso, o foco é sempre entender o melhor de cada negócio para que cada projeto seja único.",
	tecnologias: [
		{ id: "0", nome: "HTML" },
		{ id: "1", nome: "React" },
		{ id: "2", nome: "CSS" },
		{ id: "3", nome: "Sass" },
	],
}
const info3 = {
	img1: frente,
	img2: fundo, 
	titulo:"Império Aluguel de carros",
	texto: "Fui responsável pelo desenvolvimento, para ser utilizado no desktop e mobile, o sistema contava com toda a interface para adição dos documentos dos veículos, locadores e locatários. Antes de seguir para outros projetos ainda comecei o desenvolvimento do app para android.",
	tecnologias: [
		{ id: "0", nome: "React" },
		{ id: "1", nome: "Bootstrap" },
		{ id: "2", nome: "Sass" },
		{ id: "3", nome: "Firebase" },
	],
}