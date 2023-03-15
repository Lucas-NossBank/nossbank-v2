import styled from "styled-components";
import formBackground from "../../assets/img/mulher-conferindo-celular-em-pe_mobile.png"

/****************************************
    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portifólio Design
    Description: Using styled-components to improve Header Space.
    ~ *   Header Styles   * ~
            Version: 1.0
****************************************/

export const Divisor = styled.main`
  width: 100%;
  height: 230vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 120vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const FormSection = styled.section`
  width: 100%;
  height: 120vh;
  background-color: var(--color-white-mode);
  background-image: url(${formBackground});
  background-position: center;
  background-repeat:  no-repeat;
  background-size: cover;
  z-index: 1001;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  box-shadow: 0px -15px 10px 0px  var(--color-grey-3),0px 15px 10px 0px var(--color-grey-3);

  & > h1 {
    font-family: var(--font-quartenary-mont);
    font-size: var(--font-subtitle-30);
    color: var(--main-dark-color);
    font-weight: var(--font-weight-700);
    z-index: 1001;
    text-align: center;
    padding: 0px 20px;
    line-height: var(--font-line-height-40);
    text-shadow: rgb(255, 204, 51) 2px 0px 0px, rgb(255, 204, 51) 1.75517px 0.958851px 0px, rgb(255, 204, 51) 1.0806px 1.68294px 0px, rgb(255, 204, 51) 0.141474px 1.99499px 0px, rgb(255, 204, 51) -0.832294px 1.81859px 0px, rgb(255, 204, 51) -1.60229px 1.19694px 0px, rgb(255, 204, 51) -1.97998px 0.28224px 0px, rgb(255, 204, 51) -1.87291px -0.701566px 0px, rgb(255, 204, 51) -1.30729px -1.5136px 0px, rgb(255, 204, 51) -0.421592px -1.95506px 0px, rgb(255, 204, 51) 0.567324px -1.91785px 0px, rgb(255, 204, 51) 1.41734px -1.41108px 0px, rgb(255, 204, 51) 1.92034px -0.558831px 0px;
  }

  @media screen and (min-width: 370px) {
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
  }
  @media screen and (min-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const FormStructure = styled.form`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1010;
  background-color: var(--blur-effect-02);
  border: 1px solid var(--main-dark-color);
  border-radius: var(--radius-8);
  padding: 0px 20px;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-grey-0);
    letter-spacing: 3px;
  }
  & > h3 {
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
  }
  & > button {
    width: 100%;
    height: 40px;
    margin-top: 18px;
    background-color: var(--color-bubbles-pink);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-4);
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    cursor: pointer;
  }

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    width: 600px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const DataSpaceInput = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;
  & > label {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-400);
    color: var(--color-primary);
  }
  & > input {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }
  & > textarea {
    width: 100%;
    height: 60px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
    border-radius: 0px;
    padding-left: 20px;
  }
  & > input::placeholder {
    color: var(--color-grey-5);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    letter-spacing: 1px;
  }
  & > input:focus::placeholder {
    color: transparent;
  }
  & > input:focus {
    outline: none;
    border: 1px solid var(--color-secondary);
  }
  & > p {
    color: var(--color-white-mode);
    margin-top: 5px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    letter-spacing: 3px;
    text-shadow: rgb(236, 31, 50) 2px 0px 0px, rgb(236, 31, 50) 1.75517px 0.958851px 0px, rgb(236, 31, 50) 1.0806px 1.68294px 0px, rgb(236, 31, 50) 0.141474px 1.99499px 0px, rgb(236, 31, 50) -0.832294px 1.81859px 0px, rgb(236, 31, 50) -1.60229px 1.19694px 0px, rgb(236, 31, 50) -1.97998px 0.28224px 0px, rgb(236, 31, 50) -1.87291px -0.701566px 0px, rgb(236, 31, 50) -1.30729px -1.5136px 0px, rgb(236, 31, 50) -0.421592px -1.95506px 0px, rgb(236, 31, 50) 0.567324px -1.91785px 0px, rgb(236, 31, 50) 1.41734px -1.41108px 0px, rgb(236, 31, 50) 1.92034px -0.558831px 0px;
  }
`;

export const DataSpaceTextAreaInput = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;

  & > label {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-400);
    color: var(--color-primary);
  }
  & > input {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }
  & > textarea {
    width: 100%;
    height: 70px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
    border-radius: 0px;
    padding-left: 20px;
  }
  & > input::placeholder {
    color: var(--color-grey-5);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    letter-spacing: 1px;
  }
  & > input:focus::placeholder {
    color: transparent;
  }
  & > input:focus {
    outline: none;
    border: 1px solid var(--color-secondary);
  }
  & > p {
    color: var(--color-white-mode);
    margin-top: 5px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    letter-spacing: 3px;
    text-shadow: rgb(236, 31, 50) 2px 0px 0px, rgb(236, 31, 50) 1.75517px 0.958851px 0px, rgb(236, 31, 50) 1.0806px 1.68294px 0px, rgb(236, 31, 50) 0.141474px 1.99499px 0px, rgb(236, 31, 50) -0.832294px 1.81859px 0px, rgb(236, 31, 50) -1.60229px 1.19694px 0px, rgb(236, 31, 50) -1.97998px 0.28224px 0px, rgb(236, 31, 50) -1.87291px -0.701566px 0px, rgb(236, 31, 50) -1.30729px -1.5136px 0px, rgb(236, 31, 50) -0.421592px -1.95506px 0px, rgb(236, 31, 50) 0.567324px -1.91785px 0px, rgb(236, 31, 50) 1.41734px -1.41108px 0px, rgb(236, 31, 50) 1.92034px -0.558831px 0px;
  }
`;