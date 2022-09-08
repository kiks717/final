import React from 'react'
import styled from 'styled-components';
import  ReactDOM from 'react-dom';
//trebam da poslijedim childrem 
// a children je tekst iz dugmeta
const ModalCont = styled.div`
  position: fixed;
  top: 50%;
  left:50%;
  transform: translate(-50%, -55%);
  padding: 40px;
  z-index: 1000;
  @media screen  and (max-width:820px){
        margin-top:2.5rem;
  }
  @media screen and (max-width:650px) {
        padding: 10px;
        margin-top:2.4rem;
  }  
  @media screen  and (max-width:400px){
        width: max-content;
  }
`
const CloseButton = styled.button`
    background-color: var(--color-golden);
    color: var(--color-black);
    font-weight: 700;
    letter-spacing: 0.04em;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--color-golden);
    outline: none;
    top: 50px;
    cursor: pointer;
    &:hover{
        color: var(--color-golden);
        background-color: var(--color-black);
        transition: var(--transition);
    }
`
// za pozadinu modala
const OverlayDiv = styled.div`
  position: fixed;
  top: 0%;left: 0%;right:0%;bottom:0%;
  background-color: rgba(0,0,0,0.75);
  z-index: 1000;
`


function Modal({open, children, onClose}) {
  if(!open) return null
/* da imamo neki drugi content sadrzaj bi se prikazao skupa
 sa korpom, if createPortal is not in use 
 zato sto modal ima odredjene stilove koji se podudaraju sa 
 overlayDiv-om
  - stacking context in css (content se ne moze pojaviti preko 
    odredjenog elementa zbog z-indexa)  zelimo da se modal pojavi 
    preko sadrzaja bez obzira na sve
  -we can resolve a problem using portal  */
  return ReactDOM.createPortal(
    <>
      <OverlayDiv  onClick={onClose}/>

    <ModalCont id='cart'>
     <CloseButton  
     onClick={onClose}>Close </CloseButton>
      {children}
      {/* onClose definisana u App.js */}
    </ModalCont>
    </>,
    document.getElementById('portal')
  )
}
/*
sto se tice createPortal on se ustvari nalazi u JSX-u 
ali u stvarnosti se prikazuje izvan JSX-a tj izvan div-a

--index.html id="portal, portal omogucava da se sadrzaj prikaze preko sadrzaja 
++modal is inside of this div, but it's rendered outside of the div
Portal dozvoljava odrzavanje veze parent-child kada dolazi do clickEvents 
contenta u JSX-u ali se taj content moze otvoriti negdje drugo

Ako se stavi render umjesto createPortal izgledace kao da radi, ali 
portal ipak omogucava tu delegaciju sadrzaja*/
export default Modal
