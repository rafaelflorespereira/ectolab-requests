import React, { useState } from "react";
import { FormControl, TextField, Paper, Container, Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Participant from "../../components/Participant";
import { IParticipant, defaultParticipant } from "../../typings/typing";

const DIP: React.FC = () => {
  const [dipParticipants, setDipParticipants] = useState<IParticipant[]>([]);

  const subParticipant = (index: number) => {
    dipParticipants?.splice(index, 1)
    console.log("dipParticipants", dipParticipants)
    setDipParticipants([...dipParticipants]);
  };

  const updateParticipants = (participant: IParticipant, index: number) => {
    dipParticipants[index] = participant
    setDipParticipants([...dipParticipants])
  }

  const addParticipant = () => {
    setDipParticipants([...dipParticipants, defaultParticipant])
  }

  return (
    <Container>
      <Paper elevation={10}>
        <h1>Inscrição da DIP</h1>
        <FormControl>
          <TextField label="Data" variant="outlined" />
          <TextField label="Cidade" variant="outlined" />
          <TextField label="Local" variant="outlined" />
          <TextField label="Número da DIP" variant="outlined" type={"number"} />
        </FormControl>

        <h1>Participantes da DIP</h1>
        <Button
          variant="contained"
          onClick={() => addParticipant()}
          endIcon={<AddCircleIcon />}
        >
          Adicionar
        </Button>
        {dipParticipants?.map((participant, index) =>
          <div key={index}>
            <Participant
              {...participant}
              index={index}
              updateParticipant={(param: IParticipant, index: number) => updateParticipants(param, index)}
              removeParticipant={(id: number) => subParticipant(id)}
            />
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default DIP;
