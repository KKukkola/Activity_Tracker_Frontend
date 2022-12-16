import History from './History';

import { useMyContext } from '../MyContext'

const RightBar = () => {
    let { selectedUser } = useMyContext();
    return (
        <div className="h-100 float-start" style={{width:`calc(100% - 200px)`, backgroundColor:'green'}}>
            {selectedUser && <History userId={selectedUser}/>} 
        </div>
    )
}

export default RightBar;