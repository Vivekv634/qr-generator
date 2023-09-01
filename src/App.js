import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <label htmlFor='message'>Enter a message or URL:</label>
      <input
        id='message'
        value={inputValue}
        placeholder='Enter Your text...'
        onChange={e => setInputValue(e.target.value)} />
      <div className='image'>
        <img src={`http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=180x180`} alt='' />
      </div>
    </div>
  );
}

export default App;
