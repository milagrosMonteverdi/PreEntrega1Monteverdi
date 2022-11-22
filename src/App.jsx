
import Variedades from './Variedades';
import Footer from './Footer';
import Navbar from './componets/Navbar';
import Itemlistcontainer from './componets/Itemlistcontainer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Itemlistcontainer mensaje="El mejor cafe del mundo"/>
      <h1>The coffe shop.</h1>
      <hr></hr>
      <Variedades Producto="Cafe Colombiano" tamano="500gr" precio="2500"/>
      <Variedades Producto="Cafe Italiano" tamano="500gr" precio="3000"/>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App;
