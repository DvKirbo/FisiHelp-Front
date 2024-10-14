import MyCalendar from "../../components/Calendar/Calendar"

function Canchita(){
    return (
        <>
            <h1>Canchita</h1>
            <p>pon imagenes o carrusel para la canchita o algunas cards</p>
            <p>Reserva la canchita</p>
            <MyCalendar 
            saveEvent={() => console.log()}
            getEvent={() => console.log()}
            />
        </>
    )
}

export default Canchita