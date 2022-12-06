import PropTypes from 'prop-types';
import ingame from '../assets/ingame.png';
// import instudio from '../assets/instudio.png'
// import offline from '../assets/offline.png'
// import onweb from '../assets/onweb.png'

const User = ({ user, statusClicked, deleteUser }) => {

    const clickedStatus = () => { statusClicked(user.id); }
    const clickedDelete = () => { deleteUser(user.id); }

    return (
        <div className='list-group-item p-0 mb-1 container border-0' style={{fontFamily:'Lato'}}>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <img src={ingame} className="m-0 p-0 me-2" style={{width:'20px',height:'20px'}}onClick={clickedStatus} alt="status"/>
                </div>
                <div className="">
                    <div className=".no-hover" style={{fontSize:'14px'}}>{user.name +' '+ user.id}</div>
                </div>
                <div className="ms-auto d-flex align-items center">
                    <button type="button" className="btn btn-close p-0 m-0" style={{width:'15px',height:'15px'}} onClick={clickedDelete}></button>
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