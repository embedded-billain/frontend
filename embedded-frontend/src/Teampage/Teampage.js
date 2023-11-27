import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {Routes,Route,Link, useNavigate} from "react-router-dom"
import TeamCard1 from './Teamcard1'
import TeamCard2 from './Teamcard2'
import TeamCard3 from './Teamcard3'
import Barchart from '../Barchart/Barchart';
import Pichart from '../Pichart/Pichart';
import Dataframe from './Dataframe';

import { useParams } from 'react-router-dom';

const Teampage =()=>{
    const navigate = useNavigate()
    const {team_id} = useParams();

    const handleChange = (event) => {
        const selectedValue = event.target.value;

        navigate(`/Teampage/${selectedValue}`);
      }
      const total_count = 9;
      const total_amount = 10000;

    return(
        <div>
        <div>{team_id}</div>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={team_id}
            label="Team"
            onChange={(event) => handleChange(event)}
        >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
        </Select>
        </FormControl>
        <div className='Graph0' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div className='Total'><TeamCard1 myProp = {total_count}/></div>
        <div className='Today'><TeamCard2 myProp = {total_amount}/></div>
        <div className='D-Day'><TeamCard3/></div>
        </div>
        <div className='Graph1' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='barGraph'>barGraph <Barchart /> </div>
        <div className='piGraph'>piGraph<Pichart /></div>
        </div>
        <div className='Dataframe'>
            <Dataframe/>
        </div>
        </div>
    )
}
export default Teampage;