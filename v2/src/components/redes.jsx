//import css
import "../css/redes.css"
//import icons
import { BsLinkedin } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"

const Redes = () => {
	return (
		<div id="redes" className="d-none d-lg-flex">
			<div className="d-flex justify-content-between">
				<div className="links d-flex flex-column justify-content-end align-items-center">
					<a href="https://github.com/zandrocr" target="_blank">
						<FiGithub className="network" />
					</a>
					<a href="https://www.linkedin.com/in/zandrocr/" target="_blank">
						<BsLinkedin className="network" />
					</a>
					<span className="line"></span>
				</div>
				<div className="linksB d-flex flex-column justify-content-end align-items-center">
					<a
						href="mailto:alezandrocosta@live.com"
						className="d-flex flex-column justify-content-end align-items-center">
						<span className="email">alezandrocosta@live.com</span>
						<span className="line"></span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Redes
