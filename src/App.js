import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer grettings="Bienvenidos!!!" />
    </div>
  );
}

export default App;
