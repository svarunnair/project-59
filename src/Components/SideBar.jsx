import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TextBox = styled(Typography)(({ theme }) => ({
    fontSize:15,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const Wrap = styled(Box)(({ theme }) => ({
    padding:20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

export default function TemporaryDrawer({ sendData }) {
  const navigate=useNavigate()
  const [language,setLanguage]=React.useState(false)
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  console.log("Send,,,,,,,,",sendData)
  const handleHome=()=>{
    navigate('/')
  }
  const handleAbout=()=>{
    navigate('/about')

  }
  const handleReg=()=>{
    navigate('/signin')
  }
  const handleJob=()=>{
    navigate('/job')
  }
  const handleEng=()=>{
    setLanguage(false)
    sendData(language)
  //  send(language)
  }
  const handleJap=()=>{
    setLanguage(true)
    sendData(language)
  //  send(language)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{display:"flex",flexDirection:"column",paddingTop:10,}}>
        {/* {['Home', 'Job List', 'About', 'Registration'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Button onClick={handleHome}>HOME</Button>
        <Button onClick={handleJob }>Job List</Button>
        <Button onClick={handleAbout}>About</Button>
           <Button onClick={handleReg}>Registration</Button>
      </List>
      <Divider />
      <List>
      <Wrap>
      <TextBox>Language</TextBox>
      <TextBox>
        
        <Button onClick={handleEng}>Eng</Button>
        <Button onClick={handleJap}>Jap</Button>
      </TextBox>
</Wrap>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{fontSize:35,}} onClick={toggleDrawer(true)}>=</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
