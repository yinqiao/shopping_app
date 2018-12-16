import React from 'react';
import ReactDOM from 'react-dom';
import Shopping from './src/Shopping';

import './index.css';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <Shopping />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
