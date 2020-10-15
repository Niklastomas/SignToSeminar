import { IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

function ErrorAlert({ close, message }) {
  return (
    <Alert
      severity='error'
      action={
        <IconButton
          aria-label='close'
          color='inherit'
          size='small'
          onClick={() => {
            close();
          }}
        >
          <CloseIcon fontSize='inherit' />
        </IconButton>
      }
    >
      {message}
    </Alert>
  );
}

export default ErrorAlert;
