import './Chatbot.css';

function Chatbot(){
    const handleClick = () => {
        window.open("https://www.google.com", "_blank");
    };

    return (
        <>
            <img onClick={handleClick} className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="Chatbot"></img>
        </>
    )
}

export default Chatbot;