import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function Single() {
  return (
    // background-color: #44b09e;
    // background-image: linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%);

      <Grid container 
    //   spacing={1}
      >
        <Grid item xs={1}>
          <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
        </Grid>
      </Grid>
  );
}