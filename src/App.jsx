import './App.css'
import { Routes, Route} from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/cartProvider';

function App() {
  return (
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />      
        </Routes>
      </CartProvider>
  );
}
export default App;