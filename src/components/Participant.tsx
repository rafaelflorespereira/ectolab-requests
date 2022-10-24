import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ParticipantPropsTypes, ParticipantTypes } from '../typings/typing';

const Participant: React.FC<ParticipantPropsTypes> = ({ ...defaultParticipant }) => {
  const [participant, setParticipant] = useState(defaultParticipant)

  const handleParticipant = (value: string, type: ParticipantTypes) => {
    const newParticipant: React.SetStateAction<ParticipantPropsTypes> = participant
    newParticipant[type] = value
    setParticipant({ ...newParticipant }) //when destructuring it creates an entire new object so it doesnt passes it pointer
    defaultParticipant.updateParticipant({ ...newParticipant }, defaultParticipant.index)
  }

  return (
    <>
      <h1>Participante #{defaultParticipant.index}</h1>
      <TextField
        label="Nome Completo"
        variant="outlined"
        type="text"
        placeholder='Nome Completo'
        value={participant.name}
        onChange={(event) => handleParticipant(event?.target.value, 'name')}
      />
      <TextField
        label="E-mail"
        variant='outlined'
        type="email"
        value={participant.email}
        onChange={(event) => handleParticipant(event?.target.value, 'email')}
      />
      <TextField
        type="text"
        label="Função"
        placeholder='Função'
        variant='outlined'
        value={participant.role}
        onChange={(event) => handleParticipant(event?.target.value, 'role')}
      />
      <TextField
        label="Número da DIP"
        variant='outlined'
        type={"number"}
        value={participant.dipNumber}
        onChange={(event) => handleParticipant(event?.target.value, 'dipNumber')}
      />
      <Button variant="contained" onClick={() => defaultParticipant.removeParticipant(defaultParticipant.index)} >
        <DeleteIcon />
      </Button>
    </>
  )
}

export default Participant