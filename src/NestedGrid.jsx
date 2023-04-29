import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, CardMedia } from '@mui/material';

export default function NestedGrid() {
  return (

      <Grid container spacing={2}>
        <Grid container item xs={4} direction="column" alignItems="center" justifyContent="space-evenly">
            <Grid item >
                <CardMedia
                    component="img"
                    image="src/assets/avatar-man.png"
                />
            </Grid>
            <Grid item >
                <Typography variant="h4">Corey Mathews</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">@CoreyMathews123</Typography>
            </Grid>
            <Grid item>
                <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Subscribe</Button>
            </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignItems="center" justifyContent="space-evenly">
            <Grid item>
                <CardMedia
                    component="img"
                    image="src/assets/avatar-man.png"
                />
            </Grid>
            <Grid item spacing={1}>
                <Typography variant="h4">Shawn Hunter</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">@ShawnHunter123</Typography>
            </Grid>
            <Grid item>
                <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Subscribe</Button>
            </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignItems="center" justifyContent="space-evenly">
            <Grid item spacing={1}>
                <CardMedia
                    component="img"
                    image="src/assets/avatar-man.png"
                />
            </Grid>
            <Grid item spacing={1}>
                <Typography variant="h4">Eric Mathews</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">@EricMathews123</Typography>
            </Grid>
            <Grid item>
                <Button sx={{bgcolor: "#8bdee4", width: "100%"}} variant="contained">Subscribe</Button>
            </Grid>
        </Grid>
      </Grid>
  );
}