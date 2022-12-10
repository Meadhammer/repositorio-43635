import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/navBar/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={<ItemListContainer greeting="Bienvenidos!!!" />} />

        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Pipas de " />} />

        <Route path="/category" element={<ItemListContainer greeting="Catálogo de Pipas" />}/>

        <Route path="/itemDetail/:itemId" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <h3>Aca se muestra el carrito</h3> } />

        <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
