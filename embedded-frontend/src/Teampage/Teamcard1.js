import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Card1(props) {
    const received_total_count = props.myProp;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          TOTAL
        </Typography>
        <Typography variant="h5" component="div">
          {received_total_count}
        </Typography>
      </CardContent>
    </Card>
  );
}
