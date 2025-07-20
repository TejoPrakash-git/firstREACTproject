import { NavLink } from 'react-router-dom';
import contentCss from "./myContent.css"
function myContent(){
    return(
        <div className="myContent">
            <h1>My Content Page</h1>
             <div className="navBar">
                <div className="navItem">
                    <NavLink to="/myReactions" className="navMyReactions">My Reactions</NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/myTopic" className="navMyTopic">My Topic</NavLink>
                </div>
            </div>
        </div>
    )
}

export default myContent;
