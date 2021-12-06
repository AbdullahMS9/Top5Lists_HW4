import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import AuthContext from '../auth';
import {Fab} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);

    function handleCreateList() {
        store.createNewList();
    }

    let text ="";
    const location = useLocation();
    if (store.currentList)
        text = store.currentList.name;
    

    return (auth.loggedIn)?(
        <div id="top5-statusbar">
            <IconButton 
            id="add-list-button"
            onClick={handleCreateList}
            style = {{
                color: "white"
            }}
            >
                <AddIcon  style ={{
                    fontSize: "50pt"
                }}/>
            </IconButton>
            <Typography variant="h4" style = {{color: "white"}}>{"Your Lists"}</Typography>
        </div>
    ):("");
}

export default Statusbar;