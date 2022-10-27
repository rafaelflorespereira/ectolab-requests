import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Paper,
  Container,
  Button,
  Box,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

import {
  defaultDip,
  DipTypes,
  DipType
} from "../../typings/typing";

import AddCircleIcon from '@mui/icons-material/AddCircle';

const DIP: React.FC = () => {
  const [dip, setDip] = useState<DipType>(defaultDip)
  const cities = ["São Paulo", "Foz do Iguaçu", "Curitiba"]
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
    // event.preventDefault()
    isDipValid()
  }

  const handleDip = (value: string, type: DipTypes) => {
    const newDip = dip
    newDip[type] = value
    setDip({ ...newDip })
  }

  return (
    <Container sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <Paper sx={{ minWidth: 80, maxWidth: 220, p: 4 }} elevation={10}>
        {/* !Todo: change to typographic HTML H1 element  */}
        <h2>DIP</h2>
        <TextField
          label="Número da DIP"
          variant="outlined"
          type={"number"}
          sx={{ my: 1 }}
          value={dip.dipNumber} onChange={(event) => handleDip(event.target.value, "dipNumber")}
        />
        <TextField
          label="Cidade"
          variant="outlined"
          value={dip.city}
          sx={{ my: 1 }}
          onChange={(event) => handleDip(event.target.value, "city")} />
        <Box sx={{ minWidth: 40, my: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="city-label-id">Cidade</InputLabel>
            <Select
              labelId="city-label-id"
              id="city-id"
              label="Cidade"
              sx={{ minWidth: 30 }}
            >
              {cities?.map((city, id) => <MenuItem key={id} value={city} selected>{city}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
        <TextField
          label="Local"
          variant="outlined"
          value={dip.place}
          sx={{ my: 1 }}
          onChange={(event) => handleDip(event.target.value, "place")} />

        <TextField
          label="Data"
          variant="outlined"
          value={dip.date}
          sx={{ my: 1 }}
          onChange={(event) => handleDip(event.target.value, "date")}
        />
        <Button
          variant="contained"
          color={"success"}
          type="submit"
          sx={{ my: 1 }}
          endIcon={<AddCircleIcon />}
          href={"/participantes"}
          fullWidth
          onClick={handleDipSubmit}
        >
          Próximo
        </Button>
      </Paper>
    </Container>
  );
};

export default DIP;
