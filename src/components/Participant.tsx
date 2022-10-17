import React, { useState } from 'react'
import { FormControl, TextField } from '@mui/material';
import { iParticipant } from '../typings/typings';
const defaultParticipant = {
  name: "",
  email: "",
  role: "",
  dipNumber: 0
}
const Participant = (addParticipant: any) => {
  const [participant, setParticipant] = useState<iParticipant>(defaultParticipant)
  const handleParticipant = (value, value: string) => {
    switch (value) {
      case value == "name":
        setParticipant({ value: })
        break;

      default:
        break;
    }

    setParticipant
  }
  return (
    <>
      <FormControl>
        <h1>Participante</h1>
        <TextField label="Nome" variant="outlined" value={participant.name} onChange={(event: HTMLInputElement) => handleParticipant(event.target.value, 'name')} />
        <TextField label="E-mail" variant='outlined' value={participant.email} />
        <TextField label="Função" variant='outlined' value={participant.role} />
        <TextField label="Número da DIP" variant='outlined' type={"number"} value={participant.dipNumber} />
        <button onClick={addParticipant(participant)}>add</button>
      </FormControl>
    </>
  )
}

export default Participant