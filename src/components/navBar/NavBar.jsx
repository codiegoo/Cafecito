import { Home } from '../home/home'
import { Menu } from '../menu/Menu'
import { Ubicacion } from '../ubicacion/ubicacion'
import '/src/components/navBar/NavBar.sass'
import { scroller } from 'react-scroll'

export const NavBar = () => {

    const scrollTo = (elementId) => {
        scroller.scrollTo(elementId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return(
        <div className="navContain">
            <img src="/images/coffee.jpg" alt="" className='logoNav'/>
            <div>
                <ul>
                    <li onClick={()=>scrollTo('homeContain')}>{Home}Home</li>
                    <li onClick={()=>scrollTo('menuContain')}>{Menu}Menu</li>
                    <li onClick={()=>scrollTo('locationContain')}>{Ubicacion}Ubicacion</li>
                </ul>
            </div>
        </div>
    )
}