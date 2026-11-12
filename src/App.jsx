import Componente from "@/components/Componente"
import EsempioProps from "@/components/EsempioProps"
import EsempioEvento from "./components/EsempioEvento";
import EsempioEventoToggle from "./components/EsempioEventoToggle";

function App() {

	const numero = 42;

	return (
		<>
			{/*
			<Componente />
			<EsempioProps dati={numero} />
			*/}
			<EsempioEvento />
			<EsempioEventoToggle />
		</>
	)
}

export default App
