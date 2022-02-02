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
    const inputNameRegex = new RegExp('(.{2,} .{2,})');

    const [open, setOpen] = React.useState(false);
    const [submit, setSubmit] = React.useState(false);
    const [submitDisabled, setSubmitDisabled] = React.useState(true);
    const [inputNameError, setInputNameError] = React.useState(true);
    const [inputAdultCountError, setInputAdultCountError] = React.useState(true);
    const [inputChildrenCountError, setInputChildrenCountError] = React.useState(true);

    const handleRsvpClickOpen = () => {
        setOpen(true);
    };

    const handleFormNameInput = (e) => {
        var result = false;
        inputNameRegex.test(e.target.value) ? result = false : result = true;

        setInputNameError(result);
        toggleSubmit(result, inputAdultCountError, inputChildrenCountError);
    };

    const handleFormAdultCountInput = (e) => {
        var result = false;
        (e.target.value > 0 && e.target.value <= 10) ? result = false : result = true;

        setInputAdultCountError(result)
        toggleSubmit(result, inputNameError, inputChildrenCountError);
    };

    const handleFormChildrenCountInput = (e) => {
        var result = false;
        (e.target.value > 0 && e.target.value <= 10) ? result = false : result = true;

        setInputChildrenCountError(result)
        toggleSubmit(result, inputNameError, inputAdultCountError);
    };

    // Passing in vars instead of ref becuase of a out of state issue
    const toggleSubmit = (v1, v2, v3) => {
        v1 || v2 || v3 ? setSubmitDisabled(true) : setSubmitDisabled(false);
    };

    const handleFormClose = () => {
        setOpen(false);
    };

    const handleFormSubmit = () => {
        setOpen(false);
        setSubmit(true);

        setTimeout(() => {
            setSubmit(false);
         }, 2500)
    };

    const RsvpButton = styled(Button)(() => ({
        color: '#ffffff',
        fontSize: '3vmin',
        width: '12%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#000000',
        '&:hover': {
            backgroundColor: 'rgb(80, 80, 80)',
        },
    }));

    return (
        <div>
        <RsvpButton variant="contained" onClick={handleRsvpClickOpen}>RSVP</RsvpButton>
        <Dialog open={open} onClose={handleFormClose}>
            <DialogTitle>RSVP</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    We are excited that you will be a part of our wedding!
                    Please let us know how many total guests (including kids)
                    will be joining us.
                </DialogContentText>
                <div>
                <TextField onChange={(e) => handleFormNameInput(e)}
                    margin="dense"
                    label="First and Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    required
                    error={inputNameError}
                />
                </div>
                <div>
                <TextField onChange={(e) => handleFormAdultCountInput(e)}
                    margin="dense"
                    label="Adult Count"
                    type="number"
                    variant="standard"
                    required
                    error={inputAdultCountError}
                />
                </div>
                <div>
                <TextField onChange={(e) => handleFormChildrenCountInput(e)}
                    margin="dense"
                    label="Children Count"
                    type="number"
                    variant="standard"
                    required
                    error={inputChildrenCountError}
                />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleFormClose}>Cancel</Button>
                <Button onClick={handleFormSubmit} disabled={submitDisabled}>Submit</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={submit} onClose={handleFormClose}>
        <Alert severity="success">
            <AlertTitle>Thank You</AlertTitle>
                We can't wait for you to join us.
            </Alert>
        </Dialog>
        </div>
    );
}

export default Rsvp;