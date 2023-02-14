import { createContext, useContext, useMemo, useState } from 'react';

interface IAuthContextProvider {
	children: React.ReactNode;
}

type AuthContextType = {
	isAuthorized: boolean;
	setIsAuthorized: (value: boolean) => void;
};

// createContext tells the useContext function what type it's value is
export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

// useContext is a React hook that consumes the context from the provider and returns it's value
export const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}

	return context;
};

/*
  Provider wraps any components that need access to the context at the highest level
  and provides the context value to the useContext hook
*/
const AuthContextProvider = ({ children }: IAuthContextProvider) => {
	const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

	/* 
    useMemo is a React hook that will only run if the watched values change.
    This optimizes the context provider by not updating unnecessarily
  */
	const providerDefaultValue = useMemo(
		() => ({
			isAuthorized,
			setIsAuthorized,
		}),
		[isAuthorized, setIsAuthorized]
	);

	return (
		<AuthContext.Provider value={providerDefaultValue}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
