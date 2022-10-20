import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { iParticipant, participantTypes, participantPropsTypes, defaultParticipant} from '../typings/typings';

const Participant: React.FC<participantPropsTypes> = ( props ) => {
  const [participant, setParticipant] = useState<iParticipant>(defaultParticipant)

  const handleParticipant = (value: string, type: participantTypes) => {
    const newParticipant:iParticipant = participant
    newParticipant[type] = value
    setParticipant(newParticipant)
  }

  return (
    <>
        <h1>Participante</h1>
        <TextField label="Nome" variant="outlined" value={participant.name} onChange={(event: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>) => handleParticipant(event.currentTarget.value, 'name')} />
        <TextField label="E-mail" variant='outlined' value={participant.email} onChange={(event: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>) => handleParticipant(event.currentTarget.value, 'email')}/>
        <TextField label="Função" variant='outlined' value={participant.role} onChange={(event: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>) => handleParticipant(event.currentTarget.value, 'role')}/>
        <TextField label="Número da DIP" variant='outlined' type={"number"} value={participant.dipNumber} onChange={(event: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>) => handleParticipant(event.currentTarget.value, 'dipNumber')}/>
        <button onClick={() => props.addParticipant(participant)}>add</button>
    </>
  )
}

export default Participant