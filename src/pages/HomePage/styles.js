import styled, {keyframes} from "styled-components";

const Test = keyframes`
   0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  } 
`

export const HomeSpace = styled.main`
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
`