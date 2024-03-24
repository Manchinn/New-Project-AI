import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Navbar2 from '../Nav/Navbar2';

function Profile() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    const token = localStorage.getItem('token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status === 'ok'){
          setUser(result.user)
          setIsLoaded(false)
        }else if(result.status === 'forbidden'){
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
          }).then((value) => {
            navigate('/login')
          })
        }
        console.log(result)
      })
      .catch(error => console.log('error',error));
  }, [MySwal, navigate])


  if(isLoaded) return <div>Loading</div>
  else{
    return (
      <div>
        <Navbar2/>
      </div>
  )}
}

export default Profile