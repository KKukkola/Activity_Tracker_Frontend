import User from './User';

import { useMyContext } from '../MyContext'

const Users = () => {
    const { users } = useMyContext();
    return (
        <ul className="list-group" style={{borderRadius:'0px'}}>
            { 
                users.map((user) => { return users.length > 0 ? <User key={user.id} user={user} /> : "No Users"}) 
            }
        </ul>
    )
}

export default Users;