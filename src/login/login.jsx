import loginCss from './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Loginform(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Username: '',   
        Email: '',
        Password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/dash');
    }
    return(
        <div className="login-form">
            <form className="rform" onSubmit={handleSubmit}>
                <h1>Login Form</h1> 
                <div className='rform-group'>
                    <label>Username : </label>
                    <input type="text" name="Username" placeholder='Enter Username' ></input>
                    <label>Email : </label>
                    <input type="text" name="Email" placeholder='Enter your Email' ></input>
                    <label>Password : </label>
                    <input type="text" name="Password" placeholder='Enter your Password' ></input><br></br>
                    <button className='btn'>Login</button>
                    <p>Doesn't have an account ? </p>
                    <Link className='link' to="/form">register</Link>
                </div>
            </form>
        </div>
    );
}

export default Loginform;