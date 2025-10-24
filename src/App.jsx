import './App.css'
import { Routes, Route} from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/cartProvider';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />      
        </Routes>
        <Footer />
      </CartProvider>
  );
}
export default App;