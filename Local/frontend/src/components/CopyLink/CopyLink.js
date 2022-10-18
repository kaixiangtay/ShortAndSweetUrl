import CopyToClipboard from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const CopyLink = ({ shortenUrl }) => {
  const [isUrlCopied, setIsUrlCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUrlCopied(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isUrlCopied]);

  return (
    <div>
      <CopyToClipboard text={shortenUrl} onCopy={() => setIsUrlCopied(true)}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#00C853', fontWeight: 'bold' }}
        >
          Copy URL
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyLink;
