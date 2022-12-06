import React, { useContext, useState } from 'react';

const MyContext = React.createContext();

export function useMyContext() {
	return useContext(MyContext);
}

export default function MyContextProvider({ children }) {
	const [users, setUsers] = useState([
		{ name: 'user1', id: 1 },
		{ name: 'user2', id: 2 }
	]);

	return (
		<MyContext.Provider value={{users, setUsers}}>
			{children}
		</MyContext.Provider>
	)
}