
import Registerform from './register/form.jsx';
import './App.css';
import Loginform from './login/login.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/dash.jsx';
import Profile from './profile/profile.jsx';
import Topics from './topics/topics.jsx';
import AllUsers from './allUsers/allUsers.jsx';
import MyContent from "./myContent/myContent.jsx"
import MyReaction from './myContent/myReactions/myReactions.jsx';
import MyTopic from './myContent/myTopic/myTopic.jsx';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/form" element={<Registerform />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/myContent" element={<MyContent />} />
        <Route path="myReactions" element={<MyReaction />} />
        <Route path="/myTopic" element={<MyTopic />} />

        <Route path="*" element={<Loginform />} />
      </Routes>
  
    </div>
  );
}

export default App;
