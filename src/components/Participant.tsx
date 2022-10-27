import React, { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Box,
  FormControl,
} from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CustomPaginationActionsTable from "./ParticipantTable"
import { IParticipant } from '../typings/typing';

const defaultParticipant: IParticipant = { name: "name name", email: "email", role: "role", dipNumber: "1" }

const Participant: React.FC = () => {
  const roles = ["Cronometrista", "Observador Parapsíquico", "Energizador 1", "Energizador 2", "Energizador 3", "Monitor 1", "Monitor 2", "Acoplamento 1", "Acoplamento 2", "Acoplamento 3", "Acoplamento 4", "Acoplamento 5", "Acoplamento 6", "Acoplamento 7", "Acoplamento 8", "Acoplamento 9", "Acoplamento 10", "Acoplamento 11", "Acoplamento 12"]
  const [participants, setParticipants] = useState<IParticipant[]>([])
  const handleParticipant = () => {
    setParticipants(prevState => [...prevState, defaultParticipant])
  }
  return (
    <Container sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <Paper sx={{ minWidth: 80, maxWidth: 180, p: 4 }} elevation={10}>
        <h1>Dip: #</h1>
        <TextField
          label="Participante"
          variant="outlined"
          type="text"
          placeholder='Participante'
          sx={{ my: 1 }}
        />
        <TextField
          label="E-mail"
          variant='outlined'
          type="email"
          sx={{ my: 1 }}
        />

        <Box sx={{ minWidth: 40, my: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Função</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Função"
              sx={{ minWidth: 30 }}
            >
              {roles?.map((role, id) => <MenuItem key={id} value={role} selected>{role}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          color={"success"}
          type="submit"
          sx={{ my: 1 }}
          endIcon={<AddCircleIcon />}
          onClick={handleParticipant}
          fullWidth
        >
          Adicionar
        </Button>
      </Paper>

      <Paper elevation={10}>
        <CustomPaginationActionsTable />
      </Paper>
    </Container>
  )
}

export default Participant