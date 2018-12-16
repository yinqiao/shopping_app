import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import Shopping from './src/Shopping'

import './index.css';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
      <Shopping />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
