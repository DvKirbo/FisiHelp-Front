import { useState } from "react";
import MyCalendar from "../../components/Calendar/Calendar";
//import SelectMode from "./components/SelectMode/SelectMode";
//import "./Salones.css";
import { Button } from "@mui/material";
import SelectP from "./components/SelectP";
import './Salones.css';

const salones_Apiso1 = [
    { name: "AP101", estado: "ocupado" },
    { name: "AP102", estado: "ocupado" },
    { name: "AP103", estado: "libre" },
    { name: "AP104", estado: "libre" },
    { name: "AP105", estado: "libre" },
    { name: "AP106", estado: "libre" },
    { name: "AP107", estado: "ocupado" },
    { name: "AP108", estado: "libre" },
    { name: "AP109", estado: "libre" }
];

const salones_Apiso2 = [
    { name: "AP201", estado: "libre" },
    { name: "AP202", estado: "libre" },
    { name: "AP203", estado: "libre" },
    { name: "AP204", estado: "libre" },
    { name: "AP205", estado: "libre" },
    { name: "AP206", estado: "libre" },
    { name: "AP207", estado: "libre" },
    { name: "AP208", estado: "libre" },
    { name: "AP209", estado: "libre" }
];

const salones_NuevoPiso1 = [
    { name: "NP101", estado: "libre" },
    { name: "NP102", estado: "libre" },
    { name: "NP103", estado: "ocupado" },
    { name: "NP104", estado: "libre" },
    { name: "NP105", estado: "libre" },
    { name: "NP106", estado: "ocupado" },
    { name: "NP107", estado: "libre" },
    { name: "NP108", estado: "libre" },
    { name: "NP109", estado: "libre" }
];

const salones_NuevoPiso2 = [
    { name: "NP201", estado: "libre" },
    { name: "NP202", estado: "libre" },
    { name: "NP203", estado: "ocupado" },
    { name: "NP204", estado: "libre" },
    { name: "NP205", estado: "libre" },
    { name: "NP206", estado: "libre" },
    { name: "NP207", estado: "libre" },
    { name: "NP208", estado: "libre" },
    { name: "NP209", estado: "libre" }
];

/* 
const secondaryTheme = {
    palette: {
        primary: {
        main: '#1D2535',
        dark: '#6D7588',
        },
    },
} */

function Salones(){
    const [mode, setMode] = useState();
    const [salon, setSalon] = useState();

    return(
        <>
            <h1>Salones</h1>
            <div className="selector_container">
                {/* <SelectMode title="Nuevo Pabellon" 
                description="Pabellon con menos de 20 años de antiguedad"
                mode={"nuevo"}
                setMode={setMode}
                />

                <SelectMode title="Antiguo Pabellon"
                description="Pabellon con mas de 20 años de antiguedad"
                theme={secondaryTheme}
                mode={"antiguo"}
                setMode={setMode}
                /> */}
                <SelectP title="Antiguo Pabellon"setmode={()=>{
                    setMode("nuevo")
                }}/>
                <SelectP title="Nuevo Pabellon"  color="#1d2535" hover="#6d7588"
                    setmode={
                        ()=>{
                            setMode("antiguo")
                        }
                    }
                />
            </div>
        
        <div className="clasroom_container">
            <div className="row_container">
            {mode && (mode === "nuevo" ? salones_Apiso1 : salones_NuevoPiso1).map((salon, index) => (
                <Button 
                sx={{margin: 1}}
                key={index} 
                variant="contained" 
                color={salon.estado === "libre" ? "primary" : "secondary"} 
                onClick={() => {
                    setSalon(salon)
                    console.log(salon)
                }}
                disabled={salon.estado !== "libre"}
                >
                    {salon.name}
                </Button>
            ))}
        </div>
            
            <div className="row_container">
            {mode && (mode === "nuevo" ? salones_Apiso2 : salones_NuevoPiso2).map((salon, index) => (
                <Button 
                sx = {{margin:1}}
                key={index} 
                variant="contained" 
                color={salon.estado === "libre" ? "primary" : "secondary"} 
                onClick={() => {
                    setSalon(salon)
                    console.log(salon)
                }}
                disabled={salon.estado !== "libre"}
                >
                    {salon.name}
                </Button>
            ))}
            </div>
            </div>


            

            {salon && <h1 style={{color:"black"}}>{salon.name}</h1>}
            {salon && <MyCalendar
                saveEvent={()=>{
                    console.log("Evento guardado")
                }}
                getEvent={()=>{
                    console.log("Evento obtenido")
                }}
            />}
        </>
    )
}

export default Salones;