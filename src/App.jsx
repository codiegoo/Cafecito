import { Menu } from './components/menu/Menu'
import { Home } from './components/home/home'
import '/src/main.sass'


function App() {


  return (
    <>
      <div className="appContain">
        <Home/>
      </div>
        <Menu/>
    </>
  )
}

export default App
