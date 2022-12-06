import Header from './Header'
import AddUsers from './AddUsers'
import Users from './Users'

const LeftBar = ({ addUser, toggleAddUser, users, statusClicked, deleteUser, showAdd }) => {
    return (
        <div className="h-100 float-start" style={{width:'200px'}}>
            <Header />
            <hr />
            <AddUsers addUser={addUser} toggleAddUser={toggleAddUser} showAdd={showAdd}/>
            <hr />
            <Users users={users} statusClicked={statusClicked} deleteUser={deleteUser}/>
        </div>
    )
}

export default LeftBar;