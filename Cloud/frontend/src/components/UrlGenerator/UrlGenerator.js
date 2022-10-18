import { useState } from 'react';
import './UrlGenerator.css';
import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput
} from '@mui/material';

const UrlGenerator = ({ setInputUrl }) => {
  const [url, setUrl] = useState('');

  const handleUrlInputBox = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmitButton = () => {
    setInputUrl(url);
    setUrl('');
  };

  return (
    <div className="container">
      <h1 className="title">
        Short & Sweet<span>URL</span>
      </h1>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          sx={{ borderColor: 'primary.main' }}
          value={url}
          onChange={handleUrlInputBox}
          startAdornment={<InputAdornment position="start">URL</InputAdornment>}
          label="URL"
        />
      </FormControl>
      <Button
        sx={{
          ':hover': {
            bgcolor: 'primary.main',
            color: 'white'
          }
        }}
        onClick={handleUrlSubmitButton}
      >
        Generate URL
      </Button>
    </div>
  );
};

export default UrlGenerator;
