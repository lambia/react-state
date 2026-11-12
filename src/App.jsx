import Componente from "@/components/Componente"
import EsempioProps from "@/components/EsempioProps"

function App() {

	const numero = 42;

	return (
		<>
			<Componente />
			<EsempioProps dati={numero} />
		</>
	)
}

export default App
