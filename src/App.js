import { useState } from 'react'
import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar';

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [users, setUsers] = useState([
    {name:'user1', id:1},
    {name:'user2', id:2}
  ]);
  
  function DeleteUser(id) {
    id = parseInt(id);
    setUsers( users.filter( user => user.id !== id ) );
    console.log("delete", id);
  }

  function AddUser(id) {
    id = parseInt(id);
    if (users.find(u=>u.id===id) !== undefined) {
      alert('alaredy watching user');
      return;
    }
    const newUser = {
      name:'user'+id,
      id:id
    }
    setUsers([...users, newUser])
  }

  function toggleAddUser() {
    setShowAdd(!showAdd);
  }

  function StatusClicked(id) {
    id = parseInt(id);
    console.log('click status', id);
  }

  return (
    <div className="App">
      <LeftBar users={users} addUser={AddUser} toggleAddUser={toggleAddUser} statusClicked={StatusClicked} showAdd={showAdd} deleteUser={DeleteUser}/>
      <RightBar />
    </div>
  );
}

// 375 25min

export default App;
