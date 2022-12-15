import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button, Grid } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroTema() {
    let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id:0,
        categoria: '',
        titulo: ''
        
    })
    useEffect(() => {
        if(token == '') {
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

    useEffect(() => {
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string){
        buscaId(`/tema/${id}`, setTema, {
            headers:{
                'Authorization': token
            }
        })
    }
    function updatedTema(e: ChangeEvent<HTMLInputElement>){
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
    console.log("tema" + JSON.stringify(tema))

    if(id !== undefined){
    console.log(tema)
    put(`/tema`, tema, setTema,{
        headers: {
            'Authorization': token
        }
    })
    toast.success('Tema atualizado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
    }else{
        post(`/tema`,tema, setTema, {
            headers:{
                'Authorization': token
            }
        })
        toast.success('Tema cadastrado com sucesso',{
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined,

        });
    }
    back()
}

function back(){
    navigate('/temas')
}

return (
        <Container className='topobg pk' maxWidth="sm"  >
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className='pt' >Formulário de cadastro tema</Typography>
                <TextField value={tema.categoria} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedTema(e)} id="categoria" label="Titulo" variant="outlined" name="categoria" margin="normal" fullWidth />
                <TextField value={tema.titulo} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedTema(e)} id="titulo" label="Texto" variant="outlined" name="titulo" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary" className='vd pt'>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;