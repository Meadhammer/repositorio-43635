import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/navBar/NavBar';
import CartContextProvider from "./components/context/CartContext";
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <CartContextProvider>
        
        <NavBar />

        <Routes>

          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!!!" />} />

          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Pipas de " />} />

          <Route path="/category" element={<ItemListContainer greeting="Catálogo de Pipas" />}/>

          <Route path="/itemDetail/:itemId" element={ <ItemDetailContainer /> } />

          <Route path="/cart" element={ <Cart /> } />

          <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } />

        </Routes>

      </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
