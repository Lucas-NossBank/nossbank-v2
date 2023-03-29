import styled, {keyframes} from "styled-components";
import main_banner01 from "../../assets/logo/nossbank_capa_bgoff.png"
import main_banner02 from "../../assets/logo/nossbank.png"

const Slide = keyframes`
   0% {
    transform:translateX(-25%);
  }
  50% {
    transform:translateX(0%);
  }
  100% {
    transform:translateX(25%);
  }
`

export const HomeSpace = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url(${main_banner02});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1001;
    object-fit: cover;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
      background-image: url(${main_banner01});
    }
    @media screen and (min-width: 1024px) {
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
`

export const Bg01 = styled.div`
    animation:${Slide} 10s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, var(--color-secondary) 50%, #09f 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
`;
export const Bg02 = styled.div`
    animation:${Slide} 10s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, var(--main-dark-color) 50%, var(--main-light-color) 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
    animation-direction:alternate-reverse;
  animation-duration:4s;
`;
export const Bg03 = styled.div`
    animation:${Slide} 10s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, var(--main-light-color) 50%, var(--color-royalblue) 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
    animation-duration:5s;
`;

export const NavBarMenuBtn = styled.button`
  width: 70px;
  height: 50px;
  position: fixed;
  top: 10%;
  left: 80%;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1010;
  cursor: pointer;
  & > svg {
    transform: scale(1.5);
  }
  @media screen and (min-width: 370px) {
    width: 60px;
    left: 82%;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    & {
      display: none;
    }
  }
`;