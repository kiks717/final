import React from 'react';
import {
       BasketAsideCont,
       CartItems,
       CustomButton,
       IfCartDiv,
       ItemTitle,
       Minus,
      Plus,
      Buttons,
      FullCartDiv,
      FullCartPrice,
      FullCartPriceTitle,
      FinishedShopping,
      Bold,
      FinishedShoppingBtn,
      InsideCartItems,
      Span
   } from './BasketElements';
   import Header from './Header';

const Basket = (props, isShowing) =>  {
    const {cartItems, onAdd, onRemove} = props;
    //fetching items and functions via props

    // subtotal of cart
    const itemsPrice = cartItems.reduce((accumulator, currentItem) =>
     accumulator + currentItem.price * currentItem.qty, 0)
     //vracam 
     //0 is default value, 
     //reduce vraca zbir svih elemenata u nizu  

     //tax price 
     const taxPrice = itemsPrice * 0.02;//%

     const shippingPrice = itemsPrice > 2000 ? 0 : 50;
     //if its over 2000 make it free otherwhise 50 bucks
     const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <BasketAsideCont id='cart' isShowing={isShowing} >
          <Header 
             countCartItems={cartItems.length}/>
          <hr/>
        <IfCartDiv>
            {cartItems.lenght === 0 && <div>Cart is Empty</div>}
            </IfCartDiv>
            {cartItems.map((item) => (
//mapiram kroz podatke radi prikaza
              <CartItems key={item.id}>
                  <Buttons>
                  <ItemTitle>{item.title} </ItemTitle>
                  <CustomButton onClick={() => onAdd(item)}><Plus/></CustomButton>
                  <CustomButton onClick={() => onRemove(item)}><Minus/></CustomButton>
              {/* koristim anon funkciju zbog prosledjivanja item */}
              <Span>
                 ${item.price.toFixed(2)} x   {item.qty} </Span>
         
                
                 </Buttons>

              </CartItems>
            ))}


            {cartItems.lenght !== 0 && (
              <InsideCartItems>
                <hr />
                <FullCartDiv>
                  <FullCartPriceTitle>Items Price</FullCartPriceTitle>
                  <FullCartPrice><Bold>${itemsPrice.toFixed(2)}</Bold></FullCartPrice>
                </FullCartDiv>
                <FullCartDiv>
                  <FullCartPriceTitle>Tax Price</FullCartPriceTitle>
                  <FullCartPrice><Bold>${taxPrice.toFixed(2)}</Bold></FullCartPrice>
                </FullCartDiv>
                <FullCartDiv>
                  <FullCartPriceTitle>Shipping Price</FullCartPriceTitle>
                  <FullCartPrice><Bold>${shippingPrice.toFixed(2)}</Bold></FullCartPrice>
                </FullCartDiv>
                <FullCartDiv>
                  <FullCartPriceTitle style={{color: '#dda120', border:'1px solid black', padding:'10px'}}>TOTAL PRICE</FullCartPriceTitle>
                  <FullCartPrice><Bold>${totalPrice.toFixed(2)}</Bold></FullCartPrice>
                </FullCartDiv>
                <br/>
                  <FinishedShopping>
                    <FinishedShoppingBtn onClick={() => alert("Finished Shopping?")}>Checkout</FinishedShoppingBtn>
                  </FinishedShopping>
              </InsideCartItems>
            )}
    </BasketAsideCont>
  )
}

export default Basket
