import { Box, Button, Typography, colors, styled } from '@mui/material';
import React, { useState } from 'react'
import Home from '../Pages/Home';
import PublicRoutes from '../routes/PublicRoutes';
import { useNavigate } from 'react-router-dom';
import logo from "./logo.png"
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import TemporaryDrawer from './SideBar';

const OuterContainer = styled(Box)(({ theme }) => ({
  display:"flex",
justifyContent:"space-between",
  height:80,
  position:"sticky",
  top:0,
    background:"#4682B4",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     
    justifyContent:"left",
    
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
const TextSlide = styled(Box)(({ theme }) => ({
fontSize:30,
  
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
    color:"#FFFAFA",
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
const LogoBox = styled(Box)(({ theme }) => ({
   
    display:"flex",
    width:"50%",
    justifyContent:"space-between",
    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"70%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const SideBar = styled(Box)(({ theme }) => ({
   
    width:"10%",
    display:"none",
    alignItems:"center",
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"20%",
     display:"flex",
     justifyContent:"center",
     
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageBox = styled(Box)(({ theme }) => ({
    width:"30%",
    height:70,
    cursor:"pointer",
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"45%",
    height:70,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBoxBtn = styled(Button)(({ theme }) => ({
 
    borderRadius:25,
    cursor:"pointer",
    fontSize:12,
    color:"#FFFAFA",
    boxShadow:" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    ":hover":{
      background:"red",
      color:"white",
      boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px;",
    },
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar(props) {
  
  const [language,setLanguage]=useState(true)

  const navigate=useNavigate()

  const handleEnglish=()=>{
    setLanguage(false)
    props.lang(false)
    
  }
  const handleData=(data)=>{
    setLanguage(data)
    console.log("data....///",data)
  }
  
 const handleJob=()=>{
  navigate('/job')
 }
  const handleJpn=()=>{
    setLanguage(true)
     props.lang(true)
  }
  const handleAbout=()=>{
    navigate('/about')
  }
  const handleLogo=()=>{
    navigate('/')
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
    <LogoBox>
    <SideBar >
     <TemporaryDrawer sendData={handleData}/>
    
    </SideBar>
     <ImageBox onClick={handleLogo} as={"img"} src={logo}/>
    </LogoBox>
        <FirstBox>
       
           { language?<TextBox onClick={handleHome}>家</TextBox>: <TextBox onClick={handleHome}>HOME</TextBox>}
           { language? <TextBox onClick={handleJob}>ジョブリスト</TextBox>: <TextBox onClick={handleJob}>JOB LIST</TextBox>}
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