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
    const [correo, setCorreo] = useState(""); // Cambiar código a correo
    const [contraseña, setContraseña] = useState(""); // Cambiar dni a contraseña
    const [error, setError] = useState(false);

    const handleCloseAlert = () => {
        setOpenAlert(false);
        window.location.href = '/';
    }

    const handleCheckboxChange = (event) => {
        setIsMod(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const urlToUse = isMod ? loginMod : loginUrl;

        fetch(urlToUse, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                correo: correo ? correo : "No ingresado", // Cambiar código a correo
                contraseña: contraseña ? contraseña : "No ingresado" // Cambiar dni a contraseña
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.status === 200) {
                setError(false);
                const user = {
                    id: data.user.id,
                    nombre: data.user.nombre,
                    correo: data.user.correo, // Cambiar código a correo
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
                setCorreo(""); // Reiniciar correo
                setContraseña(""); // Reiniciar contraseña
            }
        }).catch(err => {
            console.log(err);
        });
    };

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    return (
        <Grid container component="main" sx={{ height: { md: '100vh', xs: '100vh' } }}>
            <Dialog
                open={openAlert}
                onClose={error ? () => setOpenAlert(false) : handleCloseAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
            >
                <DialogTitle id="alert-dialog-title">{error ? message[1] : message[0]}</DialogTitle>

                <DialogActions>
                    <Button onClick={error ? () => setOpenAlert(false) : handleCloseAlert} color="primary" autoFocus>
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

                            error={correo.length === 0}
                            helperText={correo.length === 0 ? "Correo no válido" : ""}
                            margin="normal"
                            required
                            fullWidth
                            id="correo" // Cambiar id a correo
                            label="Correo" // Cambiar label a correo
                            name="correo" // Cambiar name a correo
                            autoComplete="email" // Cambiar autoComplete a email
                            autoFocus
                            value={correo}
                            onChange={(e) => handleInputChange(e, setCorreo)} // Cambiar setCodigo a setCorreo
                        />
                        <TextField
                            error={contraseña.length === 0}
                            helperText={contraseña.length === 0 ? "Contraseña no válida" : ""}
                            margin="normal"
                            required
                            fullWidth
                            name="contraseña" // Cambiar name a contraseña
                            label="Contraseña" // Cambiar label a contraseña
                            type="password" // Cambiar type a password
                            id="contraseña" // Cambiar id a contraseña
                            autoComplete="current-password" // Cambiar autoComplete a current-password
                            value={contraseña}
                            onChange={(e) => handleInputChange(e, setContraseña)} // Cambiar setDni a setContraseña
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
