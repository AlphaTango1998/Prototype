import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })

    const handleLogin = async () => {
        console.warn("email,password", email, password)
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/")
        } else {
            alert("please enter correct details")
        }
    }


    return (
        <div className='Register'>
            <center>
                <h1>Login</h1>
                <table className='Regitable'>
                    <tbody>
                        <tr>
                            <td ><input className='textbox' type="text" placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)} value={email} />
                            </td>
                        </tr>
                        <tr>
                            <td ><input className='textbox' type="password" placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)} value={password} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className='loginbutton' onClick={handleLogin}>Login</button>
            </center>
        </div>

    )
}

export default Login