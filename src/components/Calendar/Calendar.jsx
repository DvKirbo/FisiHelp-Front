import { useState } from 'react';
import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';
import "dayjs/locale/es"
import { Box, Button, Fade, IconButton, Modal, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import Backdrop from '@mui/material/Backdrop';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "./Calendar.css"
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

dayjs.locale('es');
const localizer = dayjsLocalizer(dayjs);

const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos"

};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
// eslint-disable-next-line react/prop-types
function MyCalendar(){

    const [events, setEvents] = useState([{
        start: dayjs().toDate(),
        end: dayjs().add(1, 'day').toDate(),
        title: 'Some title'
    }]);
    const [selectedDate, setSelectedDate] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /* Para implementar con el backend
    useEffect(()=>{
        fetch('http://localhost:3001/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [])
    guardando los eventos y renderizarlos apenas se visite la pagina
    //a la hora de guardar un evento se debe hacer un fetch a la base de datos
    //para guardar el evento
    igual se mostraria en la pagina mediante el array de eventos


    psarle la url para la base de datos
    remplazar eventos por nuestros componentes para las etiquetas pero solo para los salones y laboratorios
    con lo de reservar listo ver lo de las rectis y lo de asignar profes
    */

 
    console.log(events[0].start)
    return(
        <div style={{
            position: 'relative',
        }}>
            <IconButton onClick={handleOpen} sx={{
                width: 50,
                height: 50,
                backgroundColor: '#0353a4',
                color: '#ffffff',
                position: 'absolute',
                right: 0,
                bottom: 0,
                marginBottom: 2,
                marginRight: 7,
                zIndex: 1,
            }}>
                <Add />
            </IconButton>





            <Calendar
            className="calendar"
                localizer={localizer}
                messages={messages}
                events={events}
                views={['month', 'week']}
                style={{height: 500,
                margin: 50,
                padding: 50,
                backgroundColor: '#ffffff',
                color:'#001845',
                position: 'relative',
                }}
            />


      <Modal
        sx={{
            marginBottom: 32
        }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Reserve su cita
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Horario de atención: 8:00 am - 5:00 pm (Lunes a Viernes)
            </Typography>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 20,
            }}>
                {/* date picker */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker className="date-time-picker" 
                        label="inicio"
                        onChange={(date)=>{
                            console.log(date)
                            setSelectedDate(date)
                        }}
                        
                    />
                </LocalizationProvider>

            </div>
            <Button
                sx={{
                    marginTop: 2,
                }}
                onClick={()=>{

                    let newEvent = {
                        start: selectedDate.toDate(),
                        end: dayjs(selectedDate).add(1, 'hours').toDate(),
                        title: 'New Event'
                    }
                    setEvents([...events, newEvent])
                    handleClose()
                    
                }}
            >
                Reservar
            </Button>
          </Box>
        </Fade>
      </Modal>

        </div>
    )
}

export default MyCalendar;