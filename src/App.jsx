import Componente from "@/components/Componente"
import EsempioProps from "@/components/EsempioProps"
import EsempioEvento from "./components/EsempioEvento";

function App() {

	const numero = 42;

	return (
		<>
			{/*
			<Componente />
			<EsempioProps dati={numero} />
			*/}
			<EsempioEvento />
		</>
	)
}

export default App
