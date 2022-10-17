import React from 'react'
import { FormControl, TextField } from '@mui/material';

const Participant = () => {
  return (
    <>
      <FormControl>
        <h1>Participante</h1>
        <TextField label="Nome" variant="outlined" />
        <TextField label="E-mail" variant='outlined' />
        <TextField label="Função" variant='outlined' />
        <TextField label="Número da DIP" variant='outlined' type={"number"} />
      </FormControl>
    </>
  )
}

export default Participant