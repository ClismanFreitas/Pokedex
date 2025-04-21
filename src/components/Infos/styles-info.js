import { styled } from "styled-components"

export const Li = styled.li`
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 800px;
    height: 650px;
    padding: 30px;
    margin: 12px;
    background-color: ${(props) => props.theme.fundo};
    border: ${(props) => props.theme.borda};
    transition: .5s ease-in-out;
    border-radius: 15px;

    img {
        max-width: 200px;
        height: 200px;
    }
    
    @media(max-width: 500px){
      width: 370px;
      height: auto;
    }
`;

export const Div = styled.div`
    height: 150px;
    padding-bottom: 20px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    img{
        width: 70%;
    }
`;

export const DivSkills = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.fundo};
    border: ${(props) => props.theme.borda};
    width: 400px;
    height: 300px;
    border-radius: 15px;
    padding-top: 15px;
    margin-top: 15px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 155px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(250, 250, 250, 0.7);
    border-radius: 155px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(127, 67, 191, 1);
  }

  @media(max-width: 500px){
    width: 330px;
  }
`;

export const Lista = styled.ul`
    list-style: none;
    padding-top: 10px;
    margin-bottom: 10px;
`;

export const ListaSkills = styled.li`
    margin: 5px;

`;


export const Move = styled.div`
    list-style: none;
    display: flex;
    border-radius: 15px;
    width: 700px;
    padding: 15px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 155px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(250, 250, 250, 0.7);
    border-radius: 155px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(127, 67, 191, 1);
  }

  @media(max-width: 500px){
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 400px;
  }
`;

export const Moves = styled.li`
    background-color: ${(props) => props.theme.fundo};
    border: ${(props) => props.theme.borda};
    display: flex;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    width: 140px;
    
`;