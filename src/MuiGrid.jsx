import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#757de8",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Item>Item 1</Item>
        </Grid>
        <Grid item xs={12} md={4} >
          <Item>Item 2</Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>Item 3</Item>
        </Grid>
        <Grid item xs={12} md={2}>
          <Item>Item 4</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Item 5</Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>Item 6</Item>
        </Grid>
        <Grid item xs={12} md={2}>
          <Item>Item 7</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Item 8</Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>Item 9</Item>
        </Grid>
        <Grid item xs={12} md={2}>
          <Item>Item 10</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Item 11</Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>Item 12</Item>
        </Grid>
      </Grid>

  );
}
