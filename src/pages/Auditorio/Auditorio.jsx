import MyCalendar from "../../components/Calendar/Calendar";

function Auditorio (){
    return (
        <>
            <h1>Auditorio</h1>
            <MyCalendar
                saveEvent={() => console.log(event)}
                getEvent={() => console.log(event)}
            />
        </>
    )
}

export default Auditorio;