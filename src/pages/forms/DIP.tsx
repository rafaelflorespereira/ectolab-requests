import React, { useState } from "react";
import { FormControl, TextField, Paper, Container, Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Participant from "../../components/Participant";
import { IParticipant } from "../../typings/typing";

const defaultParticipant: IParticipant = {
  name: " ",
  email: " ",
  role: " ",
  dipNumber: " "
}

const DIP: React.FC = () => {
  const [dipParticipants, setDipParticipants] = useState<IParticipant[]>([]);

  const subParticipant = (index: number) => {
    const removedParticipants = dipParticipants?.splice(index, -1)
    setDipParticipants(removedParticipants);
  };

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
            <h1 >{index}</h1>
            <Participant
              {...participant}
              // removeParticipant={subParticipant(index)}
            />
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default DIP;
