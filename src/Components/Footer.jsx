import { Box, Typography, styled } from '@mui/material';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const OuterContainer = styled(Box)(({ theme }) => ({

 
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    gap:10,
    backgroundColor:"#B0C4DE",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const First = styled(Box)(({ theme }) => ({


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBoxOne = styled(Typography)(({ theme }) => ({
  color:"grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Wrap = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const Second = styled(Box)(({ theme }) => ({


    display:"flex",
    justifyContent:"space-between",
    width:"50%",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"70%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Inner = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    gap:10,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Disc = styled(Typography)(({ theme }) => ({
    fontSize:15,
    textAlign:"left",
    cursor:"pointer",
    fontFamily:"monospace",
    color:"grey",
    ":hover":{
    textDecoration:"underline",
    },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
fontSize:30,
fontWeight:600,
fontFamily:"monospace",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize:20,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextOne = styled(Typography)(({ theme }) => ({
    fontSize:8,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


function Footer(props) {
  console.log("FoterLng.......>",props)
  
  const language=props.lang
  const handleFb=()=>{
    window.location.href='https://www.facebook.com'
  }
  const handleInsta=()=>{
    window.location.href='https://www.instagram.com'
  }
  const handleX=()=>{
    window.location.href='https://www.x.com'
  }
  return (
    <OuterContainer>
{language?<First>
    <TextBox>就職活動</TextBox>
    <TextOne>© 2024 ジョブハント合同会社。無断転載を禁じます。
  </TextOne>
    </First>: <First>
    <TextBox>JOB HUNT</TextBox>
    <TextOne>© 2024 Job Hunt LLC. All Rights Reserved.
  </TextOne>
    </First>}

{ language?<Second>
    <Inner>
        <Disc>について</Disc>
        <Disc>プライバシー</Disc>
    </Inner>
     <Inner>
        <Disc>接触</Disc>
        <Disc>キャリア</Disc>
    </Inner>
     <Inner>
        <Disc>宣伝する
</Disc>
        <Disc>ポリシー</Disc>
    </Inner>

    </Second>: <Second>
    <Inner>
        <Disc>About</Disc>
        <Disc>Privacy</Disc>
    </Inner>
     <Inner>
        <Disc>Contact</Disc>
        <Disc>Career</Disc>
    </Inner>
     <Inner>
        <Disc>Advertise</Disc>
        <Disc>Policy</Disc>
    </Inner>

    </Second>}
{language?<TextBoxOne>フォローしてください</TextBoxOne>:<TextBoxOne>Follow us on</TextBoxOne>}
<Wrap>
  <FacebookIcon sx={{cursor:"pointer"}} onClick={handleFb}/>
  <InstagramIcon sx={{cursor:"pointer"}} onClick={handleInsta}/>
  <XIcon sx={{cursor:"pointer"}} onClick={handleX}/>
</Wrap>

    </OuterContainer>
  )
}

export default Footer