import {BrowserRouter} from "react-router-dom";
import Explore from "./components/Explore";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
import { popularProducts } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";
import SignIn from "./components/SignIn";
import Basket from "./pages/Cart/Basket";
import { useState } from "react";
import Slider from "./components/Slider";
import { SliderData } from "./components/Slider/file";
import Modal from "./pages/Cart/Modal/Modal";
import UseModal from "./pages/Cart/Modal/useModal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  //to manage data from items in cart,and we need to pass
  // cartItems to basket 
  const [isOpen, setIsOpen] = useState(false)
  //za modal 

  const onAdd = (product) => {

    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {

      setCartItems([...cartItems, { ...product, qty: 1 }]);

    }
  };


  const onRemove = (product) => {
    // ista logika smao subtract
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

   return (
    <BrowserRouter>
    <GlobalStyle/>
    <Hero/> 
    <UseModal setIsOpen={setIsOpen} id="cart"/>

      <Modal
      id="cart"
      open={isOpen} 
      onClose={() => setIsOpen(false)}>
          {/* here */}
      <Basket
      cartItems={cartItems}
      onAdd={onAdd} 
      onRemove={onRemove}/>
      {/* prosledjivanje funkcija definisanih u  */}
      </Modal>
      <Slider slides={SliderData}/>
      <Products
       id="discover"
       heading="Chose your favourite" 
       data={productData}
       onAdd={onAdd} 
       onRemove={onRemove}/>
      <Feature/>
      <Explore
        heading="Sweet Treats for YOU"
        id="explore"
        data={popularProducts} 
        onAdd={onAdd} 
        onRemove={onRemove} />

      <SignIn/>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
