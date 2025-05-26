import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import customeTheme from './theme/customeTheme';


function App() {
  return (
    

      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar />
        </div>
        
      </ThemeProvider>
      
      

    
  );
}

export default App;
