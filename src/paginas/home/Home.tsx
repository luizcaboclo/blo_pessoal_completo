import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagem from "../../components/postagem/modalPostagens/ModalPostagem";
import TabPostagem from "../../components/postagem/tabPostagem/TabPostagens";
import { TokenState } from "../../store/tokens/tokensReducer";
import './Home.css'

function Home(){
    
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
  
      }
  }, [token])
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixabg back1'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography  variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulobg pt'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulobg pt'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/posts' className='text-decorator-none'>
                        <Button variant="outlined" className='botaobg pt'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid className="img" item xs={6} >
                    
                </Grid>
                <Grid xs={12} className='postagensbg'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>

    );
}
export default Home;