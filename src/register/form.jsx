import registerCss from './form.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registerform(){     
     const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Username: '',   
        Email: '',
        Password: '',
        ConfirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
        navigate('/login');
    }
    return(
        <div className="register-form">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Register Form</h1> 
                <div className='form-group'>
                    <label>Username : </label>
                    <input type="text" name="Username" placeholder='Enter Username' className="input-username"></input>
                    <label>Email : </label>
                    <input type="text" name="Email" placeholder='Enter your Email' className="input-email"></input>
                    <label>Password : </label>
                    <input type="text" name="Password" placeholder='Enter your Password' className="input-password"></input>
                    <label>Confirm Password : </label>
                    <input type="text" name="ConfirmPassword" placeholder='Confirm your Password' className="input-password"></input><br></br>
                    <button className='btn'>Register</button>
                    <p>already have a account ? <Link className='link' to="/login.jsx">Login</Link></p>
                    
                </div>
            </form>
        </div>
    );
}

export default Registerform;