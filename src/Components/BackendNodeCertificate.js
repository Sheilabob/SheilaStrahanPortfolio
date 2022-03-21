import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function BackendNodeCertificate() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>
            <img src="/assets/images/BackEndNodeCert.jpg" height="100" alt="HTML Cert"/>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <img src="/assets/images/BackEndNodeCert.jpg" height="600" alt="HTML Cert"/>
          </Box>
        </Modal>
      </div>
    );
    }
