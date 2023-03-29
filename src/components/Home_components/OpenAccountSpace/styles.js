import styled from "styled-components";


export const OpenAccountSection = styled.section`   
    width: 100%;
    height: 180vh;
    background-color: var(--color-senary);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    box-shadow: 0px -15px 10px 0px  var(--color-grey-3),0px 15px 10px 0px var(--color-grey-3);
    z-index: 1001;

    & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-30);
    color: var(--main-dark-color);
    font-weight: var(--font-weight-700);
    z-index: 1001;
    text-align: center;
    margin: 50px 0px 30px 0px;
    padding: 0px 20px;
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
  }
  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-24);
    font-weight: var(--font-weight-700);
    text-align: center;
    margin: 20px 0px;
    color: var(--color-primary);
    padding: 0px 30px;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    height: 120vh;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const DualGallery = styled.div`
   --g: 8px; /* the gap */
    display: grid;
    clip-path: inset(1px); /* to avoid visual glitchs */ 

    background-color: var(--maing-dark-color);
    border-radius: var(--radius-16);
    background-color: var(--main-dark-color);

    & > img {
        --_p: calc(-1*var(--g));
        grid-area: 1/1;
        width: 250px; /* control the size */
        aspect-ratio: 1;
        cursor: pointer;
        transition: .4s .1s;
        border-radius: var(--radius-16);
    }

    & > img:first-child {
    clip-path: polygon(0 0, calc(100% + var(--_p)) 0 , 0 calc(100% + var(--_p)))
    }
    & > img:last-child {
    clip-path: polygon(100% 100%, 100% calc(0% - var(--_p)), calc(0% - var(--_p)) 100%)
    }
    &:hover > img:last-child,
    &:hover > img:first-child:hover{
    --_p: calc(50% - var(--g));
    }
    &:hover > img:first-child,
    &:hover > img:first-child:hover + img{
    --_p: calc(-50% - var(--g));
}
`;

export const DownloadSpace = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
`;
export const QRCODESpace = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
`;

export const GoogleStore = styled.div`
  width: 300px;
  height: 100%;
  z-index: 1001;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > a > img {
    width: 100%;
    height: 70%;
  }
`;
export const AppleStore = styled.div`
  width: 300px;
  height: 100%;
  z-index: 1001;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > a > img {
    width: 100%;
    height: 70%;
  }
`;

