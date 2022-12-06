import PropTypes from 'prop-types';
import ingame from '../assets/ingame.png';
// import instudio from '../assets/instudio.png'
// import offline from '../assets/offline.png'
// import onweb from '../assets/onweb.png'

const User = ({ user, statusClicked, deleteUser }) => {

    const clickedStatus = () => { statusClicked(user.id); }
    const clickedDelete = () => { deleteUser(user.id); }

    return (
        <div className='list-group-item p-0 py-1 container list-group-item-action bg-primary'>
            <div className="row align-items-center">
                <div className="col col-auto">
                    <img src={ingame} onClick={clickedStatus} alt="status"/>
                </div>
                <div className="col ps-0 pe-0">
                    <div className=".no-hover"><small>{user.name +' '+ user.id}</small></div>
                </div>
                <div className="col col-auto d-flex">
                    <button type="button" className="btn btn-close" onClick={clickedDelete}></button>
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