import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react'
import Home from '../Pages/Home';
import PublicRoutes from '../routes/PublicRoutes';

const OuterContainer = styled(Box)(({ theme }) => ({
  display:"flex",
justifyContent:"space-between",
  height:80,
  position:"sticky",
  top:0,
    background:"#E0FFFF",
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
  width:"40%",
  justifyContent:"space-between",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Outer = styled(Box)(({ theme }) => ({
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
    fontFamily:"inherit",
    fontSize:18,
    cursor:"pointer",

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
     <ImageBox as={"img"} src="https://c8.alamy.com/comp/2FN138E/rubber-stamp-illustration-for-japanese-business-inspected-checked-2FN138E.jpg"/>
     <TextBox sx={{fontWeight:600,fontSize:22,}}>JOB HUNT</TextBox>
        <FirstBox>
       
            <TextBox>HOME</TextBox>
            <TextBox>JOB LIST</TextBox>
            <TextBox>ABOUT</TextBox>
     
        </FirstBox>
    </OuterContainer>
    <PublicRoutes/>
    </Outer>
  )
}

export default Navbar