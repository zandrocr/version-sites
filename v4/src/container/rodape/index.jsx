import "./index.sass"
import email from "../../assets/icons/email.png"
import png from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import { OndaSvg } from "../../components/ondaSvg"

export function Rodape() {
	return (
		<div id="rodape">
			<div className="paragrafos">
				<p>
					No frontend com HTML, CSS e Javascricpt, passando para React e Sass, um pouco de
					Vue e Angular, Jquery em um projetos antigo que participei, me aventurando com
					React Native pra fazer um app para a locadora de carros, firebase para agilizar
					nesse peojeto, agora com SQL no MySQL, Java no Eclipse, a logo no Illustrator,
					imagens no Photoshop, e esse site que está vendo agora no Figma e VS Code.
				</p>
			</div>
			<div className="imgs">
				<a href="mailto:alezandrocosta@live.com" name="alezandrocosta@live.com">
					<img src={email} alt="email" />
				</a>
				<a href="https://github.com/zandrocr" target="_blank" rel="noopener noreferrer" name="https://github.com/zandrocr" >
					<img src={png} alt="LinkedIn" />
				</a>
				<a
					name="https://www.linkedin.com/in/zandrocr/"
					href="https://www.linkedin.com/in/zandrocr/"
					target="_blank"
					rel="noopener noreferrer">
					<img src={linkedin} alt="GitHub" />
				</a>
			</div>
			<OndaSvg />
		</div>
	)
}
