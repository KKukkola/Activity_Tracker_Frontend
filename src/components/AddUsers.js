import { useState } from 'react';

import { useMyContext } from '../MyContext'

const AddUsers = () => {
    const { users, setUsers } = useMyContext();
    const [text, setText] = useState('');
    const [showAdd, setShowAdd] = useState(false);

    function toggleAddUser() {
        setShowAdd(!showAdd);
    }

	function AddUser(id) {
		id = parseInt(id);
		if (users.find(u => u.id === id) !== undefined) {
			alert('alaredy watching user'); return;
		}
		const newUser = {
			name: 'user' + id,
			id: id
		}
		setUsers([...users, newUser]);
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