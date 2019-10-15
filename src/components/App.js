import React from 'react';
import PetsShop from './PetsShop/PetsShop';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.module.css';

const App = () => {
  return (
    <>
      <Router>
        <PetsShop />
      </Router>
    </>
  );
};
export default App;
