// Generic customised Modal pattern
// Author: Nga Vu
import {
  Box, Button, Dialog, DialogContent, DialogTitle, IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

interface SingleModalProps {
  // Label text for toggled button (optional)
  buttonTitle?: any;
  // Icon for toggled button (optional)
  buttonStartIcon?: any;
  // Title for content in the modal (required)
  modalTitle: string;
  // The following props are used to adjust style of toggled button
  small?: boolean;
  variant?: 'outlined' | 'text' | 'contained';
  color?: string;
  backgroundColor?: string;
}
const SingleModal: React.FC<SingleModalProps> = (props) => {
  const {
    buttonTitle, modalTitle, buttonStartIcon, small, variant, color, backgroundColor,
  } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      {
        buttonTitle
        && (
          <Button
            onClick={handleClickOpen}
            startIcon={buttonStartIcon || ''}
            size={small ? 'small' : 'medium'}
            style={{ color: `${color}`, backgroundColor: `${backgroundColor}` }}
          >{buttonTitle}
          </Button>
        )
      }
      {
        (!buttonTitle && buttonStartIcon)
        && <IconButton onClick={handleClickOpen}>{buttonStartIcon}</IconButton>
      }
      <Dialog onClose={handleClose} open={open}>
        <Box display="flex">
          <Box flexGrow={1}>
            <DialogTitle>
              {modalTitle}
            </DialogTitle>
          </Box>
          <Box p={1}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogContent style={{ textAlign: 'center' }} dividers>
          {props.children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default SingleModal;
