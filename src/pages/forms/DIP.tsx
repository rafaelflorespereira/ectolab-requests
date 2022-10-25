import React, { useEffect, useState } from "react";
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
  const [showParticipants, setShowParticipants] = useState<boolean>(false)


  // simple validation checking only if the form is not empty
  const isDipValid = () => {
    for (const dipProperty in dip) {
      if (dipProperty) {
        setShowParticipants(true)
      }
    }
  }

  const handleDipSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    isDipValid()
  }

  const handleDip = (value: string, type: DipTypes) => {
    const newDip = dip
    newDip[type] = value
    setDip({ ...newDip })
  }

  return (
    <Container sx={{ minWidth: 120, p: 10 }}>
      <form onSubmit={handleDipSubmit}>
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
            value={dip.dipNumber} onChange={(event) => handleDip(event.target.value, "dipNumber")}
          />
          <Button
            variant="contained"
            color={"success"}
            type="submit"
            endIcon={<AddCircleIcon />}
          >
            Adicionar
          </Button>
        </Paper>
      </form>
      {showParticipants ?
        <Participant />
        : <></>
      }
    </Container>
  );
};

export default DIP;
