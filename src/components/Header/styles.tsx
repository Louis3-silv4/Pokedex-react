import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 54%, rgba(23,23,121,1) 83%); 
`

export const Img  = styled.img `
  display: flex;
  justify-content: center;
  height:160px;
  padding-right:50px;
`

export const NavMenu = styled.div `
  display: flex;
  gap:20px;
  padding-right:6.8rem;
`
export const NavItem = styled.a<{ alt: string }> `
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  display: flex;
  margin-top: 55px;
`