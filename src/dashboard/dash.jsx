import { NavLink } from 'react-router-dom';
import dashCss from './dash.css';
function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Welcome to the dashboard</h1>
            <div className="Navbar">  
                
                <div className="navItem">
                    <NavLink to="/profile" className="navProfile">Profile</NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/topics" className="navTopics">Topics</NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/allUsers" className="navAllUsers">All Users</NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/myContent" className="navMyContent">My Content</NavLink>
                </div>
           </div>
        </div>
    )
}

export default Dashboard;
