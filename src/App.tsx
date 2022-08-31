import React from 'react';
import './App.css';
import Header from './component/header';
import Navigator from './component/navigator';
import About from './component/about';
import Resume from './component/resume';
import Portfolio from './component/portfolio';
import './style/global.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigator />
      <About />
      <Resume />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;
