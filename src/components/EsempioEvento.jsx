function EsempioEvento() {

	function onButtonClick() {
		alert("Hai cliccato!");
	}

	return (
		<div className="component">
			<p>Sono un Componente con evento!</p>
			<button onClick={onButtonClick} >Cliccami!</button>
		</div>
	)
}

export default EsempioEvento;