import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react'

const OuterContainer = styled(Box)(({ theme }) => ({

  border:"2px solid green",
  display:"flex",
gap:350,
  height:50,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const FirstBox = styled(Box)(({ theme }) => ({
  border:"2px solid red",
  display:"flex",
  gap:30,
  padding:20,
  width:"100%",
  justifyContent:"space-between",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Outer = styled(Box)(({ theme }) => ({
  border:"2px solid black",
  padding:20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
    fontFamily:"inherit",
    fontSize:18,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ButtonBox = styled(Button)(({ theme }) => ({
    background:"brown",
    color:"white",
    height:30,
      fontSize:18,
    width:80,
    textTransform:"none",
    fontFamily:"monospace",
    borderRadius:0,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageBox = styled(Box)(({ theme }) => ({
    width:"10%",
    height:70,
    border:"2px solid red",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar() {
  return (
    <Outer>
    <OuterContainer>
     <ImageBox as={"img"} src="data:image/jpeg;base64,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"/>
        <FirstBox>
       
            <TextBox>Home</TextBox>
            <TextBox>Services</TextBox>
            <TextBox>Intership</TextBox>
            <TextBox>Portfolio</TextBox>
            <TextBox>Career</TextBox>
            <TextBox>About</TextBox>
             <TextBox>Blogs</TextBox>
              <ButtonBox>Contact</ButtonBox>
        </FirstBox>
    </OuterContainer>
    </Outer>
  )
}

export default Navbar