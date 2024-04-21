import { Box, Typography, styled } from '@mui/material';
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
const FirstBox = styled(Box)(({ theme }) => ({
  border:"2px solid red",
  display:"flex",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar() {
  return (
    <OuterContainer>
        <FirstBox>
            <TextBox>Home</TextBox>
        </FirstBox>
    </OuterContainer>
  )
}

export default Navbar