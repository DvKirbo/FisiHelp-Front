import './styles/App.css'
import ResposiveAppBar from './components/Navbar/ResponsiveAppBar'
import AutoPlay from './components/Carousel/Carousel'
import UnayoeReserv from './pages/UnayoeReserv'

function App (){
    return (
        <>
            <ResposiveAppBar />
            <AutoPlay />
            <UnayoeReserv />
        </>
    )
}


export default App