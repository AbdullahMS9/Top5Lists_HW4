import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import { Fab, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import DeleteModal from './DeleteModal.js';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import FunctionsIcon from '@mui/icons-material/Functions';
import SortIcon from '@mui/icons-material/Sort';
import {Statusbar} from '.';
/*
    This React component lists all the top5 lists in the UI.
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
    const { store } = useContext(GlobalStoreContext);

    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    function handleCreateNewList() {
        store.createNewList();
    }
    let listCard = "";
    if (store) {
        listCard = 
            <List sx={{ width: '90%', left: '5%', bgcolor: 'background.paper' }}>
            {
                store.idNamePairs.map((pair) => (
                    <ListCard
                        key={pair._id}
                        idNamePair={pair}
                        selected={false}
                    />
                ))
            }
            </List>;
    }
    return (
        <div id="top5-list-selector">
            <DeleteModal />
            <div id="list-selector-heading">
                {/*<Fab 
                    color="primary" 
                    aria-label="add"
                    id="add-list-button"
                    onClick={handleCreateNewList}
                >
                    <AddIcon />
                </Fab>
                <Typography variant="h2">Your Lists</Typography>*/}
            </div>

            <div id="list-selector-heading1">
               <IconButton>
                    <HomeIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <IconButton>
                   <PeopleIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <IconButton>
                   <PersonIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <IconButton>
                   <FunctionsIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <TextField label="Search" size="small" 
               style ={{width: 600, backgroundColor:"white", top: "10%", height: 40}}></TextField>

            </div>
            <div id="list-selector-heading2">
                Sort By
                <IconButton>
                   <SortIcon style ={{
                    fontSize: "35pt"
                }}/>
               </IconButton>
            </div>


            <div id="list-selector-list">
                {
                    listCard
                }
            </div>
        </div>)
}

export default HomeScreen;