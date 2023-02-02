import React from 'react'
import Logout from './Logout'
import Navbar from './Navbar'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react'
function App() {
    return (
        <div>
            <Navbar />

            <Logout />

            <Profile />
        </div>
    )
}
export default App
