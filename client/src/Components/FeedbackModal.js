import React, { useState } from 'react';
import { Typography, Box, Modal, TextField, Button, CircularProgress } from '@material-ui/core';
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    p: 4,
};

function FeedbackModal({ open, handleClose, openSnack }) {

    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const submitFeedback = () => {
        if (feedback.length === 0) return;
        setLoading(true);
        axios.post('https://self-growth-questionaire.herokuapp.com/feedback', {
            email: localStorage.getItem("email"),
            feedback: feedback
        })
            .then(res => {
                if (res.data.success) {
                    setLoading(false);
                    handleClose();
                    openSnack();
                }
            })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Provide Feedback
                </Typography>
                <TextField id="standard-basic" variant="standard" disabled value={localStorage.getItem("email")} />
                <TextField
                    label="Your Feedback"
                    multiline
                    variant='outlined'
                    required
                    rows={4}
                    onChange={(e) => setFeedback(e.target.value)}
                    style={{ margin: '10px 0px' }}
                />
                {!loading &&
                    <Button variant="contained" color="primary" onClick={submitFeedback}>Submit</Button>
                }
                {loading && <Box sx={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></Box>}
            </Box>
        </Modal>
    )
}

export default FeedbackModal;