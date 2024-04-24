import { InputOutlined } from '@mui/icons-material';
import { Box, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import Footer from '../Components/Footer';

const OuterContainer = styled(Box)(({ theme }) => ({


  display:"flex",
  flexDirection:"column",
  background:"#E0FFFF",
  gap:50,
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
  padding:10,
  borderRadius:30,
  transition: 'transform 0.3s ease', 
  ':hover': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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
const TextBoxInput = styled(Typography)(({ theme }) => ({
  fontWeight:600,
  fontSize:30,
  position:"absolute",
  left:500,
  bottom:450,
  color:"yellow",
  fontFamily:"cursive",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    left:70,
  bottom:770,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
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


function Home() {
  const [language,setLanguage]=useState(true)

  return (
    <Outer>
   <OuterContainer>

<First>
   <ImageBoxOne as={"img"} src="https://www.forbes.com/advisor/wp-content/uploads/2022/08/Image_-_Free_Job_Sites_.jpeg.jpg"/>
  <InputBox>
  {language?<TextBoxInput>夢の仕事を見つけよう</TextBoxInput>:
   <TextBoxInput>Find Your Dream Job</TextBoxInput>}
  {language?<TextField sx={{width:"80%",position:"absolute",zIndex:100,right:{ xs: 35, md: 130, lg: 100}, bottom:{ xs: 690, sm: 850, md: 450, lg:350},display:"flex",background:"white",borderRadius:20,}}
        label="仕事を探す"
        variant="outlined"
        fullWidth       
      />:<TextField sx={{width:"80%",position:"absolute",zIndex:100,right:{ xs: 35, md: 130, lg: 100}, bottom:{ xs: 690, sm: 850, md: 450, lg:350},display:"flex",background:"white",borderRadius:20,}}
        label="Search Job"
        variant="outlined"
        fullWidth       
      />}

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

   <InnerBox >
   
   <Second>
    <HeaderText>Planing to get a job ?</HeaderText>
   <TextBox>

When it comes to job hunting, navigating the vast expanse of the internet for the ideal job search website can feel like searching for a needle in a haystack. The sheer multitude of options can feel overwhelming, leaving you wondering which platform suits your specific needs and aspirations.
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://motto-jp.com/media/wp-content/uploads/2020/03/eyecatch-9.jpeg"/>
   </InnerBox>

    <InnerBox>
   <ImageBox as={"img"} src="https://japanupclose.web-japan.org/files/100417398.jpeg"/>
   <Second>
    <HeaderText>Planing to get a job ?</HeaderText>
   <TextBox>
When it comes to job hunting, navigating the vast expanse of the internet for the ideal job search website can feel like searching for a needle in a haystack. The sheer multitude of options can feel overwhelming, leaving you wondering which platform suits your specific needs and aspirations.
   </TextBox>
</Second>
   </InnerBox>

   <InnerBox>
   
   <Second>
    <HeaderText>Planing to get a job ?</HeaderText>
   <TextBox>
When it comes to job hunting, navigating the vast expanse of the internet for the ideal job search website can feel like searching for a needle in a haystack. The sheer multitude of options can feel overwhelming, leaving you wondering which platform suits your specific needs and aspirations.
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://c8.alamy.com/comp/2PKCKP1/a-female-new-hire-job-hunter-nervously-answering-the-phone-2PKCKP1.jpg"/>
   </InnerBox>
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

   <InnerBox >
   
   <Second>
    <HeaderText>就職する予定はありますか?</HeaderText>
   <TextBox>

就職活動に関して言えば、インターネットの広大な空間をナビゲートして理想の求人サイトを探すのは、干し草の山から針を探すような気分になるかもしれません。選択肢が膨大にあると圧倒されてしまい、どのプラットフォームが自分の特定のニーズや願望に適しているのか迷ってしまうかもしれません。
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://motto-jp.com/media/wp-content/uploads/2020/03/eyecatch-9.jpeg"/>
   </InnerBox>

    <InnerBox>
   <ImageBox as={"img"} src="https://japanupclose.web-japan.org/files/100417398.jpeg"/>
   <Second>
    <HeaderText>就職する予定はありますか?</HeaderText>
   <TextBox>
就職活動に関して言えば、インターネットの広大な空間をナビゲートして理想の求人サイトを探すのは、干し草の山から針を探すような気分になるかもしれません。選択肢が膨大にあると圧倒されてしまい、どのプラットフォームが自分の特定のニーズや願望に適しているのか迷ってしまうかもしれません。
   </TextBox>
</Second>
   </InnerBox>

   <InnerBox>
   
   <Second>
    <HeaderText>就職する予定はありますか?</HeaderText>
   <TextBox>
就職活動に関して言えば、インターネットの広大な空間をナビゲートして理想の求人サイトを探すのは、干し草の山から針を探すような気分になるかもしれません。選択肢が膨大にあると圧倒されてしまい、どのプラットフォームが自分の特定のニーズや願望に適しているのか迷ってしまうかもしれません。
   </TextBox>
</Second>

<ImageBox as={"img"} src="https://c8.alamy.com/comp/2PKCKP1/a-female-new-hire-job-hunter-nervously-answering-the-phone-2PKCKP1.jpg"/>
   </InnerBox>
</BoxWrap>
}
   </OuterContainer>
   <Footer/>
   </Outer>
  )
}

export default Home