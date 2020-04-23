import React from 'react';
import './assets/app.css';

import {GlobalIcon} from './assets/font/iconfont.js'

import Top from "./components/Top"

// import Home from "./components/Home"
// import Homes from "./components/Homes"
import Details from "./components/Details"


function App() {
  return (
    <div className="App">
      <GlobalIcon></GlobalIcon>
      <Top></Top>
      <div className='main'>
      {/* <Home></Home> */}
      {/* <Homes></Homes> */}
      <Details></Details>
      </div>
    </div>
  );
}

export default App;
