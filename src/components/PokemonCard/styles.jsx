import styled from "styled-components";

export const StyleCard = styled.div ``;

export const Card = styled(StyleCard)`
 display:flex;
 box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
 background-color: #757579;
 border-top-left-radius: 73px;
 border-bottom-left-radius: 34px;
 border-top-right-radius: 33px;
 border-bottom-right-radius: 70px;
 color: #fff;
 &:hover{
  background: rgb(217,217,217);
  background: linear-gradient(124deg, rgba(217,217,217,1) 57%, rgba(50,50,149,1) 57%);  
  transform: scale(1.06);
  color:black;
 }
`

export const Info = styled.div`
  display: flex;
`
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  padding-top:10px;
`
export const ButtonInfo = styled.div`
  display:flex;
  padding: 30px 0 0 130px;
`
export const ButtonDetalhar = styled.button`
  width:66px;
  height:20px
`
export const ButtonFavoriteCard = styled.button`
  width:66px;
  height:20px
`
export const ButtonUnfavoriteCard = styled.button`
  width:75px;
  height:20px
`