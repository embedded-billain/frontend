import React, { useEffect, useState } from 'react';
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {Routes,Route,Link, useNavigate} from "react-router-dom"
import LoadingAnimation from '../Loading/Loading';
import { useParams } from 'react-router-dom';
// import { DropzoneArea } from 'material-ui-dropzone';
import DragDropImageUploader from './Dragdrop';

const Uploadpage =()=>{

    const [jsonData ,setJsonData] = useState();
    const [teamCount ,setTeamCount] = useState();
    const [selectedTeam, setSelectedTeam] = useState(1);

    const handleChange = async(event) => {
        
        const selectedValue = event.target.value;
        // navigate(`/Teampage/${selectedValue}`);
        setSelectedTeam(selectedValue);
    }
    useEffect(() => {
        async function fetchData() {
          try {
            const [response, teamcount] = await Promise.all([
                axios.get(`https://gachongo.shop/api/amount?teamId=1`),
                axios.get(`https://gachongo.shop/api/amount/team/all`),
              ]);
            console.log("team",teamcount.data.teams.length);
            
            await setTeamCount(teamcount.data.teams.length);
            await setJsonData(response.data);

          } catch (error) {
            console.error("데이터를 불러오는 중 오류 발생:", error);
          }
        }
        fetchData();
      }, []);
    if (!teamCount) {
    return (
		<div>
			<div style={{ fontSize: '24px', padding: '20px 0 0 0' }}>Loading...</div>
			<div><LoadingAnimation/></div>
		</div>)
    }
    const teamOptions = Array.from({ length: teamCount }, (_, index) => index+1);

    return(
        <div style={{ minHeight: '80vh'}}>팀선택
        <div align = "center">
        </div>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedTeam}
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
        <DragDropImageUploader myProp={selectedTeam} />
        {/* <DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText={"Drag and drop an image here or click"}
            onChange={(files) => console.log('Files:', files)}
        /> */}
        </div>
    )
}
export default Uploadpage;