import './App.css';
import ThemeButton from './components/ThemeButton';
import AuthContextProvider from './utils/authContext';
import ThemeContextProvider from './utils/context';

function App() {
	// You cannot consume the context at the level that the provider is implemented
	return (
		<ThemeContextProvider>
			<AuthContextProvider>
				<div className="App">
					<ThemeButton />
				</div>
			</AuthContextProvider>
		</ThemeContextProvider>
	);
}

export default App;
