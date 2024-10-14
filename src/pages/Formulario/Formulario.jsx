import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import fisicampusImage from './fisicampus.jpg';  

export default function Formulario() {
    const [expediente, setExpediente] = useState("");
    const [justificacion, setJustificacion] = useState("");
    const [tipo, setTipo] = useState("");
    const [cursoEntrada, setCursoEntrada] = useState("");
    const [cursoSalida, setCursoSalida] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
      
        console.log({
            expediente,
            justificacion,
            tipo,
            cursoEntrada,
            cursoSalida,
        });
    };

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
           
            <Grid
                item
                xs={12}
                sx={{
                    backgroundImage: `url(${fisicampusImage})`,  
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

               
                <Box
                    component={Paper}
                    elevation={6}
                    sx={{
                        width: '100%',
                        maxWidth: 600, 
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 1)', 
                        boxShadow: 3,
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{ mb: 2 , fontWeight: 'bold'}}>
                        FORMULARIO DE SOLICITUD
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="expediente"
                            label="Nº de Expediente"
                            name="expediente"
                            autoFocus
                            value={expediente}
                            onChange={(e) => handleInputChange(e, setExpediente)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#66bb6a',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#66bb6a',
                                    },
                                },
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="justificacion"
                            label="Justificación"
                            name="justificacion"
                            multiline
                            rows={4}
                            value={justificacion}
                            onChange={(e) => handleInputChange(e, setJustificacion)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#66bb6a',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#66bb6a',
                                    },
                                },
                            }}
                        />
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel id="tipo-label">Tipo</InputLabel>
                            <Select
                                labelId="tipo-label"
                                id="tipo"
                                value={tipo}
                                label="Tipo"
                                onChange={(e) => handleInputChange(e, setTipo)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#66bb6a',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        '&.Mui-focused': {
                                            color: '#66bb6a',
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="Entrada">Entrada</MenuItem>
                                <MenuItem value="Salida">Salida</MenuItem>
                                <MenuItem value="Cambio">Cambio</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            margin="normal"
                            fullWidth
                            id="curso-entrada"
                            label="Curso de Entrada"
                            name="cursoEntrada"
                            value={cursoEntrada}
                            onChange={(e) => handleInputChange(e, setCursoEntrada)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#66bb6a',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#66bb6a',
                                    },
                                },
                            }}
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            id="curso-salida"
                            label="Curso de Salida"
                            name="cursoSalida"
                            value={cursoSalida}
                            onChange={(e) => handleInputChange(e, setCursoSalida)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#66bb6a',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#66bb6a',
                                    },
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ my: 2, backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#66bb6a' } }}
                        >
                            Enviar Solicitud
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
