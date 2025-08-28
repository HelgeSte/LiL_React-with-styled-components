import './App.css';
import ProductDetails from './examples/ProductDetails';
import Parent from './examples/Parent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './examples/ProductList';

const App = () => {
  return (
    <div>
      {/* <ProductDetails /> */}
      <ProductList />
      {/* <Parent /> */}
    </div>
  );
};

export default App;
