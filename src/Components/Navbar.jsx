import { Box, Button, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import Home from '../Pages/Home';
import PublicRoutes from '../routes/PublicRoutes';
import { useNavigate } from 'react-router-dom';
import logo from "./logo.png"

const OuterContainer = styled(Box)(({ theme }) => ({
  display:"flex",
justifyContent:"space-between",
  height:80,
  position:"sticky",
  top:0,
    background:"#FFFFE0",
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
    fontWeight:600,

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
    fontWeight:700,
    fontSize:30,
    cursor:"pointer",
    color:"#696969",

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
const TextBoxBtn = styled(Button)(({ theme }) => ({
  border:"1px solid red",
    borderRadius:25,
    fontSize:12,
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar(props) {
  console.log("pe=ropp",props)
  const [language,setLanguage]=useState(true)
  const navigate=useNavigate()

  const handleEnglish=()=>{
    setLanguage(false)
    props.lang(false)
    
  }
 
  const handleJpn=()=>{
    setLanguage(true)
     props.lang(true)
  }
  const handleAbout=()=>{
    navigate('/about')
  }

   const handleHome=()=>{
    navigate('/')
  }
  const handleReg=()=>{
    navigate('/signin')
  }
  return (

    <Outer>
    <OuterContainer>
     <ImageBox  as={"img"} src={logo}/>
    
        <FirstBox>
       
           { language?<TextBox onClick={handleHome}>家</TextBox>: <TextBox onClick={handleHome}>HOME</TextBox>}
           { language? <TextBox>ジョブリスト</TextBox>: <TextBox>JOB LIST</TextBox>}
          { language?  <TextBox onClick={handleAbout}>について</TextBox>: <TextBox onClick={handleAbout}>ABOUT</TextBox>}
 {language? <TextBoxBtn onClick={handleReg}>ジョブリスト</TextBoxBtn>: <TextBoxBtn onClick={handleReg}>Registration</TextBoxBtn>}

            <BoxOne>
         {language?<TextBox>言語</TextBox> :<TextBox>Language</TextBox>}
            <Wrapper>
             { language?<TextBoxEng onClick={handleEnglish}>工学</TextBoxEng>:<TextBoxEng onClick={handleEnglish}>Eng</TextBoxEng>}
               {language?<TextBoxJpn onClick={handleJpn}>日本</TextBoxJpn>:<TextBoxJpn onClick={handleJpn}>Jpn</TextBoxJpn>}
            </Wrapper>
            </BoxOne>
     
        </FirstBox>
    </OuterContainer>
    <PublicRoutes language={language}/>
    </Outer>
  )
}

export default Navbar