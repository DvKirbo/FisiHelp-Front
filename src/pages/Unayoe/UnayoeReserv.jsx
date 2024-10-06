import { Button } from "@mui/material";
import MyCalendar from "../../components/Calendar/Calendar";
import InformationCard from "./components/InformationCard/InformationCard";
import LayoutUnayoe from "./components/layout/layoutUnayoe";
import './UnayoeReserv.css'

function UnayoeReserv() {
    return (
        <> 
            <LayoutUnayoe />
            <div className="services">
                <h1 className="title-services">NUESTROS SERVICIOS</h1>
            <div className = "services-information">
                <InformationCard image="https://clinix.com.py/wp-content/uploads/2023/05/at-the-psychologist-2022-03-17-04-36-50-utc-1024x683.jpg" title="SERVICIO PSICOPEDAGÓGICO" content={"Atención psicopedagógica individual a los estudiantes que solicitan el servicio.Evaluaciones y asesorías grupales de las características de personalidad de los estudiantes"} />
                <InformationCard image="https://coderslink.com/wp-content/uploads/2020/05/Salud-mental-durante-COVID-19-scaled.jpg" title="EN COORDINACIÓN CON LA RED DE SALUD MENTAL " content={"Evaluación, detección y derivación de alumnos con dificultades en la salud mental:"} />
                <InformationCard image="https://blog.pearsonlatam.com/hs-fs/hubfs/estrategias-para-evitar-la-deserci%C3%B3n-escolar-en-la-nueva-normalidad%20.jpeg?width=2000&height=852&name=estrategias-para-evitar-la-deserci%C3%B3n-escolar-en-la-nueva-normalidad%20.jpeg" title="ATENCIÓN A ESTUDIANTES OBSERVADOS (2DA. Y 3ERA. REPITENCIA)" content={"Apoyo a las escuelas profesionales en el seguimiento del programa de tutorías académicas."}  />
            </div>
            </div>
            
            <div className="wasa">
            <Button  href="#wasa" variant="contained" color="primary"
                sx={{
                    fontSize: 20,
                }}
            >Reservar</Button>
            </div>
            <div id="wasa">
            <MyCalendar />
            </div>
        </>
    )
}
export default UnayoeReserv;