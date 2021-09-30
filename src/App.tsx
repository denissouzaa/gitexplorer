import React from 'react';

//styles 
import GlobalStyle from './styles/global';
//plugins 
import { BrowserRouter as Router } from 'react-router-dom';
//pages 
import Rotas from './Routes';

function App() {
  return (
    <>
      <Router>
        <Rotas />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
