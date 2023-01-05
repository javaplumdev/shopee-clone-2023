import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
	const [hi, setHi] = useState('Hi');

	return <Context.Provider value={{ hi }}>{props.children}</Context.Provider>;
};
