import React, { useState } from 'react'
import { TextField, Button, InputLabel, Select, MenuItem, Paper, Box, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ParticipantPropsTypes, ParticipantTypes } from '../typings/typing';

const Participant: React.FC<ParticipantPropsTypes> = ({ ...defaultParticipant }) => {
  const [participant, setParticipant] = useState(defaultParticipant)
  const roles = ["Cronometrista", "Observador Parapsíquico", "Energizador 1", "Energizador 2", "Energizador 3", "Monitor 1", "Monitor 2", "Acoplamento 1", "Acoplamento 2", "Acoplamento 3", "Acoplamento 4", "Acoplamento 5", "Acoplamento 6", "Acoplamento 7", "Acoplamento 8", "Acoplamento 9", "Acoplamento 10", "Acoplamento 11", "Acoplamento 12"]

  const handleParticipant = (value: string, type: ParticipantTypes) => {
    const newParticipant: React.SetStateAction<ParticipantPropsTypes> = participant
    newParticipant[type] = value
    setParticipant({ ...newParticipant }) //when destructuring it creates an entire new object so it doesnt passes it pointer
    defaultParticipant.updateParticipant({ ...newParticipant }, defaultParticipant.index)
  }

  return (
    <Paper sx={{ p: 2, my: 2 }} elevation={10}>
      <h1>Participante #{defaultParticipant.index}</h1>
      <TextField
        label="Nome Completo"
        variant="outlined"
        type="text"
        placeholder='Nome Completo'
        value={participant.name}
        sx={{ my: 2 }}
        onChange={(event) => handleParticipant(event?.target.value, 'name')}
      />
      <TextField
        label="E-mail"
        variant='outlined'
        type="email"
        value={participant.email}
        sx={{ my: 2 }}
        onChange={(event) => handleParticipant(event?.target.value, 'email')}
      />

      <TextField
        label="Número da DIP"
        variant='outlined'
        type={"number"}
        value={participant.dipNumber}
        disabled
        sx={{ my: 2 }}
        onChange={(event) => handleParticipant(event?.target.value, 'dipNumber')}
      />

      <Box sx={{ minWidth: 40, my: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Função</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={participant.role}
            label="Função"
            onChange={(event) => handleParticipant(event?.target.value, 'role')}
            sx={{ minWidth: 30 }}
          >
            {roles?.map((role, id) => <MenuItem key={id} value={role} selected>{role}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>

      <Button
        variant="contained"
        color="error"
        onClick={() => defaultParticipant.removeParticipant(defaultParticipant.index)} >
        <DeleteIcon />
      </Button>
    </Paper>
  )
}

export default Participant