import User from './User';

const Users = ({ users, statusClicked, deleteUser }) => {
    return (
        <>
            { 
                users.map((user) => { return users.length > 0 ? <User key={user.id} 
                    user={user} 
                    statusClicked={statusClicked} 
                    deleteUser={deleteUser}/> : "No Users"}) 
            }
        </>
    )
}

export default Users;