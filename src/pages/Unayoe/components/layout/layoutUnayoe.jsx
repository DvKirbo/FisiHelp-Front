import { Container } from "@mui/material";
import './layoutUnayoe.css'

function LayoutUnayoe() {
    return (
        <>      
            <Container maxWidth='xl' sx={{
                marginTop: 3, 
                position: "relative", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
                <h1 className="title-Unayoe"> Unayoe - FISI </h1>
                <img className="layout-unayoe-img" src="https://www.unsa.edu.pe/wp-content/uploads/2023/06/psiclogos-portada-878x426.jpg" alt="unayoe" />
            </Container>
        </>
    )
}

export default LayoutUnayoe;