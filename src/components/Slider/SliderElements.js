import {BsChevronDoubleLeft,BsChevronDoubleRight} from 'react-icons/bs';
import styled from 'styled-components';

export const SliderSection = styled.div`
    position: relative;
    max-width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-base);
    background: rgb(245,239,219);
    background: linear-gradient(0deg, rgba(245,239,219,1) 51%, rgba(221,161,32,0.87718837535014) 80%);
    scroll-behavior: smooth;
    overflow: hidden;
    @media screen and (max-width:820px) {
        width: 100%;
        height: max-content;
        margin-top: 0;
    }
    @media screen and (max-width:650px) {
        width: 100%;
    }


`
export const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1rem auto;
    transition:0.7s ease-in-out;
    animation: puff-in-center 0.3s ease forwards;
`
export const SliderContent= styled.div`
    opacity: 1;
    margin-top: 5rem;

`
export const SlideButton = styled.button`
    background-color: var(--color-crimson);
    color: var(--color-black);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--color-golden);
    outline: none;
    cursor: pointer;
    &:hover{
        color: var(--color-golden);
        background-color: var(--color-black);
        transition: var(--transition);
    }
`
export const SlidePrice = styled.span`
    font-size: 1.4rem;
    margin: 1rem;
`

export const SlideTitle = styled.h4`
    font-size: 2rem;
    font-style: italic;
    margin: 1rem;
    font-weight: 700;
    color: var(--color-black);
    font-family: var(--font-alt);
`
export const SlideDesc = styled.h3`
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 500;
    margin: 1rem;
`
export const LeftArrow = styled(BsChevronDoubleLeft)`
    position: absolute;
    top: 45%;
    left: 4rem;
    font-size:3rem ;
    color: var(--color-golden);
    z-index: 10;
    cursor: pointer;
    &:hover{
        color:var(--color-black);
    }
    @media screen and (max-width:820px) {
        left: 1rem;
    }
`
export const RightArrow = styled(BsChevronDoubleRight)`
    position: absolute;
    top: 45%;
    right: 4rem;
    font-size:3rem ;
    color: var(--color-golden);
    z-index: 10;
    cursor: pointer;
    @media screen and (max-width:820px) {
        right: 1rem;
    }
`
export const SliderImage = styled.img`
    height: 70vh;
    border-radius: 20px;
    border: 1px solid var(--color-golden);
    opacity: 1;
    @media screen and (max-width:820px) {
        height: 50vh;
        }
`
export const SlideButtons = styled.div`
      transition:0.7s ease-in-out;

`