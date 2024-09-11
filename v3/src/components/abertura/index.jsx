import "./index.sass"
import logo from "../../assets/logoSheep.svg"

export function Abertura() {
	return (
		<div id="abertura">
            <section>
                <div></div>
                <div></div>
            </section>
            <img className="logo" src={logo} alt="Sheep Code" />
		</div>
	)
}
