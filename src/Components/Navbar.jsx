import { Box, Button, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
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
  [theme.breakpoints.down("md")]: {
    justifyContent:"center",
    gap:30,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const FirstBox = styled(Box)(({ theme }) => ({
  display:"flex",
  padding:20,
  width:"40%",
  justifyContent:"space-between",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none",
    justifyContent:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Wrapper = styled(Box)(({ theme }) => ({

  display:"flex",
  gap:20,
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const BoxOne = styled(Box)(({ theme }) => ({
  display:"flex",
  flexDirection:"column",
  
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
    fontFamily:"unset",
    fontSize:18,
    cursor:"pointer",
    color:"#B22222",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBoxEng = styled(Button)(({ theme }) => ({
    fontFamily:"unset",
    border:"1px solid red",
    fontSize:15,
    cursor:"pointer",
    padding:0,
    borderRadius:10,
    background:"red",
    color:"white",
    ":hover":{
       background:"red",
    color:"white",
    },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBoxJpn = styled(Button)(({ theme }) => ({
    fontFamily:"unset",
    padding:0,
    fontSize:15,
    cursor:"pointer",
     border:"1px solid red",
borderRadius:10,
background:"red",
    color:"white",
    ":hover":{
       background:"red",
    color:"white",
    },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBoxOne = styled(Typography)(({ theme }) => ({
    fontFamily:"revert-layer",
    fontWeight:600,
    fontSize:28,
    cursor:"pointer",
    color:"#FFA500",

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
  const [language,setLanguage]=useState(true)
  return (

    <Outer>
    <OuterContainer>
     <ImageBox as={"img"} src="https://c8.alamy.com/comp/2FN138E/rubber-stamp-illustration-for-japanese-business-inspected-checked-2FN138E.jpg"/>
    {language? <TextBoxOne >就職活動</TextBoxOne>:
      <TextBoxOne >JOB HUNT</TextBoxOne>}
        <FirstBox>
       
           { language?<TextBox>家</TextBox>: <TextBox>HOME</TextBox>}
           { language? <TextBox>ジョブリスト</TextBox>: <TextBox>JOB LIST</TextBox>}
          { language?  <TextBox>について</TextBox>: <TextBox>ABOUT</TextBox>}
            

            <BoxOne>
         {language?<TextBox>言語</TextBox> :<TextBox>Language</TextBox>}
            <Wrapper>
              <TextBoxEng>Eng</TextBoxEng>
               <TextBoxJpn>Jpn</TextBoxJpn>
            </Wrapper>
            </BoxOne>
     
        </FirstBox>
    </OuterContainer>
    <PublicRoutes/>
    </Outer>
  )
}

export default Navbar