import { useState } from 'react';

import { useMyContext } from '../MyContext'

const AddUsers = () => {
    const { users, setUsers } = useMyContext();
    const [text, setText] = useState('');
    const [showAdd, setShowAdd] = useState(false);

    function toggleAddUser() {
        setShowAdd(!showAdd);
    }

	async function AddUser(id) {
		id = parseInt(id);
        const userObj = users.find(u=>u.userId==id);
		if (userObj !== undefined) {
			alert('alaredy watching user'); return;
		}
        const payload = {userId: id};
        const response = await fetch('http://localhost:8000/api/users', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const jsonResponse = await response.json();
        if (response.status == 200) {
            setUsers([...users, jsonResponse]);
        } else {
            console.log("failed to add user");
        }
	}

    function onSubmit(e) {
        e.preventDefault();
        if (parseInt(text)!==parseInt(text)) {
            alert('bad id');
            return;
        }
        AddUser(text);
        setText('');
    }

    return (
        <div className="d-flex flex-column">
            <button type="button" className={`btn btn-primary w-100 ${showAdd ? 'bg-danger' : 'bg-primary'}`} style={{transition:'none'}} onClick={toggleAddUser}>{showAdd ? 'Close' : 'Add Users'}</button>
            { showAdd && (
                <form className='d-flex flex-column' onSubmit={onSubmit}>
                    <input type='text' className="w-100" placeholder="userID" value={text} onChange={(e)=>setText(e.target.value)}></input>
                    <input type='submit' className='btn btn-primary' value='Submit'></input>
                </form>
            ) }
        </div>
    )
}

export default AddUsers;