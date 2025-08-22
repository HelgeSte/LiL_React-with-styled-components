import './App.css';
import ProductDetails from './examples/ProductDetails';
import Parent from './examples/Parent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  return (
    <div>
      <ProductDetails />
      <Parent />
    </div>
  );
};

export default App;
