import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './Component/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider>
  <ThemeContextProvider>
  <App />
  </ThemeContextProvider>
  </ChakraProvider>
  </BrowserRouter>
);
