import React, { useState } from 'react'
import {Typography,Button,Stack,ButtonGroup} from '@mui/material'
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import List from './List';

function Simple() {
   
  return (
    <div >
   
    <Typography variant='h6' gutterBottom>
    Typography   gutter bootom giversmargin bottoom
    
    </Typography>
    <Typography variant='BUTTON TEXT' >
     BUTTON text
    
    </Typography>
    <Typography variant='body2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, odio. Explicabo quo placeat doloremque at sint consequatur. Ab quo ratione quidem temporibus, saepe commodi magni itaque doloribus quaerat eius! Aperiam!
    <Stack spacing={5}>
    <Stack spacing={3} direction="row">
    <Button  size='large'>Text</Button>
    <Button href="www.google.com">Contained</Button>
    <Button >Outlined</Button>
    <Button size='large' variant='contained' color='warning'>Outlined</Button>
   <Button variant='contained' startIcon={<AddIcCallSharpIcon/>}>Call</Button>
   <Button variant='contained' endIcon={<AddIcCallSharpIcon/>} disableElevation>Call</Button>
   <ButtonGroup variant="contained" color='success' aria-label="text button group" orientation='vertical'>
   
   <Button onClick={()=> alert('changed')}>One</Button>
   <Button>Two</Button>
   <Button>Three</Button>
  
 
</ButtonGroup>
    </Stack></Stack>
   </Typography>
  <List/>
    </div>
  )
}

export default Simple