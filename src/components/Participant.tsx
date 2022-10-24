import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { ParticipantTypes, ParticipantPropsTypes, IParticipant } from '../typings/typing';

const Participant: React.FC<IParticipant> = ({ ...defaultParticipant }) => {
  // const [participant, setParticipant] = useState(defaultParticipant)

  // const handleParticipant = (value: string, type: ParticipantTypes) => {
  //   const newParticipant: React.SetStateAction<ParticipantPropsTypes> = participant
  //   newParticipant[type] = value
  //   setParticipant(newParticipant)
  // }

  return (
    <>
      <h1>Participante</h1>
      <TextField
        label="Nome"
        variant="outlined"
        value={defaultParticipant.name}
      />
      <TextField
        label="E-mail"
        variant='outlined'
        value={defaultParticipant.email}
      />
      <TextField
        label="Função"
        variant='outlined'
        value={defaultParticipant.role}
      />
      <TextField
        label="Número da DIP"
        variant='outlined'
        type={"number"}
        value={defaultParticipant.dipNumber}
      />
      {/* <button onClick={() => defaultParticipant.removeParticipant}>add</button> */}
    </>
  )
}

export default Participant