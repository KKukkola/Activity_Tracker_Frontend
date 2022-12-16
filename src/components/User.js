import PropTypes from 'prop-types';

import offline from '../assets/offline.png'

import { useMyContext } from '../MyContext'

const User = ({ user }) => {
    const {users, setUsers, setSelectedUser} = useMyContext();
    
    function StatusClicked() {
        const id = parseInt(user.userId);
        setSelectedUser(id);
    }

    async function DeleteUser() {
		const id = parseInt(user.userId);
		const response = await fetch(`http://localhost:8000/api/users/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            setUsers(users.filter(user => user.userId !== id));
		}
	}

    return (
        <div className='list-group-item p-0 mb-1 container border-0 userItem' data-userid={user.userId} style={{fontFamily:'Lato'}}>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <img src={offline} className="m-0 p-0 me-2 status" style={{width:'20px',height:'20px'}}onClick={StatusClicked} alt="status"/>
                </div>
                <div className="">
                    <div className=".no-hover" style={{fontSize:'14px'}}>{user.name +' '+ user.userId}</div>
                </div>
                <div className="ms-auto d-flex align-items center">
                    <button type="button" className="btn btn-close p-0 m-0" style={{width:'15px',height:'15px'}} onClick={DeleteUser}></button>
                </div>
            </div>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    statusClicked: PropTypes.func,
    deleteUser: PropTypes.func
}

export default User;