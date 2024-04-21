import { Box, styled } from '@mui/material';
import React from 'react'

const OuterContainer = styled(Box)(({ theme }) => ({

  border:"2px solid green",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding:50,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar() {
  return (
    <OuterContainer>Navbar</OuterContainer>
  )
}

export default Navbar