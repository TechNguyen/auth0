import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
function Logout() {
    const { logout, isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
            <button
                onClick={() => {
                    logout({ logoutParams: window.location.origin })
                }}
            >
                Log out
            </button>
        )
    )
}

export default Logout
