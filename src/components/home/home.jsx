import { NavBar } from "../navBar/NavBar"
import '/src/components/home/home.css'

export const Home = () => {


    return(
        <>
            <NavBar/>
            <div className="homeContain">
                
                <img src="/images/coffeePng.png" alt="" />
            </div>
        </>
    )
}