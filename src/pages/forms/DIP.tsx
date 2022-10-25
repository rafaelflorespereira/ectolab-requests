import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Paper,
  Container,
  Button
} from "@mui/material";

import {
  IParticipant,
  defaultParticipant,
  defaultDip,
  DipTypes,
  DipType
} from "../../typings/typing";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Participant from "../../components/Participant";

const DIP: React.FC = () => {
  const [dip, setDip] = useState<DipType>(defaultDip)
  const [dipParticipants, setDipParticipants] = useState<IParticipant[]>([]);

  const subParticipant = (index: number) => {
    dipParticipants?.splice(index, 1)
    setDipParticipants([...dipParticipants]);
  };

  const updateParticipants = (participant: IParticipant, index: number) => {
    dipParticipants[index] = participant
    setDipParticipants([...dipParticipants])
  }

  const addParticipant = () => {
    setDipParticipants([...dipParticipants, defaultParticipant])
  }

  const handleDip = (value: string, type: DipTypes) => {
    const newDip = dip
    newDip[type] = value
    setDip({ ...newDip })
  }

  return (
    <Container sx={{ minWidth: 120, p: 10 }}>
      <Paper sx={{ p: 4 }} elevation={10}>

        <h2>Inscrição da DIP</h2>

        <TextField
          label="Data"
          variant="outlined"
          value={dip.date}
          onChange={(event) => handleDip(event.target.value, "date")}
        />
        <TextField
          label="Cidade"
          variant="outlined"
          value={dip.city}
          onChange={(event) => handleDip(event.target.value, "city")} />
        <TextField
          label="Local"
          variant="outlined"
          value={dip.place}
          onChange={(event) => handleDip(event.target.value, "place")} />
        <TextField
          label="Número da DIP"
          variant="outlined" 
          type={"number"}
          value={dip.dipNumber} onChange={(event) => handleDip(event.target.value, "dipNumber")} />
        <h2>Participantes da DIP</h2>

        {dipParticipants?.map((participant, index) =>
          <div key={index}>
            <Participant
              {...participant}
              dipNumber={dip.dipNumber.toString()}
              index={index}
              updateParticipant={(param: IParticipant, index: number) => updateParticipants(param, index)}
              removeParticipant={(id: number) => subParticipant(id)}
            />
          </div>
        )}

        <Button
          variant="contained"
          onClick={() => addParticipant()}
          endIcon={<AddCircleIcon />}
        >
          Adicionar
        </Button>
      </Paper>
    </Container>
  );
};

export default DIP;
