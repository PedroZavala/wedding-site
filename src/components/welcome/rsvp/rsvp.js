import './rsvp.css';
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
import emailjs from '@emailjs/browser';

const Rsvp = () => {
    const initState = {
        name: '',
        adultCount: 0,
        childrenCount: 0,
        submitDisabled: true,
        isError: true
    };

    const inputNameRegex = new RegExp('(.{2,} .{2,})');

    const [open, setOpen] = React.useState(false);
    const [submit, setSubmit] = React.useState(false);
    const [submitDisabled, setSubmitDisabled] = React.useState(initState.submitDisabled);

    const [inputName, setInputName] = React.useState(initState.name);
    const [inputAdultCount, setAdultCount] = React.useState(initState.adultCount);
    const [inputChildrenCount, setChildrenCount] = React.useState(initState.childrenCount);

    const [inputNameError, setInputNameError] = React.useState(initState.isError);
    const [inputAdultCountError, setInputAdultCountError] = React.useState(initState.isError);
    const [inputChildrenCountError, setInputChildrenCountError] = React.useState(initState.isError);

    const handleFormNameInput = (e) => {
        var isError = false;
        if (inputNameRegex.test(e.target.value)) {
            setInputName(e.target.value);
        } else {
            isError = true;
        }

        setInputNameError(isError);
        toggleSubmit(isError, inputAdultCountError, inputChildrenCountError);
    };

    const handleFormAdultCountInput = (e) => {
        var isError = false;
        if (e.target.value > 0 && e.target.value <= 10) {
            setAdultCount(e.target.value);
        } else {
            isError = true;
        }

        setInputAdultCountError(isError)
        toggleSubmit(isError, inputNameError, inputChildrenCountError);
    };

    const handleFormChildrenCountInput = (e) => {
        var isError = false;
        if (e.target.value >= 0 && e.target.value <= 10) {
            setChildrenCount(e.target.value);
        } else {
            isError = true;
        }

        setInputChildrenCountError(isError)
        toggleSubmit(isError, inputNameError, inputAdultCountError);
    };

    // Passing in vars instead of ref becuase of a out of state sync lag issue
    const toggleSubmit = (v1, v2, v3) => {
        v1 || v2 || v3 ? setSubmitDisabled(true) : setSubmitDisabled(false);
    };

    const handleRsvpClickOpen = () => {
        setOpen(true);
    };

    const handleFormClose = () => {
        setOpen(false);
        resetState();
    };

    const handleFormSubmit = () => {
        setOpen(false);
        resetState();
        setSubmit(true);
        sendEmail();

        //timeout for submitted msg
        setTimeout(() => {
            setSubmit(false);
         }, 2500)
    };

    const resetState = () => {
        setSubmitDisabled(true);
        setInputName(initState.name);
        setAdultCount(initState.adultCount);
        setChildrenCount(initState.childrenCount);
        setInputNameError(initState.isError);
        setInputAdultCountError(initState.isError);
        setInputChildrenCountError(initState.isError);
    };

    const sendEmail = () => {
        var content = {
            name: inputName,
            adults: inputAdultCount,
            children: inputChildrenCount
        }
        // Get Email secrets from me
        emailjs.send('', '', content, '')
          .then((result) => {
              console.log('RSVP OK');
          }, (error) => {
              console.log('RSVP Failed');
          });
    };

    const RsvpButton = styled(Button)(() => ({
        left: '50%',
        color: '#ffffff',
        lineHeight: 'calc(25px + 3vmin)',
        fontSize: 'calc(15px + 2vmin)',
        width: 'calc(80px + 5vmin)',
        transform: 'translateX(-50%)',
        fontFamily: '\'Playfair Display SC\', serif',
        boxShadow: '1px 1px 8px rgb(180, 180, 180)',
        backgroundColor: '#000000',
        '&:hover': {
            backgroundColor: 'rgb(50, 50, 50)',
        },
    }));

    return (
        <div>
            <RsvpButton variant="contained" onClick={handleRsvpClickOpen}>RSVP</RsvpButton>
            <Dialog open={open} onClose={handleFormClose}>
                <DialogTitle>RSVP</DialogTitle>
                <DialogContent>
                    <DialogContentText className='rsvp-info'>
                        We are excited that you will be a part of our wedding!
                        Please let us know how many guests will be joining us.
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