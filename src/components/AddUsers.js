import { useState } from 'react';

const AddUsers = ({ addUser, toggleAddUser, showAdd }) => {
    const [text, setText] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(text)!==parseInt(text)) {
            alert('bad id');
            return;
        }
        addUser(text);

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