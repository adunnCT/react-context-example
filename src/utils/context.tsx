import { createContext, useContext, useMemo, useState } from 'react';

interface IThemeContextProvider {
	children: React.ReactNode;
}

type ThemeContextType = {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
};

// createContext tells the useContext function what type it's value is
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

// useContext is a React hook that consumes the context from the provider and returns it's value
export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};

/*
  Provider wraps any components that need access to the context at the highest level
  and provides the context value to the useContext hook
*/
const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	/* 
    useMemo is a React hook that will only run if the watched values change.
    This optimizes the context provider by not updating unnecessarily
  */
	const providerDefaultValue = useMemo(
		() => ({
			darkMode,
			setDarkMode,
		}),
		[darkMode, setDarkMode]
	);

	return (
		<ThemeContext.Provider value={providerDefaultValue}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
