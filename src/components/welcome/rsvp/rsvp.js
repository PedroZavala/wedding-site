import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Rsvp = () => {
    const [open, setOpen] = React.useState(false);
    const [submit, setSubmit] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
        setSubmit(true);

        setTimeout(() => {
            setSubmit(false);
         }, 2500)
    };

    const RsvpButton = styled(Button)(() => ({
        color: '#ffffff',
        fontSize: '3vh',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#000000',
        '&:hover': {
            backgroundColor: '#000000',
        },
    }));

    return (
        <div>
        <RsvpButton variant="contained" onClick={handleClickOpen}>RSVP</RsvpButton>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>RSVP</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    We are excited you will be a part of our wedding! 
                    Please let us know how many total guests (including kids)
                    will be joining our special day.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="name"
                    label="Your Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="guests"
                    label="Total Guest Count"
                    type="number"
                    pattern="[0-9]"
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={submit} onClose={handleClose}>
        <Alert severity="success">
            <AlertTitle>Thank You</AlertTitle>
                We can't wait for you to join us.
            </Alert>
        </Dialog>
        </div>
    );
}
 
export default Rsvp;