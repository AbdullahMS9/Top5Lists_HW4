import { useContext } from 'react'
import Button from '@mui/material/Button';
import AuthContext from '../auth'
import { GlobalStoreContext } from '../store'
import { Link } from 'react-router-dom'

export default function SplashScreen() {
    const { auth } = useContext(AuthContext);
    const { store } = useContext(GlobalStoreContext);
    const guestLogin = () => {
        auth.loginUser({
            userName: "guest",
            password: "guest123",
        }, store);
        if(auth.errMsg){
            console.log(auth.errMsg);
          }
    }


    return (
        <div id="splash-screen">
            <div id="splash-welcome"><h5>Welcome to the... <br/> Top 5 Lister</h5></div>
            <div id="splash-message">A place where anyone can <br/>
            create and share their <br/>
            Top 5 Lists<br/>
            </div>
            <Link to='/register/'><Button class="splash-button1">Create Account</Button></Link>
            <Link to='/login/'><Button class="splash-button2">Login</Button></Link>
            <Button class="splash-button3" onClick = {guestLogin}>Continue as Guest</Button>
        <div id="splash-student"><strong>Site developed by Abdullah Saad ©</strong></div>
        </div>
    )
}