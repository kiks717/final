import React from 'react'
import { 
     ProductHeading,
     ProductsContainer, 
     ProductWrapper, 
     ProductCard,
     ProductImg,
     ProductDesc,
     ProductInfo,
     ProductTitle,
     ProductPrice, 
     ProductButton, 
    } from './ProductElements'
import { productData} from './data'
const Products = ({ heading, onAdd }) => {
    // const {products} = data;
    //products={products}
    //onAdd={onAdd}
  return (
    <ProductsContainer id='discover' >
        <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
            {productData.map((product, index) => {
                return (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt}/>
                        <ProductInfo>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>${product.price}</ProductPrice>
                            {/* product iz map */}
                            <ProductButton onClick={() => onAdd(product)}>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                )
            })}
        </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
