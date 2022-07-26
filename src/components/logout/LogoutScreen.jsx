import { useNavigate } from "react-router-dom";

export const LogoutScreen = () => {
        const navigate=useNavigate();
        const handleLogout= () => {
            navigate( '/Logout', {
                replace: '/Login'
            } );
        }
        return (
            <div>
                <h1><center>LoginScreen</center></h1>
                <hr />
    
                <button 
                    className='btn btn-primary'
                    onClick={ handleLogout }
                    >
                        Logout
                </button>
            </div>
        )
    }