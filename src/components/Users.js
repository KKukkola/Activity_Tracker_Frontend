import User from './User';

const Users = ({ users, statusClicked, deleteUser }) => {
    return (
        <ul className="list-group" style={{borderRadius:'0px'}}>
            { 
                users.map((user) => { return users.length > 0 ? <User key={user.id} 
                    user={user} 
                    statusClicked={statusClicked} 
                    deleteUser={deleteUser}/> : "No Users"}) 
            }
        </ul>
    )
}

export default Users;