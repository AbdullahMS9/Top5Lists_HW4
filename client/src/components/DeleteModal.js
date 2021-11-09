import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth';
import { useContext, useState } from 'react';
import Alert from '@mui/material/Alert';
import GlobalStoreContext from '../store';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal() {
  const { store } = useContext(GlobalStoreContext);
  
  function handleCancel() {
    store.unmarkListForDeletion()
  }

  function handleDeleteList() {
    store.deleteMarkedList()
  }

  let modal = (store.listMarkedForDeletion)?
    <div>
        <Modal
            open={true}
            onClose={handleCancel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Alert severity = "error"> Delete the Top 5 {store.listMarkedForDeletion.name}?</Alert>
            <Button variant = "text" onClick = {handleDeleteList}> Confirm </Button>
            <Button variant = "text" onClick = {handleCancel}> Cancel </Button>
          </Box>
        </Modal>
    </div>:"";

  return (modal);
}