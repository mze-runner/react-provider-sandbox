import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = 'light' | 'dark';

// const FakeContext = createContext<ThemeContextType>('light');
const fakeContext = createContext<ThemeContextType>('light');

export const useFakeContext = () => {
	const context = useContext(fakeContext);
	const [theme, setTheme] = useState<ThemeContextType>(context);

	// function updateContext = (t: ThemeContextType) => {
	// 	context =
	// }
    
	return {
		context,
		// setTheme,
		// updateContext
	};
};

export default fakeContext.Provider;