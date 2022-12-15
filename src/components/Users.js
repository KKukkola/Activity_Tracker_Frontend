import { useEffect } from 'react';
import User from './User';

import { useMyContext } from '../MyContext'
import { AddHandler, RemoveHandler } from '../sockets'


const Users = () => {
    const { users } = useMyContext();

    // Attach listener for user status updates
    
    useEffect(() => {
        let UpdateStatuses = (data) => {
            console.log("UpdateStatuses Got: ", data);
        }
        AddHandler(UpdateStatuses);
        return function cleanup() {
            RemoveHandler(UpdateStatuses);
        }
	}, []) 

    return (
        <ul className="list-group" style={{borderRadius:'0px'}}>
            { 
                users.map((user) => { return users.length > 0 ? <User key={user.userId} user={user} /> : "No Users"}) 
            }
        </ul>
    )
}

export default Users;