import styled, { keyframes } from "styled-components";
import Coin1 from "../../../assets/icons/coin1.jpg"
import Coin2 from "../../../assets/icons/coin_silver.jpg"
import Coin3 from "../../../assets/icons/coin_won.jpg"

const Rotate = keyframes`
    0% {
        width: var(--coin-size);
        box-shadow:
        0 0 0 var(--side-dark);
        animation-timing-function: ease-in;
    }
    
    49.999% {
        width: 0.1rem;
        box-shadow:
        0.05rem 0 0 var(--side),
        0.1rem 0 0 var(--side),
        0.15rem 0 0 var(--side),
        0.2rem 0 0 var(--side),
        0.25rem 0 0 var(--side),
        0.3rem 0 0 var(--side),
        0.35rem 0 0 var(--side),
        0.4rem 0 0 var(--side),
        0.45rem 0 0 var(--side),
        0.5rem 0 0 var(--side),
        0.55rem 0 0 var(--side),
        0.6rem 0 0 var(--side),
        0.65rem 0 0 var(--side),
        0.7rem 0 0 var(--side),
        0.75rem 0 0 var(--side);
        transform: translateX(-0.375rem);
        background-color: var(--lowlight);
        animation-timing-function: linear;
    }
    
    50.001% {
        width: 0.1rem;
        box-shadow:
        -0.05rem 0 0 var(--side),
        -0.1rem 0 0 var(--side),
        -0.15rem 0 0 var(--side),
        -0.2rem 0 0 var(--side),
        -0.25rem 0 0 var(--side),
        -0.3rem 0 0 var(--side),
        -0.35rem 0 0 var(--side),
        -0.4rem 0 0 var(--side),
        -0.45rem 0 0 var(--side),
        -0.5rem 0 0 var(--side),
        -0.55rem 0 0 var(--side),
        -0.6rem 0 0 var(--side),
        -0.65rem 0 0 var(--side),
        -0.7rem 0 0 var(--side),
        -0.75rem 0 0 var(--side);
        transform: translateX(0.375rem);
        background-color: var(--lowlight);
        animation-timing-function: ease-out;
    }
    
    100% {
        width: var(--coin-size);
        box-shadow:
        0 0 0 var(--side-dark);
    }
`;

const Flip = keyframes`
     0% {
    height: var(--coin-size);
    box-shadow:
      0 0 0 var(--side-dark);
    animation-timing-function: ease-in;
  }
  
  49.999% {
    height: 0.1rem;
    box-shadow:
      0 0.05rem 0 var(--side),
      0 0.1rem 0 var(--side),
      0 0.15rem 0 var(--side),
      0 0.2rem 0 var(--side),
      0 0.25rem 0 var(--side),
      0 0.3rem 0 var(--side),
      0 0.35rem 0 var(--side),
      0 0.4rem 0 var(--side),
      0 0.45rem 0 var(--side),
      0 0.5rem 0 var(--side),
      0 0.55rem 0 var(--side),
      0 0.6rem 0 var(--side),
      0 0.65rem 0 var(--side),
      0 0.7rem 0 var(--side),
      0 0.75rem 0 var(--side);
    transform: translateY(-0.375rem);
    background-color: var(--lowlight);
    animation-timing-function: linear;
  }
  
  50.001% {
    height: 0.1rem;
    box-shadow:
      0 -0.05rem 0 var(--side),
      0 -0.1rem 0 var(--side),
      0 -0.15rem 0 var(--side),
      0 -0.2rem 0 var(--side),
      0 -0.25rem 0 var(--side),
      0 -0.3rem 0 var(--side),
      0 -0.35rem 0 var(--side),
      0 -0.4rem 0 var(--side),
      0 -0.45rem 0 var(--side),
      0 -0.5rem 0 var(--side),
      0 -0.55rem 0 var(--side),
      0 -0.6rem 0 var(--side),
      0 -0.65rem 0 var(--side),
      0 -0.7rem 0 var(--side),
      0 -0.75rem 0 var(--side);
    transform: translateY(0.375rem);
    background-color: var(--lowlight);
    animation-timing-function: ease-out;
  }
  
  100% {
    height: var(--coin-size);
    box-shadow:
      0 
  }
`;

export const SolutionAnimationSection = styled.section`
    width: 100%;
    height: 300vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: var(--radius-8);
    display: flex;
    flex-flow:  row;
    justify-content: space-between;
    align-items: center;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 500px) {
    height: 180vh;

  }
  @media screen and (min-width: 600px) {
    height: 160vh;
  }
  @media screen and (min-width: 768px) {
    height: 140vh;
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const FirstCoin = styled.div`
    --face: #be9d66;
    --lowlight: #111;
    --side: #896c3b;
    --side-dark: #120e08;
    --coin-size: 7rem;
    --coin-face: url(${Coin1});

    opacity: 0.5;
    height: var(--coin-size);
    width: var(--coin-size);
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 90%;
    top: 90%;

    &::before { 
        content: '';
        display: block;
        position: relative;
        height: var(--coin-size);
        width: var(--coin-size);
        border-radius: 50%;
        background-color: var(--face);
        animation: ${Rotate} 3s linear infinite;
        background-image: var(--coin-face);
        background-size: 100% 100%;
        background-position: center;
        background-blend-mode: overlay;
        filter:
        hue-rotate(-40deg)
        brightness(0.75)
        contrast(115%);
        animation-delay: -0.25s;
    }
`;

export const ThirdCoin = styled.div`
    --face: #be9d66;
    --lowlight: #111;
    --side: #896c3b;
    --side-dark: #120e08;
    --coin-size: 7rem;
    --coin-face: url(${Coin2});

    opacity: 0.5;
    height: var(--coin-size);
    width: var(--coin-size);
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::before { 
        content: '';
        display: block;
        position: relative;
        height: var(--coin-size);
        width: var(--coin-size);
        border-radius: 50%;
        background-color: var(--face);
        animation: ${Rotate} 3s linear infinite;
        background-image: var(--coin-face);
        background-size: 100% 100%;
        background-position: center;
        background-blend-mode: overlay;
        animation-delay: -0.25s;
        opacity: 0.5;
    }
`;

export const SecondCoin = styled.div`
    --face: #be9d66;
    --lowlight: #111;
    --side: #896c3b;
    --side-dark: #120e08;
    --coin-size: 7rem;
    --coin-face: url(${Coin3});

    height: var(--coin-size);
    width: var(--coin-size);
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        display: block;
        position: relative;
        height: var(--coin-size);
        width: var(--coin-size);
        border-radius: 50%;
        background-color: var(--face);
        background-image: var(--coin-face);
        background-size: 100% 100%;
        background-position: center;
        background-blend-mode: overlay;
        animation-delay: -0.25s;
        animation: ${Flip} 1s linear infinite;
        opacity: 0.5;
    }
`;