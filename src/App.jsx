import Info from './components/Info'
import NavBar from './components/NavBar'
import Productos from './product/Productos'
import Routers from './router/Routers'

function App() {
  addEventListener('scroll', (e)=>{
    let y = window.scrollY
    if (y > 370) {
      document.querySelector('.NavBar').classList.add('navbarS')
    }else{
      document.querySelector('.NavBar').classList.remove('navbarS')
    }
  })

  
  return (
    <div className="App">
      <Routers/>
    </div>
  )
}

export default App
