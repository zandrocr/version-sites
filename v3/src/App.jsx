import "./App.sass"
import { Home } from "./container/home"
import { Experiencias } from "./container/experiencias/index"
import { Sobre } from "./container/sobre"
import { Rodape } from "./container/rodape"
import { Abertura } from "./components/abertura/index"
import { useState } from "react"

function App() {
	const [open, setOpen] = useState(true)
	setTimeout(() => {
        setOpen(false)
    }, 500)

	return (
		<div id="app">
			{open ? (
				<Abertura />
			) : (
				<>
					<Home />
					<Experiencias />
					<Sobre />
					<Rodape />
				</>
			)}
		</div>
	)
}

export default App
