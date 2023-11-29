import React, { useEffect, useState } from 'react';
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {Routes,Route,Link, useNavigate} from "react-router-dom"
import TeamCard1 from './Teamcard1'
import TeamCard2 from './Teamcard2'
import TeamCard3 from './Teamcard3'
import Barchart from '../Barchart/TeamBarchart';
import Pichart from '../Pichart/TeamPichart';
import Dataframe from './Dataframe';

import { useParams } from 'react-router-dom';


const Teampage =()=>{

    const [jsonData ,setJsonData] = useState();
    const [teamCount ,setTeamCount] = useState();
    const navigate = useNavigate()
    const {team_id} = useParams();

    const handleChange = async(event) => {
        
        const selectedValue = event.target.value;

        navigate(`/Teampage/${selectedValue}`);
    }
    useEffect(() => {
        async function fetchData() {
          try {
            const [response, teamcount] = await Promise.all([
                axios.get(`https://gachongo.shop/api/amount?teamId=${team_id}`),
                axios.get(`https://gachongo.shop/api/amount/team/all`)
              ]);
            console.log("team",teamcount.data.teams.length);
            
            setTeamCount(teamcount.data.teams.length);
            setJsonData(response.data);

          } catch (error) {
            console.error("데이터를 불러오는 중 오류 발생:", error);
          }
        }
        fetchData();
      }, [team_id]);
    if (!jsonData || !teamCount) {
    return <div>Loading...</div>; // You can customize the loading indicator
    }
    const teamOptions = Array.from({ length: teamCount }, (_, index) => index + 1);

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
            {teamOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <div className='Graph0' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div className='Total'><TeamCard1 myProp = {jsonData.total}/></div>
        <div className='Today'><TeamCard2 myProp = {jsonData.amount}/></div>
        <div className='D-Day'><TeamCard3/></div>
        </div>
        <div className='Graph1' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='barGraph'>barGraph <Barchart myProp = {jsonData.amountByMonthList} /> </div>
        <div className='piGraph'>piGraph<Pichart myProp = {jsonData.category}/></div>
        </div>
        <div className='Dataframe'>
            <Dataframe/>
        </div>
        </div>
    )
}
export default Teampage;