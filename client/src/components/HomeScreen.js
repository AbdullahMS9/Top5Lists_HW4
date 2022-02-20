import React, { useContext, useEffect, useState } from 'react'
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
import Box from '@mui/material/Box';
import Top5Item from './Top5Item.js'
import Button from '@mui/material/Button';
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

    function saveCurrent(){
        store.saveCurrentList()
    }
    function publishCurrent(){
        store.publishCurrentList()
    }
    function updateTextCurrent(event){
        store.updateCurrentListName(event.target.value)
    }

    let listCard = (store)?
        <div id="list-selector-list">
            <List sx={{ width: '90%', left: '5%' }} style ={{backgroundColor: "#c4c4c4"}}>
            {
                store.seenLists.map((list) => (
                    <ListCard
                        key={list._id}
                        list={list}
                        selected={false}
                    />
                ))
            }
            </List>
        </div>:"";

    listCard = (store.currentList)? 
        <div id="list-workspace-list">

            <Box sx={{ width: '90%', left: '5%', height:'90%' }} style ={{backgroundColor: "#d4d4f5", borderRadius: "10px", left:"5%"}}>
            <TextField 
                label="List Name" 
                size="small" 
                defaultValue = {store.currentList.name}
                style ={{width: 400, backgroundColor:"white", left:"5%"}}
                onChange={updateTextCurrent}>
            </TextField>

                <List sx={{ width: '90%', left: '5%', height:'80%' }} style ={{backgroundColor: "#e0e0e0", borderRadius: "10px", left:"5%", top: "1%"}}>
                    <Top5Item 
                        key={'top5-item-' + (1)}
                        text={store.currentList.items[0]}
                        index={0} 
                    />
                    <Top5Item 
                        key={'top5-item-' + (2)}
                        text={store.currentList.items[1]}
                        index={1} 
                    />
                    <Top5Item 
                        key={'top5-item-' + (3)}
                        text={store.currentList.items[2]}
                        index={2} 
                    />
                    <Top5Item 
                        key={'top5-item-' + (4)}
                        text={store.currentList.items[3]}
                        index={3} 
                    />
                    <Top5Item 
                        key={'top5-item-' + (5)}
                        text={store.currentList.items[4]}
                        index={4} 
                    />
                </List>
                <div style={{
                    float: "right",
                }}>
                    <Button
                        style={{
                            borderRadius: 15,
                            backgroundColor: "#e0e0e0",
                            fontSize: "16px",
                            color: "black"
                        }} 
                        id='save-button'
                        onClick={saveCurrent}
                        variant="contained">
                        Save
                    </Button>
                    <Button
                        style={{
                            borderRadius: 15,
                            backgroundColor: "#e0e0e0",
                            fontSize: "16px",
                            color: "black"
                        }} 
                        id='publish-button'
                        disabled={!store.canPublish}
                        onClick={publishCurrent}
                        variant="contained">
                        Publish
                    </Button>
                </div>
            </Box>
        </div>:listCard;

    

/*    let listCard = "";
    if (store) {
        listCard = 
            <List sx={{ width: '90%', left: '5%', bgcolor: 'background.paper' }}>
            {
                store.seenLists.map((list) => (
                    <ListCard
                        key={list._id}
                        list={list}
                        selected={false}
                    />
                ))
            }
            </List>;
    }*/

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
                <DeleteModal/>
               <IconButton disabled = {store.currentList}>
                    <HomeIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <IconButton disabled = {store.currentList}>
                   <PeopleIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <IconButton disabled = {store.currentList}>
                   <PersonIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <IconButton disabled = {store.currentList}>
                   <FunctionsIcon style ={{
                    fontSize: "45px"
                }}/>
               </IconButton>
               <TextField disabled = {store.currentList} label="Search" size="small" 
               style ={{width: 600, backgroundColor:"white", top: "10%", height: 40}}></TextField>

            </div>
            <div id="list-selector-heading2">
                Sort By
                <IconButton disabled = {store.currentList}>
                   <SortIcon style ={{
                    fontSize: "35pt"
                }}/>
               </IconButton>
            </div>

            {listCard}

        </div>)
}

export default HomeScreen;