import { useState } from "react"
import "./index.sass"
export function SheepCode() {
	const [primeiro, setPrimeiro] = useState(false)
	const [segundo, setSegundo] = useState(false)
	setTimeout(() => {
		setPrimeiro(true)
		setTimeout(() => {
			setSegundo(true)
		}, 500)
	}, 300)
	return (
		<div id="sheep">
			{primeiro ? <p>SHEEP</p> : null}
			{segundo ? <p>CODE</p> : null}
		</div>
	)
}
