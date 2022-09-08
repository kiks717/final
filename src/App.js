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
      /*ova funkcija prihvata elemnt koji treba biti dodan i pomocu 
  exist cemo provjeriti da li se u cartItems nalazi product sa
  jednakim id-em kao id u array of products koji treba biti dodan
  */
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        /*updejtujem, radim to u setCartItems,
        ako nadjem product trebam uvecati njegovu vrijednost
        mapiram,dobijam novi niz, dobijajuci novi niz, treba da
        ocuvam stari content gdje cu na postojecu vrijednost da 
        dodam novu, a ako je neki drugi poizvod ne treba mijenjati  */
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      /*ako poizvod ne postoji u korpi, koristim arrayConcat
      merge arrays(based on previous state array)
      spajanje nizova i quantity of product at beggining is 1 */
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      //pass function here and on AddToCart buttons

      //onAdd prosledjujem kroz 3 komponente
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
/*na najvisem nivou apliakcije ide router 
routes(switch)  odlucuje gdje u router sistemu zelimo da imamo rute
ne mozemo koristii router ako je izvan router componente
*/
   return (
    <BrowserRouter>
    <GlobalStyle/>
    <Hero/> 
    <UseModal setIsOpen={setIsOpen} id="cart"/>
{/* Modal is children of some other components
    and we forced child component to render somewhere outside
    of parent component (div id="portal")

    all events of this modal are going to 
    delegate up to  parents of this modal
    {when we click on button it's going to }
 */}
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
