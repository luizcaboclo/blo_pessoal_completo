import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';



function Footer() {
    
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12} className='vd'>
            <Box className='box1 vd'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos pt'>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://web.facebook.com/profile.php?id=100002466192867" target="_blank">
                        <FacebookIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/jose-luiz-santos-a06873136/" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Box>
            </Box>
            <Box className='box2 vd1'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='textos pt' >© 2020 Copyright:</Typography>
                </Box>
                <Box className='texto1'>
                    <a className='text-decorator-none' target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom className='textos pt' align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
        </>
    );
}
export default Footer;