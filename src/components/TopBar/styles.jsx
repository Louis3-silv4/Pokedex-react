import styled from "styled-components";

export const TopBarContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  background: rgb(217,217,217);
  background: linear-gradient(124deg, rgba(217,217,217,1) 61%, rgba(50,50,149,1) 61%);  

`
export const Title = styled.h2`
  font-weight: 600;
  color: #2F3133;
  font-size:25px;
  padding-left:40px;
  margin-top:30px;  
  margin-bottom:50px;

`
export const FavoriteContainer = styled.div`
  display:flex;
  align-items:center;
  gap:5px;

`
export const ButtonFavorite = styled.button`
  width:29px;
  all:unset;
  cursor: pointer; 
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 25px;
  margin:-20px;

  &:active{
  transform: translateY(5px);
  }

`
export const IconFavorite = styled.img`
  width:30px;
  
`
export const Link = styled.a`
 text-decoration: none;
  display:flex;
  align-items: center;
  gap:10px;
  font-size: medium;
`