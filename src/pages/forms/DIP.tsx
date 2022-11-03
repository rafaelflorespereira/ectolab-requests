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
  MenuItem,
} from "@mui/material";

import { defaultDip, DipTypes, DipType } from "../../typings/typing";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const DIP: React.FC = () => {
  const [dip, setDip] = useState<DipType>(defaultDip);
  const cities = ["São Paulo", "Foz do Iguaçu", "Curitiba"];

  // simple validation checking only if the form is not empty
  const isDipValid = () => {
    for (const dipProperty in dip) {
      if (dipProperty) {
      }
    }
  };

  const handleDipSubmit = () => {
    // event.preventDefault()
    isDipValid();
  };

  const handleDip = (value: string, type: DipTypes) => {
    const newDip = dip;
    newDip[type] = value;
    setDip({ ...newDip });
  };

  return (
    <Container sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <Paper
        sx={{ minWidth: 80, p: 4, display: "flex", flexDirection: "column" }}
        elevation={10}
      >
        {/* !Todo: change to typographic HTML H1 element  */}
        <TextField
          label="Número da DIP"
          variant="outlined"
          type={"number"}
          value={dip.dipNumber}
          sx={{ my: 1 }}
          onChange={(event) => handleDip(event.target.value, "dipNumber")}
        />
        <Box sx={{ my: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="city-label-id">Cidade</InputLabel>
            <Select labelId="city-label-id" id="city-id" label="Cidade">
              {cities?.map((city, id) => (
                <MenuItem key={id} value={city} selected>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <TextField
          sx={{ my: 1 }}
          label="Local"
          variant="outlined"
          value={dip.place}
          onChange={(event) => handleDip(event.target.value, "place")}
        />

        <TextField
          sx={{ my: 1 }}
          label="Data"
          variant="outlined"
          value={dip.date}
          onChange={(event) => handleDip(event.target.value, "date")}
        />
        <Button
          variant="contained"
          color={"success"}
          type="submit"
          sx={{ my: 1 }}
          endIcon={<NavigateNextIcon />}
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
