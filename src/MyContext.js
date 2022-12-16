import React, { useContext, useEffect, useState } from 'react';

const MyContext = React.createContext();

export function useMyContext() {
	return useContext(MyContext);
}

export default function MyContextProvider({ children }) {
	const [users, setUsers] = useState([{ name: 'LOADING..', userId: 1 }, { name: 'LOADING..', userId: 2 }]);
	const [selectedUser, setSelectedUser] = useState(null)

	useEffect(() => { // occurs after render
		(async function fetchData() {
			const response = await fetch('http://localhost:8000/api/users');
			const fetchedUsers = await response.json();
			console.log("Fetched Users: ", fetchedUsers);
			setUsers(fetchedUsers);
		})();
	}, []) // [] = only run on mount and unmount (only once) 

	return (
		<MyContext.Provider value={{users, setUsers, selectedUser, setSelectedUser}}>
			{children}
		</MyContext.Provider>
	)
}