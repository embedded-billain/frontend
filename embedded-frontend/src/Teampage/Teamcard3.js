import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Card3() {
    
const currentDate = new Date();
const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
let daysDifference = lastDayOfMonth - currentDate.getDate();
if (daysDifference == 0)
{
    daysDifference = 'DAY';
}
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          DEADLINE
        </Typography>
        <Typography variant="h5" component="div">
          D-{daysDifference}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
