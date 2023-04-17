import { useState } from 'react'
import { Grid, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiGrid from './MuiGrid'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <MuiGrid />
      </ThemeProvider>
   
      
  )
}

export default App
