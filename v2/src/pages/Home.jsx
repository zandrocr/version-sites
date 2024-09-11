import "../css/home.css"
//img imports
import Yo from "../img/yo.png"
import { useState, useEffect } from "react"

const Home = () => {
	const [h3, setH3] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setH3(true)
		}, 1000)
	}, [])

	return (
		<div id="home" className="background col-11 d-flex justify-content-center">
			<div className="page col-12 d-flex flex-column justify-content-around">
				<div className="col-12 d-flex flex-column flex-sm-row align-items-center justify-content-around">
					<div className="col-11 col-sm-7 d-flex flex-column justify-content-center">
						<h3 className="subTitle top col-12">Eae, eu sou</h3>
						<h1 className="title col-10 col-lg-11 col-xl-9 col-xxl-8 d-flex justify-content-end">
							Alezandro Romão
						</h1>
						<h2 className="subTitle bottom col-12">Programador</h2>
						<h6>Front-end Developer</h6>
					</div>

					<div className="col-12 col-sm-4 d-flex flex-column align-items-center ">
						<img src={Yo} alt="yo" className="col-8 col-sm-11" />
					</div>
				</div>

				<div className="col-12 d-flex text-center text-sm-start justify-content-center">
					<p className="text col-11">
						Muito prazer. Atualmente estou no começo da minha jornada no mundo da
						programação, não literalmente começo ne, já que venho queimando neurônios
						dês de antes, porque problemas para resolver estão ao nosso redor o tempo
						todo
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
