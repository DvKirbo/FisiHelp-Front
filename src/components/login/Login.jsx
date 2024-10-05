import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const message = ['Usuario logueado correctamente', 'Error, Intente de nuevo'];
const url = "https://innovatech-0rui.onrender.com";
const loginUrl = url + '/auth/login';
const loginMod = url + '/auth/login-moderator';

export default function Login() {
    const [isMod, setIsMod] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [codigo, setCodigo] = useState(""); // Cambiar email a codigo
    const [dni, setDni] = useState(""); // Cambiar password a dni
    const [error, setError] = useState(false);

    const handleCloseAlert = () => {
        setOpenAlert(false);
        window.location.href = '/';
    }

    const handleCheckboxChange = (event) => {
        setIsMod(event.target.checked);
    };

    const handleErrorAlert = () => {
        setOpenAlert(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const urlToUse = isMod ? loginMod : loginUrl;

        fetch(urlToUse, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                codigo: codigo ? codigo : "No ingresado", // Cambiar email a codigo
                dni: dni ? dni : "No ingresado" // Cambiar password a dni
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.status === 200) {
                setError(false);
                const user = {
                    id: data.user.id,
                    nombre: data.user.nombre,
                    codigo: data.user.codigo, // Cambiar correo a codigo
                    token: data.token
                }
                window.localStorage.setItem(isMod ? 'UW-mod-logged-session' : 'UW-logged-session', JSON.stringify(user));
                if (isMod) {
                    window.location.href = '/moderador';
                } else {
                    setOpenAlert(true);
                }
            } else {
                setError(true);
                setOpenAlert(true);
                setCodigo(""); // Reiniciar codigo
                setDni(""); // Reiniciar dni
            }
        }).catch(err => {
            console.log(err);
        });
    };

    const handleInputChange = (e, setter) => {
        const value = e.target.value;
        // Solo permite números y limita a 8 dígitos
        if (/^\d*$/.test(value) && value.length <= 8) { 
            setter(value);
        }
    };

    return (
        <Grid container component="main" sx={{ height: { md: '100vh', xs: '100vh' } }}>
            <Dialog
                open={openAlert}
                onClose={error ? handleErrorAlert : handleCloseAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
            >
                <DialogTitle id="alert-dialog-title">{error ? message[1] : message[0]}</DialogTitle>

                <DialogActions>
                    <Button onClick={error ? handleErrorAlert : handleCloseAlert} color="primary" autoFocus>
                        Continuar
                    </Button>
                </DialogActions>
            </Dialog>

            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/UNMSM_Facultad_de_Ingenier%C3%ADa_de_Sistemas_e_Inform%C3%A1tica_2019_-_Vista_lateral.jpg/800px-UNMSM_Facultad_de_Ingenier%C3%ADa_de_Sistemas_e_Inform%C3%A1tica_2019_-_Vista_lateral.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            />
            <Link to={"/"}>
                <IconButton sx={{ position: 'absolute', backgroundColor: { sm: '#DDE2E5' }, color: 'gray', m: 2 }}>
                    <ArrowBackIcon />
                </IconButton>
            </Link>

            <Grid item xs={12} sm={8} md={5} component={Paper} square>
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            error={codigo.length === 0}
                            helperText={codigo.length === 0 ? "Código no válido" : ""}
                            margin="normal"
                            required
                            fullWidth
                            id="codigo" // Cambiar id a codigo
                            label="Código" // Cambiar label a codigo
                            name="codigo" // Cambiar name a codigo
                            autoComplete="codigo" // Cambiar autoComplete a codigo
                            autoFocus
                            value={codigo}
                            onChange={(e) => handleInputChange(e, setCodigo)} // Cambiar setEmail a setCodigo
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Solo permite números
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#66bb6a',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#66bb6a'
                                    },
                                },
                            }}
                        />
                        <TextField
                            error={dni.length === 0}
                            helperText={dni.length === 0 ? "DNI no válido" : ""}
                            margin="normal"
                            required
                            fullWidth
                            name="dni" // Cambiar name a dni
                            label="DNI" // Cambiar label a dni
                            type="text"
                            id="dni" // Cambiar id a dni
                            autoComplete="current-dni" // Cambiar autoComplete a current-dni
                            value={dni}
                            onChange={(e) => handleInputChange(e, setDni)} // Cambiar setPassword a setDni
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Solo permite números
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#66bb6a',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#66bb6a'
                                    },
                                },
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"
                                checked={isMod}
                                onChange={handleCheckboxChange}
                            />}
                            label="Ingresar como moderador"
                            sx={{ width: '100%' }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ my: 2, backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#66bb6a' } }}
                        >
                            Autenticar
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/Registrar">
                                    {"No tienes una cuenta? Regístrate"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
