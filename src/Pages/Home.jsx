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
const InnerBox = styled(Box)(({ theme }) => ({

  border:"2px solid red",
  width:"200px",
  height:"200px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({

  border:"2px solid red",
  width:"200px",
  height:"200px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


function Home() {
  return (
   <OuterContainer>
   <InnerBox>
   <TextBox></TextBox>

   </InnerBox>

   </OuterContainer>
  )
}

export default Home