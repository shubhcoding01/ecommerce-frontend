import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function App() {
  return (
    <div className="p-20">
      <h1 className='text-red-500 font-bold text-5xl'>code with shubhcoding</h1>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <AddShoppingCartIcon style={{ fontSize: 40, color: 'blue' }} />
    </div>
  );
}

export default App;
