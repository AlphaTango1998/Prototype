import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const collectData = async () => {
        console.warn(fname, lname, email, phone, dob, password)
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ fname, lname, email, phone, dob, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json()



        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate('/');
    }




    return (
        <div className='Register'>
            <center>
                <h1>Sign Up</h1>

                <table className='Regitable'>

                    <tbody>
                        <tr>
                            <td><input className='textbox' type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder='First Name' /></td>

                            <td><input className='textbox' type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Last Name' /></td>
                        </tr>
                        <tr>
                            <td ><input className='textbox' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /></td>

                            <td><input className='textbox' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required="" placeholder='Phone' /></td>
                        </tr>
                        <tr>
                            <td><input className='textbox' type="text" value={dob} onChange={(e) => setDob(e.target.value)} placeholder='DOB dd/mm/yyyy' /></td>

                            <td ><input className='textbox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /></td>
                        </tr>

                    </tbody>

                </table>

                <button className='button regibutton' onClick={collectData}>Submit</button>

            </center>
        </div>
    )
}
export default SignUp;
