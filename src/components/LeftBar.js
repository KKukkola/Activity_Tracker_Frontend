import Header from './Header'
import AddUsers from './AddUsers'
import Users from './Users'

const LeftBar = () => {
    return (
        <div className="h-100 float-start px-1" style={{width:'200px'}}>
            <Header />
            <hr className="mt-0" />
            <AddUsers />
            <hr />
            <Users />
        </div>
    )
}

export default LeftBar;