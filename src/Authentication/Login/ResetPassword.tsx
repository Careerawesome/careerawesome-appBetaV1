import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";
import { CareerAwesomeInput } from "../../components/Cafields";

function ResetPassword() {
  return (
    <Box sx={{ height: "100vh", padding:"120px 20px"}}>
        <Box sx={{maxWidth:"480px", margin:"0 auto", textAlign:"center"}}>
            <Box>
                <img src='https://zone-assets-api.vercel.app/assets/icons/ic_lock_password.svg' alt='padlock' />
            </Box>
            <Box>
                <Typography gutterBottom variant='h3'>
                     Forgot Your Password?
                </Typography>
                <Typography sx={{mb:4}} gutterBottom variant='body2'>
                    Please enter the email address 
                    associated with your account and
                    We will email you a link to reset 
                    your password.
                </Typography>
            </Box>
            <Box sx={{mb:3}}>
                <CareerAwesomeInput label="Email address" />
            </Box>
            <Box>
                <Button variant='contained' fullWidth>
                    Reset Password
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default ResetPassword