import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import QuantityPicker from './components/QuantityPicker/QuantityPicker';
import Catalog from './pages/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello From React! </h1>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
