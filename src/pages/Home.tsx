import React from 'react'
import { Button } from '@mui/material';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button variant="outlined" href={"form-for-myself"}>Para mim</Button>
      <Button variant="outlined" href={"form-for-others"}>Para terceiros</Button>
    </>
  )
}

export default Home