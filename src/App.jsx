import { useState } from 'react'
import { Grid, Box, Container } from '@mui/material'
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
        <Container sx={{ bgcolor: "#3f51b5", height: "80vh", paddingY: "20px", marginY: "80px"}}>
          <MuiGrid />
        </Container>
    </ThemeProvider>


  )
}

export default App
