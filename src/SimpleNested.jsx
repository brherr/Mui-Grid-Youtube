import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function SimpleNested() {
  return (

      <Grid container spacing={2}>
        <Grid container item xs={4} spacing={2} direction="column">
            <Grid item >
                <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
            </Grid>
            <Grid item >
                <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
            </Grid>
            <Grid item >
                <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
            </Grid>
        </Grid>
        <Grid container item xs={4} spacing={2} direction="column">
            <Grid container item xs={4} spacing={2}>
                <Grid item xs={6} >
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
            </Grid>
            <Grid container item xs={4} spacing={2}>
                <Grid item xs={6} >
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
            </Grid>
            <Grid container item xs={4} spacing={2}>
                <Grid item xs={6} >
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid container item xs={4} spacing={2} direction="column">
            <Grid container item xs={4} spacing={2}>
                <Grid item xs={6} >
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
            </Grid>
            <Grid container item xs={4} spacing={2}>
                <Grid item xs={3} >
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3} >
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
            </Grid>
            <Grid container item xs={4} spacing={2}>
                <Grid item xs={12}>
                    <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Button</Button>
                </Grid>
            </Grid>
        </Grid>
        
      </Grid>
  );
}