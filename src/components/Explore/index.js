import React from 'react'
import { 
     ExploreHeading,
     ExploresContainer, 
     ExploreWrapper, 
     ExploreCard,
     ExploreImg,
     ExploreDesc,
     ExploreInfo,
     ExploreTitle,
     ExplorePrice, 
     ExploreButton, 
    } from './ExploreElements'
import { popularProducts } from '../Products/data';
const Explore = ({ heading, onAdd}) => {
    //prop define headline in components 
    // const {products} = data;

  return (
    <ExploresContainer id='explore'   onAdd={onAdd}>
        <ExploreHeading>{heading}</ExploreHeading>
        {/* 
        looping thru array to
         extract neccessary data
         with in JSX */}
        <ExploreWrapper>
            {popularProducts.map((product, index) => {
                return (
                    <ExploreCard key={index}>
                        <ExploreImg src={product.img} alt={product.alt}/>
                        <ExploreInfo>
                            <ExploreTitle>{product.title}</ExploreTitle>
                            <ExploreDesc>{product.desc}</ExploreDesc>
                            <ExplorePrice>${product.price}</ExplorePrice>
                            <ExploreButton onClick={() => onAdd(product)}>{product.button}</ExploreButton>
                        </ExploreInfo>
                    </ExploreCard>

                )
            })}
            
        </ExploreWrapper>
    </ExploresContainer>
  )
}

export default Explore
