import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types(props) {
    const team_id = props.myProp;
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h3" style={{ color: '#1976D2', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        Welcome to Team {team_id}
      </Typography>
    </Box>
  );
}

