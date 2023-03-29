import styled from "styled-components";

export const PropagSection = styled.section`
    width: 100%;
    height: 150vh;
    background-color: var(--main-light-color);
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-30);
    color: var(--color-primary);
    font-weight: var(--font-weight-700);
    z-index: 1001;
    text-align: center;
    margin: 50px 0px 30px 0px;
    line-height: var(--font-line-height-40);
    /* text-shadow: var(--main-light-color) 1px 0px 0px, var(--main-light-color) 1.75517px 0.958851px 0px, var(--main-light-color) 1.0806px 1.68294px 0px, var(--main-light-color) 0.141474px 1.99499px 0px, var(--main-light-color) -0.832294px 1.81859px 0px, var(--main-light-color) -1.60229px 1.19694px 0px, var(--main-light-color) -1.97998px 0.28224px 0px, var(--main-light-color) -1.87291px -0.701566px 0px, var(--main-light-color) -1.30729px -1.5136px 0px, var(--main-light-color) -0.421592px -1.95506px 0px, var(--main-light-color) 0.567324px -1.91785px 0px, var(--main-light-color) 1.41734px -1.41108px 0px, var(--main-light-color) 1.92034px -0.558831px 0px; */
    padding: 0px 5%;
    text-shadow: 3px 5px 2px #474747;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-700);
    text-align: center;
    margin-bottom: 10px;
    color: var(--color-white-mode);
    padding: 0px 5%;
  }

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
        width: 35%;
        height: 100%;
        background-color: var(--color-senary);
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
`;

export const ImagePropagSpace = styled.div`
    position: relative;
    width: 180px;
    height: 40vh;
    margin-top: 100px;
    background: rgba(0, 0, 0, 0);
    transform: rotate(-30deg) skew(25deg) scale(0.8);
    transition: 0.5s;
    border-radius: var(--radius-16);

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: 0.5s; 
        box-shadow: -30px 30px 0px 0px rgba(0,0,0,0.1);
        border-radius: var(--radius-16);

    }

    &:hover img:nth-child(4) {
        transform: translate(160px, -160px);
        opacity: 1;
    }

    &:hover img:nth-child(3) {
        transform: translate(120px, -120px);
        opacity: 0.8;
    }
    &:hover img:nth-child(2) {
        transform: translate(80px, -80px);
        opacity: 0.6;
    }
    &:hover img:nth-child(1) {
        transform: translate(40px, -40px);
        opacity: 0.4;
    }

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
    @media screen and (min-width: 1200px) {
        position: relative;
        width: 200px;
        height: 300px;
        margin-top: 100px;
        background: rgba(0, 0, 0, 0);
        transform: rotate(-30deg) skew(25deg) scale(0.8);
        transition: 0.5s;
        border-radius: var(--radius-16);
    }
    @media screen and (max-width: 1920px) {
    }
`;

export const Machine01 = styled.div`
    width: 500px;
    height: 500px;
    background-color: yellow;

    & > img {
        width: 30%;
        height: 30%;
    }
`;
export const Machine02 = styled.div`
    width: 500px;
    height: 500px;
    background-color: blue;

    & > img {
        width: 30px;
        height: 30px;
    }
`;
export const Machine03 = styled.div`
    width: 500px;
    height: 500px;
    background-color: red;

    & > img {
        width: 30px;
        height: 30px;
    }
`;
export const Machine04 = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
`;