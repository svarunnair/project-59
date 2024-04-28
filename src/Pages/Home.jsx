import { Height, InputOutlined } from '@mui/icons-material';
import { Box, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({


  display:"flex",
  flexDirection:"column",
  background:"#8FBC8F",
  gap:50,
  paddingBottom:50,
  justifyContent:"center",
  alignItems:"center",
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
const InnerBox = styled(Box)(({ theme }) => ({


  display:"flex",
  alignItems:"center",
  justifyContent:"center",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column"
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerBoxOne = styled(Box)(({ theme }) => ({


  display:"flex",
  alignItems:"center",
  justifyContent:"center",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column-reverse",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageBoxOne = styled(Box)(({ theme }) => ({
  width:"100%",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
 
  width:"40%",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  borderRadius:30,
  transition: 'transform 0.3s ease', 
  ':hover': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"80%", 
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
  padding:10,
  textAlign:"center",
  width:"70%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const HeaderText = styled(Typography)(({ theme }) => ({
 
  textAlign:"center",
  fontWeight:600,
  fontsize:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const First = styled(Box)(({ theme }) => ({
  width:"100%",
  display:"flex",
  flexDirection:"column",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const DivWrap = styled(Box)(({ theme }) => ({
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
   display:"none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InputBox = styled(Box)(({ theme }) => ({
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
const customBreakpoints = {
  customXL: 1600,
  customLG: 1280,
  customMD: 440,
  customSM: 600,
  customXS: 0,
};

const TextBoxInput = styled(Typography)(({ theme }) => ({
  fontWeight:600,
  fontSize:30,
  position:"absolute",
  left:500,
  bottom:450,
  color:"yellow",
  fontFamily:"cursive",
  
  [theme.breakpoints.down(customBreakpoints.customXL)]: {},
  [theme.breakpoints.down(customBreakpoints.customLG)]: {},
  [theme.breakpoints.down(customBreakpoints.customMD)]: {
    
  
  left:70,
  bottom:770,
  
  },
  [theme.breakpoints.down(customBreakpoints.customSM)]: {},
  [theme.breakpoints.down(customBreakpoints.customXS)]: {},
  '@media (max-width: 385px) and (max-height: 687px)': {
   bottom:500,
  },
}));
const Second = styled(Box)(({ theme }) => ({
  width:"50%",
  justifyContent:"left",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"90%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const BoxWrap = styled(Box)(({ theme }) => ({

  display:"flex",
  flexDirection:"column",
  alignItems:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


function Home({language}) {
   const navigate=useNavigate()
  
   const handleSearch=()=>{
      navigate('/job')
   }
 

  return (
    <Outer>
   <OuterContainer>

<First>
   <ImageBoxOne as={"img"} src="https://www.forbes.com/advisor/wp-content/uploads/2022/08/Image_-_Free_Job_Sites_.jpeg.jpg"/>
  <InputBox>
  {language?<TextBoxInput>夢の仕事を見つけよう</TextBoxInput>:
   <TextBoxInput>Find Your Dream Job</TextBoxInput>}
  {language?<DivWrap><TextField onClick={handleSearch} sx={{width:"80%",position:"absolute",zIndex:100,right:{ xs: 35, md: 130, lg: 100}, bottom:{ xs: 690, sm: 850, md: 450, lg:350},display:"flex",background:"white",borderRadius:20,}}
        label="仕事を探す"
        variant="outlined"
        fullWidth       
      /></DivWrap>:<DivWrap><TextField onClick={handleSearch} sx={{width:"80%",position:"absolute",zIndex:100,right:{ xs: 35, md: 130, lg: 100}, bottom:{ xs: 690, sm: 850, md: 450, lg:350},display:"flex",background:"white",borderRadius:20,}}
        label="Search Job"
        variant="outlined"
        fullWidth       
      /></DivWrap>}

  </InputBox>

  </First>
  {!language&&<BoxWrap>
   <InnerBox>
   <ImageBox as={"img"} src="https://miro.medium.com/v2/resize:fit:870/1*TlSB_3wfxg-MSYhaN5aLlA.jpeg"/>
   <Second>
   <HeaderText>Planing to get a job ?</HeaderText>
   <TextBox>
When it comes to job hunting, navigating the vast expanse of the internet for the ideal job search website can feel like searching for a needle in a haystack. The sheer multitude of options can feel overwhelming, leaving you wondering which platform suits your specific needs and aspirations.
   </TextBox>
</Second>
   </InnerBox>

   <InnerBoxOne >
   
   <Second>
    <HeaderText>When to Start the Career Planning Process ?</HeaderText>
   <TextBox >

The best time to engage in the career planning process is long before you start your job search. Your senior year of high school and the first year or two of college are great times to start thinking about what kinds of jobs and careers you’re interested in. You can then test-drive them through classes, internships, certification programs and virtual job simulations to gain a fuller understanding of what they’re really like, discard the jobs you dislike, and further explore the ones you connect with.
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://motto-jp.com/media/wp-content/uploads/2020/03/eyecatch-9.jpeg"/>
   </InnerBoxOne>

    <InnerBox>
   <ImageBox as={"img"} src="https://japanupclose.web-japan.org/files/100417398.jpeg"/>
   <Second>
    <HeaderText>Career gap ?</HeaderText>
   <TextBox>
TOKYO, Jan 30 (Reuters) - Japan's jobless rate fell to 2.4% in December from the previous month, government data showed on Tuesday.
The seasonally adjusted unemployment rate compared with economists' median forecast of 2.5% in a Reuters poll.
The jobs-to-applicants ratio slipped to 1.27 in December, matching the level seen in June 2022, separate labour ministry data showed. It was slightly lower than the median forecast of 1.28.
   </TextBox>
</Second>
   </InnerBox>

   <InnerBoxOne>
   
   <Second>
    <HeaderText>How to Prepare for a Career Change: Step-By-Step Guide</HeaderText>
   <TextBox>
Changing careers can take many forms. You can change your role, shift your function, move departments, enter a new industry, or a combination of these. Regardless of the type of change you want to make (and whether you know what that change may be) the first step is knowing that change is possible and that it's possible for you.
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://c8.alamy.com/comp/2PKCKP1/a-female-new-hire-job-hunter-nervously-answering-the-phone-2PKCKP1.jpg"/>
   </InnerBoxOne>
</BoxWrap>}


{language&&<BoxWrap>
   <InnerBox>
   <ImageBox as={"img"} src="https://miro.medium.com/v2/resize:fit:870/1*TlSB_3wfxg-MSYhaN5aLlA.jpeg"/>
   <Second>
   <HeaderText>就職する予定はありますか?</HeaderText>
   <TextBox>
就職活動に関して言えば、インターネットの広大な空間をナビゲートして理想の求人サイトを探すのは、干し草の山から針を探すような気分になるかもしれません。選択肢が膨大にあると圧倒されてしまい、どのプラットフォームが自分の特定のニーズや願望に適しているのか迷ってしまうかもしれません。
   </TextBox>
</Second>
   </InnerBox>

   <InnerBoxOne >
   
   <Second>
    <HeaderText>就職する予定はありますか?</HeaderText>
   <TextBox>

就職活動に関して言えば、インターネットの広大な空間をナビゲートして理想の求人サイトを探すのは、干し草の山から針を探すような気分になるかもしれません。選択肢が膨大にあると圧倒されてしまい、どのプラットフォームが自分の特定のニーズや願望に適しているのか迷ってしまうかもしれません。
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://motto-jp.com/media/wp-content/uploads/2020/03/eyecatch-9.jpeg"/>
   </InnerBoxOne>

    <InnerBox>
   <ImageBox as={"img"} src="https://japanupclose.web-japan.org/files/100417398.jpeg"/>
   <Second>
    <HeaderText>就職する予定はありますか?</HeaderText>
   <TextBox>
就職活動に関して言えば、インターネットの広大な空間をナビゲートして理想の求人サイトを探すのは、干し草の山から針を探すような気分になるかもしれません。選択肢が膨大にあると圧倒されてしまい、どのプラットフォームが自分の特定のニーズや願望に適しているのか迷ってしまうかもしれません。
   </TextBox>
</Second>
   </InnerBox>

   <InnerBoxOne>
   
   <Second>
    <HeaderText>就職する予定はありますか?</HeaderText>
   <TextBox>
就職活動に関して言えば、インターネットの広大な空間をナビゲートして理想の求人サイトを探すのは、干し草の山から針を探すような気分になるかもしれません。選択肢が膨大にあると圧倒されてしまい、どのプラットフォームが自分の特定のニーズや願望に適しているのか迷ってしまうかもしれません。
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://c8.alamy.com/comp/2PKCKP1/a-female-new-hire-job-hunter-nervously-answering-the-phone-2PKCKP1.jpg"/>
   </InnerBoxOne>
</BoxWrap>
}
   </OuterContainer>
   </Outer>
  )
}

export default Home