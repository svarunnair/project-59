import { InputOutlined } from '@mui/icons-material';
import { Box, Button, OutlinedInput, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const OuterContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    width:"30%",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:"70%",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InputDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid yellow",
    paddingBottom:100,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TitleBox = styled(Typography)(({ theme }) => ({
    padding:50,
    fontWeight:900,
    fontSize:25,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
//   border:"2px solid red",
  paddingTop:80,
  display:"flex",
  cursor:"pointer",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InputText = styled(Typography)(({ theme }) => ({
display:"flex",
cursor:"pointer",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DivBox = styled(Typography)(({ theme }) => ({
    display:"flex",
    // border:"2px solid red",
    justifyContent:'space-between',
    
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {

        },
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));
  const ButtonBox = styled(Button)(({ theme }) => ({
    display:"flex",
    top:30,
    cursor:"pointer",
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));

function Signin({language}) {
  console.log("sigLang",language)

    const navigate=useNavigate('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")


console.log("object")

const token=localStorage.getItem("token")
console.log("tokennnnnnnnn",token)

console.log("tokenLogin",token)

    const handleEmail=(e)=>{
       let value=e.target.value 
       setEmail(value)
      
    }
    const handlePassword=(e)=>{
      let value=e.target.value 
      setPassword(value)
   }

   const handleClick=()=>{
    let data={
      email:email,
      password:password
    }
    if(!email.match(/^[A-Za-z\._\0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      alert("Kindly give the valid Email Id")
     }
     else{
      
        alert("Signin Successfull")
        navigate("/home")
     }
     
      
      // navigate('/home')
     
    
   }

    const handleCreate=()=>{
        navigate('/signup')
    }
  return (



    <OuterContainer>

        <InnerDiv>

            

            {language?<TitleBox>ログイン</TitleBox>:<TitleBox>Login</TitleBox>}

            <InputDiv>
            {language?<InputText  sx={{paddingBottom:1,fontSize:10,fontWeight:600,}}>Eメール</InputText>: <InputText  sx={{paddingBottom:1,fontSize:10,fontWeight:600,}}>EMAIL</InputText>}
            <OutlinedInput  onChange={handleEmail} sx={{width:"100%",height:35,borderRadius:0}}/>
          
           <DivBox>
            {language?<InputText sx={{paddingTop:2,fontSize:10,fontWeight:600,}}>
パスワード</InputText>: <InputText sx={{paddingTop:2,fontSize:10,fontWeight:600,}}>PASSWORD</InputText>}
            {language?<InputText sx={{paddingTop:2,justifyContent:'right',fontSize:12}}>忘れましたか？</InputText>: <InputText sx={{paddingTop:2,justifyContent:'right',fontSize:12}}>Forgot?</InputText>}
            </DivBox>
            <OutlinedInput type='password' onChange={handlePassword}  sx={{width:"100%",height:35,borderRadius:0}}/>

           {language?<ButtonBox onClick={handleClick} sx={{color:'white',position:"static",background:"black",width:"100%",borderRadius:0,":hover":{color:'white',background:"black"}}}>サインイン</ButtonBox>:<ButtonBox onClick={handleClick} sx={{color:'white',position:"static",background:"black",width:"100%",borderRadius:0,":hover":{color:'white',background:"black"}}}>Sign in</ButtonBox>}
           { language?<TextBox onClick={handleCreate}>アカウントを作成する</TextBox>:<TextBox onClick={handleCreate}>Create Account</TextBox>}
            </InputDiv>
        </InnerDiv>

    </OuterContainer>
  )
}

export default Signin