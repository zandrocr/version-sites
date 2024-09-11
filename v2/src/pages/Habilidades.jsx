//import css
import "../css/habilidades.css"
//import icon
import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoSass,
	IoLogoAngular,
} from "react-icons/io"
import { DiJqueryLogo } from "react-icons/di"
import { BsBootstrapFill } from "react-icons/bs"
import { FaReact, FaJava } from "react-icons/fa"
//icons amais
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiVisualstudiocode,
	SiYarn,
	SiJson,
} from "react-icons/si"
import { FaGitAlt, FaFigma, FaMarkdown, FaUbuntu } from "react-icons/fa"
//hook
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Habilidades = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 })
	}, [])

	return (
		<div id="habilidades" className="background col-12 d-flex justify-content-center">
			<div className="page col-11 d-flex flex-column justify-content-around">
				<div className="lingua col-12 d-flex flex-column flex-sm-row align-items-center">
					<div className="col-12 col-sm-6 d-flex flex-column align-items-start">
						<div data-aos="fade-right">
							<IoLogoHtml5 className="html1" />
							<span className="col-12 d-flex" data-aos="fade-left">
								<div className="col-1"></div>
								<div className="line html"></div>
							</span>
						</div>
						<div data-aos="fade-left">
							<IoLogoCss3 className="css1" />
							<span className="col-12 d-flex" data-aos="fade-right">
								<div className="col-1"></div>
								<div className="line css col-5"></div>
							</span>
						</div>
						<div data-aos="fade-right">
							<IoLogoJavascript className="js1 col-3" />
							<span className="col-6 d-flex" data-aos="fade-left">
								<div className="col-2"></div>
								<div className="line js col-5"></div>
							</span>
						</div>
					</div>
					<div
						className="col-12 col-sm-6 text-center text-sm-start"
						data-aos="zoom-in-up"
						data-aos-duration="2000">
						<p>
							Uma parcela do meu aprendizado foi feito no{" "}
							<span className="textColor">Curso em Vídeo</span>, alguns outros vídeos
							do <span className="textColor">youtube</span> e{" "}
							<span className="textColor">PDF</span>. Procurando por como melhorar os
							códigos e agilizar eles
						</p>
					</div>
				</div>

				<div
					className="col-12 d-flex justify-content-end"
					data-aos="zoom-in-up"
					data-aos-duration="2000">
					<span className="svg col-8 col-sm-5 d-flex justify-content-between">
						<SiJson />
						<SiAdobeillustrator />
						<FaFigma />
						<SiAdobephotoshop />
						<FaMarkdown />
					</span>
				</div>

				<div className="lingua col-12 d-flex flex-column flex-sm-row align-items-center">
					<div className="col-12 col-sm-6 d-flex flex-column align-items-start">
						<div data-aos="fade-right">
							<DiJqueryLogo className="jquery1 col-1" />
							<span className="col-12 d-flex" data-aos="fade-left">
								<div className="col-1"></div>
								<div className="line jquery"></div>
							</span>
						</div>
						<div data-aos="fade-left">
							<BsBootstrapFill className="bootstrap1 col-2" />
							<span className="col-12 d-flex" data-aos="fade-right">
								<div className="col-1"></div>
								<div className="line bootstrap col-5"></div>
							</span>
						</div>
						<div data-aos="fade-right">
							<FaReact className="react1 col-3" />
							<span className="col-6 d-flex" data-aos="fade-left">
								<div className="col-2"></div>
								<div className="line react col-5"></div>
							</span>
						</div>
						<div data-aos="fade-right">
							<IoLogoSass className="sass1 col-1" />
							<span className="col-12 d-flex" data-aos="fade-left">
								<div className="col-1"></div>
								<div className="line sass"></div>
							</span>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 text-center text-sm-start"
						data-aos="zoom-in-up"
						data-aos-duration="2000">
						<p>
							Já outras coisas foram só com a unha mesmo e{" "}
							<span className="textColor">documentação</span>, direto na fonte.
							Algumas olhadas no <span className="textColor">stack overflow</span>{" "}
							para não perder o costume e assim aprendemos o que precisamos.
						</p>
					</div>
				</div>

				<div
					className="col-12 d-flex justify-content-sm-end"
					data-aos="zoom-in-up"
					data-aos-duration="2000">
					<span className="svg col-8 col-sm-5 d-flex justify-content-between">
						<SiVisualstudiocode />
						<SiYarn />
						<FaGitAlt />
						<FaUbuntu />
					</span>
				</div>
			</div>
		</div>
	)
}

export default Habilidades
