
import Todo from "./components/todo";
import styled from "styled-components";

const Corpo = styled.div`
  height: 100vh;
  background: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Corpo>
      <Todo />
    </Corpo>
  );
}

export default App;
