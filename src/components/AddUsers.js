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
    }

    return (
        <div className="flex">
            <button type="button" className="btn btn-primary w-100" style={{transition:'none', backgroundColor:`${showAdd ? 'Red' : 'Blue'}`}} onClick={toggleAddUser}>{showAdd ? 'Close' : 'Add Users'}</button>
            { showAdd && (
                <form className='add-form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label>UserID</label>
                        <input type='text' placeholder="userID" value={text} onChange={(e)=>setText(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <input type='submit' className='btn btn-block' value='Submit'></input>
                    </div>
                </form>
            ) }
        </div>
    )
}

export default AddUsers;