import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';


const fetchTeams = async () => {
  try {
    const response = await fetch('https://dongsseop2api.shop/teams/info'); 
    const data = await response.json();
    console.log("data",data);
    
    return data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
};

const createTeam = async (team) => {
  try {
    const response = await fetch('https://dongsseop2api.shop/teams/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ team_name: team.teamName, description: team.description}),
    });
    const responseBody = await response.text();
    return responseBody; 
  } catch (error) {
    console.error('Error creating team:', error);
    return null;
  }
};

const deleteTeam = async (teamid) => {
  try {
    const response = await fetch(`https://dongsseop2api.shop/teams/${teamid}`, {
      method: 'DELETE',
    }); 
    return response;
  } catch (error) {
    console.error('Error deleting team:', error);
    return [];
  }
};


const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [newTeamInfo, setNewTeamInfo] = useState({});
  const [editTeamInfo, setEditTeamInfo] = useState({});
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamDescription, setnewTeamDescription] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDuplicateError, setIsDuplicateError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const teamData = await fetchTeams();
    setTeams(teamData);
  }
  const handleCreateTeam = async () => {
    const response = await createTeam(newTeamInfo);
    console.log("결과",response);
    if(response ==="False")
      setIsDuplicateError(true);
    else{

    setNewTeamName('');
    setnewTeamDescription('');
    setIsDuplicateError(false);
    closeDialog();
    fetchData();
    }
  };

  const handleEditTeam = (team) => {
    setEditTeamInfo(team);
    setIsEditDialogOpen(true);
  };
  
  // 수정 다이얼로그 닫기
  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditTeamInfo({});
  };
  const handleUpdateTeam = async (team) => {
    try {
      const response = await fetch(`https://dongsseop2api.shop/teams/${team.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team_name: team.teamName, description: team.description}),
      });
      closeEditDialog();
      fetchData();
      return response;
    } catch (error) {
      console.error('Error deleting team:', error);
      return [];
    }
  
  };

  const handleDeleteTeam = async (team) => {
    const shouldDelete = window.confirm(`정말로 ${team.teamName} 팀을 삭제하시겠습니까?`);
    
    if(shouldDelete)
    {
      await deleteTeam(team.id);
      const updatedTeams = teams.filter((t) => t.id !== team.id);
      setTeams(updatedTeams);
    }

    console.log('Delete team:', team);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setNewTeamInfo({});
    setIsDuplicateError(false);
    setIsDialogOpen(false);
  };
  return (
    <div>
      <Typography variant="h5" style={{ marginTop: '20px', marginBottom: '20px' }}>
        팀 목록
      </Typography>
      <div style={{ display: 'inline-block' }}>
        <Button variant="contained" color="primary" onClick={openDialog} style={{ marginBottom: '20px' }}>
          새 팀 생성
        </Button>
      </div>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>새 팀 생성</DialogTitle>
        <DialogContent>
          <div>
          <TextField
            label="팀 이름"
            variant="outlined"
            value={newTeamInfo.teamName}
            style={{ marginTop: '10px' }}
            onChange={(e) => setNewTeamInfo({...newTeamInfo, teamName: e.target.value})}
          />
          </div>
          <div>
          <TextField
            label="팀 설명"
            variant="outlined"
            value={newTeamInfo.description}
            style={{ marginTop: '20px' }}
            onChange={(e) => setNewTeamInfo({ ...newTeamInfo, description: e.target.value })}
          />
          </div>
          {isDuplicateError && (
            <DialogContentText style={{ color: 'red', fontSize: '14px' }}>
              중복된 팀 이름입니다. 다른 이름을 입력해주세요.
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="secondary">
            취소
          </Button>
          <Button onClick={() => handleCreateTeam(newTeamInfo)} color="primary">
            생성
          </Button>
        </DialogActions>
      </Dialog>
      {teams.length === 0 ? (
        <p>현재 생성된 팀이 없습니다. 팀을 생성해주세요.</p>
      ) : (
        <div>
          {teams.map((team) => (
            <div key={team.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ flex: '1' }}>{team.teamName}</div>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '5px' }}
                startIcon={<EditIcon />}
                onClick={() => handleEditTeam(team)}
              >
                수정
              </Button>
              <Button 
                variant="outlined" startIcon={<DeleteIcon />} style={{ marginRight: '250px',color: 'red', borderColor: 'red' }}
                onClick={() => handleDeleteTeam(team)}
              >
                삭제
              </Button>
            </div>
          ))}
        </div>
      )}
      <Dialog open={isEditDialogOpen} onClose={closeEditDialog}>
        <DialogTitle>팀 수정</DialogTitle>
        <DialogContent>
          <div>
          <TextField
            label="팀 이름"
            variant="outlined"
            value={editTeamInfo.teamName}
            style={{ marginTop: '10px' }}
            onChange={(e) => setEditTeamInfo({ ...editTeamInfo, teamName: e.target.value })}
          />
          </div>
          <div>
          <TextField
            label="팀 설명"
            variant="outlined"
            value={editTeamInfo.description}
            style={{ marginTop: '20px' }}
            onChange={(e) => setEditTeamInfo({ ...editTeamInfo, description: e.target.value })}
          />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog} color="secondary">
            취소
          </Button>
          <Button onClick={() => handleUpdateTeam(editTeamInfo)} color="primary">
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      
  );
};

export default TeamList;
