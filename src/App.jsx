
import Variedades from './Variedades';
import Footer from './Footer';
import Navbar from './componets/CustomNavbar';
import Itemlistcontainer from './componets/Itemlistcontainer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Itemlistcontainer mensaje="El mejor cafe del mundo"/>
      <hr></hr>
      <Variedades producto="Cafe Colombiano" tamano="500gr" precio="2500"/>
      <Variedades producto="Cafe Italiano" tamano="500gr" precio="3000"/>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App;
