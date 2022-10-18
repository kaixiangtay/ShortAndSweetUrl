import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import UrlGenerator from './components/UrlGenerator/UrlGenerator';
import ResultBoard from './components/ResultBoard/ResultBoard';

function App() {
  const [inputUrl, setInputUrl] = useState('');

  return (
    <div className="app">
      <UrlGenerator setInputUrl={setInputUrl} />
      <BackgroundAnimation />
      <ResultBoard inputUrl={inputUrl} />
    </div>
  );
}

export default App;
