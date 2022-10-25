import React from 'react'
import { TextField, Button, InputLabel, Select, MenuItem, Paper, Box, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Participant: React.FC = () => {
  const roles = ["Cronometrista", "Observador Parapsíquico", "Energizador 1", "Energizador 2", "Energizador 3", "Monitor 1", "Monitor 2", "Acoplamento 1", "Acoplamento 2", "Acoplamento 3", "Acoplamento 4", "Acoplamento 5", "Acoplamento 6", "Acoplamento 7", "Acoplamento 8", "Acoplamento 9", "Acoplamento 10", "Acoplamento 11", "Acoplamento 12"]

  return (
    <Paper sx={{ p: 2, my: 2 }} elevation={10}>
      <TextField
        label="Nome Completo"
        variant="outlined"
        type="text"
        placeholder='Nome Completo'
        sx={{ my: 2 }}
      />
      <TextField
        label="E-mail"
        variant='outlined'
        type="email"
        sx={{ my: 2 }}
      />

      <TextField
        label="Número da DIP"
        variant='outlined'
        type={"number"}
        disabled
        sx={{ my: 2 }}
      />

      <Box sx={{ minWidth: 40, my: 2 }}>
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
        color="error"
      >
        <DeleteIcon />
      </Button>
    </Paper>
  )
}

export default Participant