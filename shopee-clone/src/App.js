import './App.css';
import { ContextProvider } from './context/context';

//Components
import Navbar from './components/Navbar';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Navbar />
			</div>
		</ContextProvider>
	);
}

export default App;
