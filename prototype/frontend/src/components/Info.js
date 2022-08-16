import React from 'react'
import logo from './logo.jpg'

const Info = () => {
    const auth = localStorage.getItem('user');
  return (
    <div className='Info'>

                <div classname ="info-left">
                    <div>
                        <img src={logo} className='logo' alt = "emp" height = "120" width = "120"/>
                    </div>

                        <div>
                            <h5>{JSON.parse(auth).fname} {JSON.parse(auth).lname}</h5>
                           
                        </div>

                </div>
                <div classname ="info-right">

                        <div>
                            
                            <h6>Name : {JSON.parse(auth).fname} {JSON.parse(auth).lname}</h6>
                            <h6>Phone : {JSON.parse(auth).phone}</h6>
                            <h6>DOB : {JSON.parse(auth).dob}</h6>
                            <h6>Email : {JSON.parse(auth).email}</h6>
                              
                        </div>
                    
                </div>
            
        </div>  
   
  )
}

export default Info