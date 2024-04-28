import { Box, Button, OutlinedInput, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'


const jobData=[
    {
        title:"Web Developer",
        experience:"2years",
        salary:"50000",
        skills:"html,css,js, reactJs",
        location:"tokio"
    },
    {
        title:"Java Developer",
        experience:"1years",
        salary:"30000",
        skills:"html,css,java, reactJs",
        location:"sapporo"
    },{
        title:"MERN stack Developer",
        experience:"5years",
        salary:"150000",
        skills:"html,css,js,nodeJS,mongoDB, reactJs",
        location:"Kyoto"
    },{
        title:"School teacher",
        experience:"2years",
        salary:"50000",
        skills:"english language, engineering",
        location:"yokohoma"
    },{
        title:"Call center Job",
        experience:"Freshers",
        salary:"15000",
        skills:"communication skills",
        location:"tokio"
    },{
        title:"Driver",
        experience:"2years",
        salary:"30000",
        skills:"Heavy licence",
        location:"Kyoto"
    },{
        title:"Insurance agent",
        experience:"2years",
        salary:"50000",
        skills:"communication skills",
        location:"yokohoma"
    },{
        title:"Data analyst",
        experience:"6years",
        salary:"250000",
        skills:"B-tech",
        location:"sapporo"
    },{
        title:"React JS Developer",
        experience:"2years",
        salary:"150000",
        skills:"html,css,js, reactJs",
        location:"kobe"
    },{
        title:"Logistic Analyst",
        experience:"1years",
        salary:"50000",
        skills:"B-tech, any degree",
        location:"kobe"
    },{
        title:"Marketing",
        experience:"2years",
        salary:"35000",
        skills:"communication skill",
        location:"hiroshima"
    },
    {
        title:"Sales Manager",
        experience:"5years",
        salary:"135000",
        skills:"communication skill,marketing knowledge",
        location:"Kyoto"
    },
]

const jnpData=[
  {
        title:"営業部長",
        experience:"5年",
        salary:"135000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"135000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"235000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"435000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"95000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"735000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"835000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"88000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"55000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"35000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"15000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"175000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },{
        title:"営業部長",
        experience:"5年",
        salary:"225000",
        skills:"コミュニケーションスキル、マーケティング知識",
        location:"コミュニケーションスキル、マーケティング知識"
  },
  
]

const OuterContainer = styled(Box)(({ theme }) => ({
   
    padding:10,
    background:"#B0C4DE",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerBox = styled(Box)(({ theme }) => ({
  
    padding:10,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const Topic = styled(Box)(({ theme }) => ({

   width:"100%",
   background:"#5F9EA0",
   color:"white",
   fontSize:28,
   fontWeightL:700,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const Heading = styled(Typography)(({ theme }) => ({
   fontSize:18,
   fontWeight:600,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextBox = styled(Typography)(({ theme }) => ({
   fontSize:14,
   fontWeight:400,
   display:"flex",
   fontFamily:"sans-serif",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
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
  const BoxDiv = styled(Box)(({ theme }) => ({
//   border:"2px solid red",
   padding:10,
   width:"100%",
   display:"flex",
   flexDirection:"column",
   justifyContent:'center',
   alignItems:"center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DataBox = styled(Box)(({ theme }) => ({

  width:"100%",
  borderRadius:20,
  background:"#fff",
//   border:"1px solid red",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:10,
  padding:20,
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  ":hover":{
boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
  },

 
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
   const WrapData = styled(Box)(({ theme }) => ({

  padding:10,
  display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",
  gap:50,
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns:"repeat(1,1fr)",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const Page = styled(Box)(({ theme }) => ({
display:"flex",
paddingTop:30,
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DetailBox = styled(Box)(({ theme }) => ({
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    width:"70%",
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ButtonBox = styled(Button)(({ theme }) => ({
    width:"100%",
    position:"static",
    background:"#6495ED",
    color:"white",
    ":hover":{
         background:"#8B0000",
    color:"white",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ButtonBoxOne = styled(Button)(({ theme }) => ({
    width:"100%",
    background:"green",
    color:"white",
    ":hover":{
         background:"green",
    color:"white",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Job({language}) {
    const [search,setSearch]=useState(jobData)
    const [page,setPage]=useState(1)
    const [initial,setInitial]=useState(0)
    const [final,setFinal]=useState(6)
    const dataLength=jobData.length

    console.log("JobLang",language)
    console.log("Length",dataLength)

    const handleSearch=(e)=>{
        let value=e.target.value
        let filterData=jobData.filter(item=>item.title.toLowerCase().includes(value.toLowerCase()))
        setSearch(filterData)
    }
    const handleApply=()=>{
      alert("Application send successfully")
    }
    const handleSearchLoc=(e)=>{
        let value=e.target.value
        let filterLocation=jobData.filter(item=>item.location.toLowerCase().includes(value.toLowerCase()))
        setSearch(filterLocation)
    }
    const handlePre=()=>{
        if(page!==1){
            setInitial(initial-6)
            setFinal(final-6)
            setPage(page-1)
        }
    }
    const handleNext=()=>{
        if(final<dataLength){
            setFinal(final+6)
            setInitial(initial+6)
            setPage(page+1)
        }
    }

   
  return (
    <OuterContainer>
    <InnerBox>
    {language?<Topic>求人情報</Topic>:<Topic>Job Vacancy</Topic>}

    <BoxDiv>
    <Wrapper>
   {language?<OutlinedInput sx={{background:"#fff",borderRadius:20,}} placeholder='職種から探す...' onChange={handleSearch}/>:<OutlinedInput sx={{background:"#fff",borderRadius:20,}}  placeholder='Search by Job role...' onChange={handleSearch}/>}
    {language?<OutlinedInput sx={{background:"#fff",borderRadius:20,}}  placeholder='場所から探す...' onChange={handleSearchLoc}/>:<OutlinedInput sx={{background:"#fff",borderRadius:20,}}  placeholder='Search by Location...' onChange={handleSearchLoc}/>}
    </Wrapper>
    


    <WrapData>
{search.slice(initial,final).map((item)=>(
   <DataBox>
   <DetailBox>
    <Heading>{item.title}</Heading>
   {language? <TextBox>スキル : {item.skills}</TextBox>: <TextBox>Skills : {item.skills}</TextBox>}
   { language?<TextBox>経験 : {item.experience}</TextBox>:<TextBox>Experience : {item.experience}</TextBox>}
    { language?<TextBox>給料 : {item.salary}</TextBox>:<TextBox>Salary : {item.salary}</TextBox>}
    {language?<TextBox>位置 : {item.location}</TextBox>:<TextBox>Location : {item.location}</TextBox>}
    </DetailBox>
     <ButtonBox onClick={()=>handleApply(item)}>Apply</ButtonBox>
    </DataBox>
))}
    </WrapData>

    {language?<Page><Button onClick={handlePre}>前</Button>ページ  {page}<Button onClick={handleNext}>次</Button></Page>:
     <Page><Button onClick={handlePre}>Pre</Button>Page  {page}<Button onClick={handleNext}>Next</Button></Page>}

    </BoxDiv>
    
    </InnerBox>

    </OuterContainer>
  )
}

export default Job