import styled from "styled-components";

export const TitleToDo = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:2px;
  font-family:Arial, Helvetica, sans-serif;
  color:violet;
  font-size:1.2em;
  
 
`

export const Container = styled.div`
  border: 3px solid #fff;
  padding: 40px 20px;
  width: 40%;
  min-width: 500px;
 
`;

export const NewTaskContainer = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  display: flex;

  .inputBox {
    flex: 3;
    font-size: 1rem;
    border: 2px solid #d1d3d4;
    border-radius: 5px;
    padding: 12px;
    font-weight: 500;
  }
`;

export const NewTaskButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .estiloAdd {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 500;
    height: 100%;
    font-size: 1rem;
    border: none;
    background-color: green;
    color: #fff;
    padding: 12px;
    margin-left: 12px;
    cursor: pointer;
  }
`;

export const TasksContainer = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  margin-top: 60px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
`;

export const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
  margin-top:3px;
  color:blueviolet;

  .BotaoDeletar {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 500;
    height: 100%;
    font-size: 1rem;
    border: none;
    background-color: red;
    color: #fff;
    padding: 12px;
    margin-left: 12px;
    cursor: pointer;
  }
`;

export const LimparTudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .botaoLimpeza {
    border-radius: 5px;
    font-weight: 500;
  
    font-size: 1rem;
    border: none;
    background-color: blueviolet;
    color: #fff;
    padding:3px;
    margin-top: 10px;
    margin-left: 12px;
    cursor: pointer;
  }
`;
