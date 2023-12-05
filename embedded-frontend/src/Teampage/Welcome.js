import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types(props) {
    const team_id = props.myProp;
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      
      <Typography variant="h3" style={{ color: '#ff7961' }}>
        Welcome to Team {team_id}
      </Typography>
      
    
    </Box>
  );
}
