import { useState } from 'react'
import { Grid, Box, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import MuiGrid from './MuiGrid'
import Single from './Single';
import NestedGrid from './NestedGrid';
import SimpleNested from './SimpleNested';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  // background-color: #4c4177;
  // background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Container sx={{ bgcolor: "#4c4177", backgroundImage: "linear-gradient(315deg, #4c4177 0%, #2a5470 74%)", height: "90vh", paddingY: "20px", marginY: "80px"}}>
          {/* <MuiGrid /> */}
          {/* <Single /> */}
          {/* <NestedGrid /> */}
          <SimpleNested />
        </Container>
    </ThemeProvider>


  )
}

export default App
