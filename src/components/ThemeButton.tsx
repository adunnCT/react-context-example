import { useContext } from 'react';
import { useTheme } from '../utils/context';

const ThemeButton = () => {
	const context = useTheme();

	if (!context) throw new Error('Sorry, no context!');

	const { darkMode, setDarkMode } = context;

	return (
		<button onClick={() => setDarkMode(!darkMode)}>
			Current Theme is {darkMode ? 'Dark' : 'Light'}
		</button>
	);
};

export default ThemeButton;
