import React, { useState } from 'react'
import { FormControl, TextField, Paper, Container } from '@mui/material';
import Participant from "../../components/Participant"

type Participant = {
  name: string,
  email: string,
}

const DIP = () => {
  const [dipParticipants, setDipParticipants] = useState<Participant[]>()

  return (
    <Container>
      <Paper elevation={10}>
        <h1>Inscrição da DIP</h1>
        <FormControl>
          <TextField label="Data" variant="outlined" />
          <TextField label="Cidade" variant='outlined' />
          <TextField label="Local" variant='outlined' />
          <TextField label="Número da DIP" variant='outlined' type={"number"} />
        </FormControl>
        <h1>Participantes da DIP</h1>
        {dipParticipants?.map(participant => {
          return <Participant />
        })}
      </Paper>
    </Container>
  )
}

export default DIP