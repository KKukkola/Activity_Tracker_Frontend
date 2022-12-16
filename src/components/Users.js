import { useEffect } from 'react';
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

    // Attach listener for user status updates
    
    useEffect(() => {
        let UpdateStatuses = (presences) => {
            if (presences.userId === null || presences.userId === undefined) return;
            let userItems = document.getElementsByClassName("userItem");
            Array.from(userItems).forEach(userItem => {
                const statusElement = userItem.querySelector(".status");
                const userId = userItem.getAttribute("data-userid");
                const status = presences[userId];
                statusElement.src = status_imgs[status];
            })
            console.log("Statuses Updated.");
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