import styled from "styled-components";

export const PokemonModal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalCard = styled.div `
  background-color: rgba(211,211,211,0.9794511554621849);
  margin: 15% auto; 
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 700px; 
  height:400px;
  opacity:0.9;

  display: flex;
  flex-direction: column;
`

export const Header = styled.div `
  display: flex;
  justify-content:space-around;;

  margin:5px;
  padding:10px;

  font-size: 45px;
  font-weight: bold;
  font-family: "Lucida Console", "Courier New", monospace;
`

export const Content = styled.div `
  margin: 35px ;
  padding: 15px;
  display: flex;
  align-items:center;
  font-family: "Lucida Console", "Courier New", monospace;
`
export const StatsLeft = styled.div `
  display: flex;
  flex-direction:column;
  gap:25px;
  padding-left:50px;
`
export const StatsRight = styled.div `
  display:flex;
  flex-direction:column;
  margin-left:auto;
  padding-right: 34px;
  gap:20px;
`
export const Stat = styled.div `
  font-size:20px;
  font-weight:600;
  margin: 5px
`
export const StatDesc = styled.div<{bgColor:string}> `
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  border-radius: 15px;
  padding: 5px 15px;
  font-size:15px;
  font-weight:bold;
`
export const ProgressBar = styled.progress<{bgColor:string}>`
  background-color: ${({ bgColor }) => bgColor};
`;

