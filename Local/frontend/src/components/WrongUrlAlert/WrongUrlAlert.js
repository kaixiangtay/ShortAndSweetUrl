import React from 'react';
import { Alert } from '@mui/material';

const WrongUrlAlert = ({ errorMsg }) => {
  return (
    <div>
      <Alert
        sx={{
          fontWeight: 'bold',
          width: 'auto',
          height: '60%',
          alignItems: 'center',
          fontSize: 20
        }}
        variant="filled"
        severity="error"
      >
        {errorMsg}
      </Alert>
    </div>
  );
};

export default WrongUrlAlert;
