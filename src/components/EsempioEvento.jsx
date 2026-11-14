import { useState } from "react";

function EsempioEvento() {

	function onButtonClick() {
		const nuovoValore = numeroClick + 1;
		setNumeroClick(nuovoValore);

		// console log per ora sconsigliato in questa funzione
		// console.log("Numero di click: ", numeroClick);
	}

	// let numeroClick = 3;
	let [numeroClick, setNumeroClick] = useState(3);

	return (
		<div className="component">
			<p>Elemento cliccato {numeroClick} volte</p>
			<div>{numeroClick > 6 ? "Superato" : ""}</div>
			<button onClick={onButtonClick} >Cliccami!</button>
		</div>
	)
}

export default EsempioEvento;