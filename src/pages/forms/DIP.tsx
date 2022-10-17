import React, { useState } from 'react'
import { FormControl, TextField, Paper, Container } from '@mui/material';
import Participant from "../../components/Participant"
import { iParticipant } from '../../typings/typings';

const DIP = () => {
  const [dipParticipants, setDipParticipants] = useState<iParticipant[]>()

  const handleParticipant = (participant: iParticipant) => {
    dipParticipants?.push(participant)
    setDipParticipants(dipParticipants)
  }

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
          return <Participant addParticipant={handleParticipant} />
        })}
      </Paper>
    </Container>
  )
}

export default DIP