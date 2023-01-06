import './App.css';
import { ContextProvider } from './context/context';

//Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Navbar />
				<Hero />
			</div>
		</ContextProvider>
	);
}

export default App;
