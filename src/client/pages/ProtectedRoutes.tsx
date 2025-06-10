


import React, { useState } from 'react'
import { authenticateUser } from '../../server/login'
function ProtectedRoutes() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);



  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes