


import React from 'react'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import { Navigate } from 'react-router-dom';
interface DecodedToken extends JwtPayload {
  email: string;
  isAdmin: boolean;
}

function ProtectedRoutes({children}: {children: React.ReactNode}) {


  const token = localStorage.getItem('accessToken');

const validateToken = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return false;
  }
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    if(!decoded.exp) {
      return false;
    }
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return false;
    }
    return true;
  } 
  catch (error) 
  {
    console.log(error);
    return false;
  }
}

  if (!validateToken()) 
  {
    localStorage.removeItem('accessToken');
    return <Navigate to="/login" />
  }
  return children;

}

export default ProtectedRoutes