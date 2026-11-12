import { useState } from "react";

function EsempioEvento() {

	function onButtonClick() {
		const nuovoValore = !isOpen;
		setIsOpen(nuovoValore);
	}

	let [isOpen, setIsOpen] = useState(false);

	return (
		<div className="component">
			<button onClick={onButtonClick} >Cliccami!</button>
			<div>{isOpen ? "Elemento aperto bla bla bla" : ""}</div>
		</div>
	)
}

export default EsempioEvento;