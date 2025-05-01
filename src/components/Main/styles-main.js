import styled from "styled-components"
import { Link } from "react-router-dom";

export const getBackgroundColor = (type) => {
  if (type.includes("normal")) return "gray";
  if (type.includes("fire")) return "red";
  if (type.includes("water")) return "blue";
  if (type.includes("electric")) return "yellow";
  if (type.includes("grass")) return "green";
  if (type.includes("ice")) return "lightblue";
  if (type.includes("fighting")) return "brown";
  if (type.includes("poison")) return "purple";
  if (type.includes("ground")) return "saddlebrown";
  if (type.includes("flying")) return "skyblue";
  if (type.includes("psychic")) return "pink";
  if (type.includes("bug")) return "lightgreen";
  if (type.includes("rock")) return "darkgray";
  if (type.includes("ghost")) return "darkviolet";
  if (type.includes("dragon")) return "indigo";
  if (type.includes("dark")) return "black";
  if (type.includes("steel")) return "silver";
  if (type.includes("fairy")) return "lightpink";
  return "gray";
};

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
padding-top: 30px;
flex-direction: column;
font-family: sans-serif;

`;

export const Ul = styled.ul`
  width: 1400px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  list-style: none;
  border-radius: 15px;
  background-color: rgba(88, 83, 83, 0.18);

  @media (max-width: 500px){
    flex-direction: column;
    width: 300px;
    height: auto;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 900px){
    width: 700px;
  }

  @media (max-width: 1300px){
    width: 1200px;
  }

`;

export const Li = styled.li`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    padding: 30px;
    margin: 12px;
    background-color: ${(props) => props.theme.fundo};
    border: ${(props) => props.theme.borda};
    transition: .5s ease-in-out;
    border-radius: 15px;

    img {
        max-width: 150px;
        height: 130px;
    }

    &:hover {
        transform: scale(1.05);
        transition: .1s ease;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    }
`;

export const NomePokemon = styled.p`
    font-size: 30px;
`;

export const Tipo = styled.p`
    background-color: ${({ $tipo }) => getBackgroundColor($tipo)};
    color:rgb(255, 255, 255);
    padding: 10px;
    border-radius: 10px;
    margin-top: 5px;
    font-weight: bold;
`;

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 25px;

    @media (max-width: 500px){
      flex-direction: column;
      align-items: flex-end;
      align-items: center;
    }
`;

export const Button = styled.button`
    padding: 15px 70px;
    background-color: ${(props) => props.theme.fundo};
    border: ${(props) => props.theme.borda};
    transition: 0.5s ease-in-out;
    color: white;
    border-radius: 15px;
    cursor: pointer;
    margin: 0px 10px;

     &:hover {
        transition: .3s ease;
        box-shadow: 0px 0px 15px ${(props) => props.theme.borda}, 0px 0px 30px ${(props) => props.theme.color};
        transform: scale(1.05);
    }

    @media (max-width: 500px){
      margin: 10px 0px;
  
    }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

export const Select = styled.select`
  background-color: ${(props) => props.theme.fundo};
  border: ${(props) => props.theme.borda};
  color: white;
  width: 150px;
  height: 30px;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 15px;
  appearance: none;
  font-weight: bold;
  cursor: pointer;
`;

export const DivSelect = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row-reverse;

    @media (max-width: 500px){
    justify-content: center;
    width: 100%;
    margin-top: 15px;   
}
`;

export const Footer = styled.footer`
  background-color:rgba(0, 0, 0, 0.83);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;

  p{
    color: ${(props) => props.theme.scroll};
  }
`;

export const Option = styled.option`
  background-color: ${(props) => props.theme.scroll};
`;
