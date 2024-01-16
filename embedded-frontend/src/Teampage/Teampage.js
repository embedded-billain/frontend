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
import LoadingAnimation from '../Loading/Loading';
import Test from './test';
import Welcome from './Welcome';
import { useParams } from 'react-router-dom';


const Teampage =()=>{

    const [jsonData ,setJsonData] = useState();
    const [teamCount ,setTeamCount] = useState();
    const [teamAmount ,setTeamAmount] = useState();
    const [teamCategory ,setTeamCategory] = useState();
    const [billDataframe ,setBilldataframe] = useState();
    const navigate = useNavigate()
    const {team_id} = useParams();

    const handleChange = async(event) => {
        
        const selectedValue = event.target.value;
        // navigate(`/Teampage/${selectedValue}`);
        window.location.href = `/Teampage/${selectedValue}`;
    }
    useEffect(() => {
        async function fetchData() {
          try {
            const [teamcount, response, team_amount, team_category, billdataframe] = await Promise.all([
                axios.get(` https://dongsseop2api.shop/amount/summary`),
                axios.get(`https://dongsseop2api.shop/info/${team_id}`),
                axios.get(`https://dongsseop2api.shop/amount/${team_id}`),
                axios.get(`https://dongsseop2api.shop/category/${team_id}`),
                axios.get(`https://gachongo.shop/api/bill?teamId=${team_id}`)

                //기존 DB
                // axios.get(`https://gachongo.shop/api/amount?teamId=${team_id}`),
                // axios.get(`https://gachongo.shop/api/amount/team/all`),
                // axios.get(`https://gachongo.shop/api/bill?teamId=${team_id}`)
              ]);
            console.log("team",teamcount.data.teams.length);
            
            await setTeamCount(teamcount.data.teams.length);
            await setJsonData(response.data);
            await setTeamAmount(team_amount.data);
            await setTeamCategory(team_category.data);
            await setBilldataframe(billdataframe.data)
            console.log("data", billDataframe)
            console.log('team count',teamAmount[0])
            
            // console.log("-----------")
            // console.log(team_id)
            // console.log("12", billdataframe.data)

          } catch (error) {
            console.error("데이터를 불러오는 중 오류 발생:", error);
          }
        }
        fetchData();
      }, [team_id]);
    if (!jsonData || !teamCount) {
    return (
		<div>
			<div style={{ fontSize: '24px', padding: '20px 0 0 0' }}>Loading...</div>
			<div><LoadingAnimation/></div>
		</div>)
    }
    const teamOptions = Array.from({ length: teamCount }, (_, index) => index+1);

    return(
        <div>
        {/* <div style={{  marginTop: '10px' ,marginBottom: '10px' }}> */}
        <div style={{ width: '100%', maxWidth: 500, textAlign: 'center', margin: '10px auto' }}>
          <Welcome myProp={team_id} />
        </div>
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
        <div className='Graph1' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', paddingLeft: '50px',marginTop: '20px',marginBottom:'20px' }}>
        <div className='barGraph'>최근 6개월 정산 금액 <Barchart myProp = {teamAmount} /> </div>
        <div className='piGraph'>카테고리별 정산 금액<Pichart myProp = {teamCategory}/></div>
        </div>
        <div className='Dataframe'style={{ marginBottom: '0px', border: '1px solid #ccc', backgroundColor: '#f0f0f0',padding: '10px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Test myProp = {billDataframe} />
            {/* <Dataframe myProp = {billDataframe}/> */}
        </div>
        </div>
    )
}
export default Teampage;