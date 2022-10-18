import axios from 'axios';
import './ResultBoard.css';
import { useEffect, useState } from 'react';
import { Avatar, Button, List, ListItem, ListItemAvatar } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import CopyLink from '../CopyLink/CopyLink.js';
import WrongUrlAlert from '../WrongUrlAlert/WrongUrlAlert.js';

const ResultBoard = ({ inputUrl }) => {
  const [shortenLink, setShortenLink] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.post(
        "http://urlec-publi-v3heem9i3pwy-1247731760.ap-southeast-1.elb.amazonaws.com/api/url/shorten",
        {
          longUrl: inputUrl
        }
      );

      setError(false);
      setShortenLink(res.data.url);
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) {
        setError(true);
        setErrorMsg(err.response.data.msg);
      }
    }
  };

  useEffect(() => {
    if (inputUrl.length !== 0) {
      fetchData();
    }
  }, [fetchData, inputUrl]);

  if (error) {
    return (
      <div className="errorContainer">
        <WrongUrlAlert errorMsg={errorMsg} />
      </div>
    );
  }

  return (
    <div>
      {shortenLink && (
        <div className="resultBoard">
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LinkIcon />
                </Avatar>
              </ListItemAvatar>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff59d',
                  fontWeight: 'bold',
                  color: 'black',
                  textTransform: 'none',
                  ':hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
                href={`${shortenLink}`}
              >
                {shortenLink}
              </Button>
            </ListItem>
          </List>

          <CopyLink shortenUrl={shortenLink} />
        </div>
      )}
    </div>
  );
};

export default ResultBoard;
