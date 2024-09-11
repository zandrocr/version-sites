import { useState } from "react"
import "./index.sass"
export function SheepCode() {
	const [segundo, setSegundo] = useState(false)
	setTimeout(() => {
		setSegundo(true)
	}, 500)
	return (
		<div id="sheep">
			<p>SHEEP</p>
			{segundo ? <p>CODE</p> : null}			
		</div>
	)
}
