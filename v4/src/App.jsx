import "./App.sass"
import { Home } from "./container/home"
import { Experiencias } from "./container/experiencias/index"
import { Sobre } from "./container/sobre"
import { Rodape } from "./container/rodape"

function App() {
	return (
		<div id="app">
			<>
				<div className="logo"></div>
				<Home />
				<Experiencias />
				<Sobre />
				<Rodape />
			</>
		</div>
	)
}

export default App
