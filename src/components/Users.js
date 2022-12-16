import { useState, useEffect } from 'react';
import User from './User';

import { useMyContext } from '../MyContext';
import { AddHandler, RemoveHandler } from '../sockets';

import ingame from '../assets/ingame.png';
import instudio from '../assets/instudio.png';
import offline from '../assets/offline.png';
import onweb from '../assets/onweb.png';

const status_imgs = [offline, onweb, ingame, instudio];

const Users = () => {
    const { users } = useMyContext();
    const [lastUpdated, setLastUpdated] = useState("n/a")

    // Attach listener for user status updates
    
    useEffect(() => {
        let UpdateStatuses = (presences) => {
            // TODO: presences is a json object of id:status
            let userItems = document.getElementsByClassName("userItem");
            Array.from(userItems).forEach(userItem => {
                const statusElement = userItem.querySelector(".status");
                const userId = userItem.getAttribute("data-userid");
                const status = presences[userId];
                statusElement.src = status_imgs[status];
            })
            setLastUpdated(new Date().toLocaleTimeString());
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
            <div style={{textAlign:"center",fontSize:"0.75rem"}}>updated: {lastUpdated}</div>
        </ul>
    )
}

export default Users;