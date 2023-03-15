import styled, { keyframes } from "styled-components";

const Move = keyframes`
    0%{
    transform: translateY(0px);
    }
    25%{
        transform: translateY(88px);
    }
    50%{
        transform: translateY(0px);
    }
    75%{
        transform: translateY(88px);
    }
    100%{
        transform: translateY(0px);
    }
`;

const Grow = keyframes`
    0%, 50%, 75%, 100% {
    transform: scaleX(0.7) scaleY(0.7);
    }
    10%, 60% {
        transform: scaleX(1) scaleY(1);
    }
    35%, 85% {
        transform: scaleX(0.4) scaleY(0.4);
    }
`;

export const AboutSection = styled.section`
    width: 100%;
    height: 120vh;
    background-color: var(--color-white-mode);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const AboutDiv = styled.div`
    width: 90%;
    height: 45vh;
    background-color: var(--color-senary);
    border-radius: var(--radius-8);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-30);
    color: var(--main-dark-color);
    font-weight: var(--font-weight-700);
    z-index: 1001;
    text-align: center;
    margin: 50px 0px 30px 0px;
    padding: 0px 20px;
    letter-spacing: 2px;
    line-height: var(--font-line-height-40);
    text-shadow: var(--main-light-color) 1px 0px 0px, var(--main-light-color) 1.75517px 0.958851px 0px, var(--main-light-color) 1.0806px 1.68294px 0px, var(--main-light-color) 0.141474px 1.99499px 0px, var(--main-light-color) -0.832294px 1.81859px 0px, var(--main-light-color) -1.60229px 1.19694px 0px, var(--main-light-color) -1.97998px 0.28224px 0px, var(--main-light-color) -1.87291px -0.701566px 0px, var(--main-light-color) -1.30729px -1.5136px 0px, var(--main-light-color) -0.421592px -1.95506px 0px, var(--main-light-color) 0.567324px -1.91785px 0px, var(--main-light-color) 1.41734px -1.41108px 0px, var(--main-light-color) 1.92034px -0.558831px 0px;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-600);
    text-align: center;
    margin-bottom: 10px;
    color: var(--color-white-mode);
    padding: 0px 30px;
    line-height: var(--font-line-height-40);
  }

  @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
        width: 700px;
    }
    @media screen and (min-width: 1024px) {
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
`;

export const ValueImgSpace = styled.div`
    width: 100%;
    height: 40vh;
    display: grid;
    grid-auto-flow :column;
    place-content: center;
    gap: 40px;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

export const XImage = styled.figure`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    height: 180px;
 
    & > img { 
        width: 150px;
        height: 150px;
        --g:#0000 ,#000 .5deg 90deg,#0000 91deg;
        --m:
            conic-gradient(from 45deg ,var(--g)) 20px 0  no-repeat,
            conic-gradient(from 135deg,var(--g)) 0 20px  no-repeat,
            conic-gradient(from 225deg,var(--g)) -20px 0 no-repeat,
            conic-gradient(from 315deg,var(--g)) 0 -20px no-repeat;
        -webkit-mask: var(--m);
                mask: var(--m);
        transition: .3s linear;
        filter: grayscale(.5);
        cursor: pointer;
    }

    & > img:hover { 
        -webkit-mask-position: 0 0;
          mask-position: 0 0;
        filter: grayscale(0);
    }

    & > figcaption {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-700);
        color: var(--main-dark-color);
    }
`;

export const CircleImage = styled.figure`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    height: 180px;

    & > img { 
        width: 150px;
        height: 150px;
        --m:
        radial-gradient(circle farthest-side at right,#000 99%,#0000) 
        0 100%/46% 92% no-repeat,
        radial-gradient(circle farthest-side at left ,#000 99%,#0000) 
        100% 0/46% 92% no-repeat;
        -webkit-mask: var(--m);
            mask: var(--m);
        filter: grayscale(.5);
        transition: .3s linear;
        cursor: pointer;  
    }

    & >  img:hover {
        -webkit-mask-position: 7.5% 50%,92.5% 50%;
          mask-position: 7.5% 50%,92.5% 50%;
        filter: grayscale(0); 
    }

    & > figcaption {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-700);
        color: var(--main-dark-color);
    }
`;

export const SquareImage = styled.figure`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    height: 180px;

    & > img {
        width: 150px;
        height: 150px;
        --_g: 10% /45% 45% no-repeat linear-gradient(#000 0 0);
        --m:
            left   var(--_i,0%) top    var(--_g),
            bottom var(--_i,0%) left   var(--_g),
            top    var(--_i,0%) right  var(--_g),
            right  var(--_i,0%) bottom var(--_g);
        -webkit-mask: var(--m);
                mask: var(--m);
        filter: grayscale();
        transition: .3s linear;
        cursor: pointer;
    }

    & > img:hover {
        --_i: 10%;
        filter: grayscale(0);
    }

    & > figcaption {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-700);
        color: var(--main-dark-color);
    }
`;

export const Divider = styled.div`
    width: 90%;
    height: 88px;
    display: flex;
    position: relative;
`;

export const WaveDnaUp = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    perspective: 100px; 

    & > div { 
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 100%;
    }

    & > div::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--main-dark-blue);
        border-radius: 50%;
        border: 1px solid black;
    }

    & > div::before {
        background-color: var(--main-yellow);
    }

    & > div {
        animation: ${Move} 3s ease-in-out infinite reverse; 
    }

    & > div::before {
        animation: ${Grow} 3s linear infinite reverse;
    }

    & > div:nth-child(10){
  animation-delay: 0s;
    }
    & > div:nth-child(9){
    animation-delay: -0.1s;
    }
    & > div:nth-child(8){
    animation-delay: -0.2s;
    }
    & > div:nth-child(7){
    animation-delay: -0.3s;
    }
    & > div:nth-child(6){
    animation-delay: -0.4s;
    }
    & > div:nth-child(5){
    animation-delay: -0.5s;
    }
    & > div:nth-child(4){
    animation-delay: -0.6s;
    }
    & > div:nth-child(3){
    animation-delay: -0.7s;
    }
    & > div:nth-child(2){
    animation-delay: -0.8s;
    }
    & > div:nth-child(1){
    animation-delay: -0.9s;
    }

`;

export const WaveDnaBot = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    perspective: 100px; 

    & > div { 
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 100%;
    }

    & > div::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--main-dark-color);
        border-radius: 50%;
        border: 1px solid black;
    }

    & > div {
        animation: ${Move} 3s ease-in-out infinite;
    }

    & > div::before {
        animation: ${Grow} 3s linear infinite;
    }

    & > div:nth-child(10){
    animation-delay: 0.75s;
    }
    & > div:nth-child(9){
    animation-delay: 0.65s;
    }
    & > div:nth-child(8){
    animation-delay: 0.55s;
    }
    & > div:nth-child(7){
    animation-delay: 0.45s;
    }
    & > div:nth-child(6){
    animation-delay: 0.35s;
    }
    & > div:nth-child(5){
    animation-delay: 0.25s;
    }
    & > div:nth-child(4){
    animation-delay: 0.15s;
    }
    & > div:nth-child(3){
    animation-delay: 0.05s;
    }
    & > div:nth-child(2){
    animation-delay: -0.05s;
    }
    & > div:nth-child(1){
    animation-delay: -0.15s;
    }
`;

