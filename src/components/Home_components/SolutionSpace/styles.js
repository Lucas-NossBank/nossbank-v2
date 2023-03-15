import styled from "styled-components";

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
  height: 300vh;
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
    height: 150vh;
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

export const SolutionSection = styled.section`
  width: 100%;
  height: 150vh;
  background-color: var(--color-white-mode);
  z-index: 1001;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-30);
    color: var(--main-dark-color);
    font-weight: var(--font-weight-800);
    z-index: 1001;
    text-align: center;
    margin-top: 50px;
    line-height: var(--font-line-height-40);
    
  }

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 500px) {

  }
  @media screen and (min-width: 600px) {
 
  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1024px) {
    width: 65%;
    height: 100%;
    background-color: var(--color-white-mode);
    z-index: 1001;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const ParallaxDiv = styled.div`
  width: 85%;
  height: 150vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  position: relative;
  z-index: 1001;
  padding: 20px 0px;
  overflow: auto;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    
  }
  @media screen and (min-width: 768px) {
 
  }
  @media screen and (min-width: 820px) {
  
  }
  @media screen and (min-width: 1024px) {

  }
  @media screen and (min-width: 1200px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const ContentDiv = styled.div`
  --s: 250px;   /* the size of the image */
  --b: 4px;     /* the border thickness*/
  --g: 8px;    /* the gap */
  --c: var(--main-light-color); /* the color */

  width: 230px;
  height: 230px;
  background-color: var(--color-senary);
  border: 2px solid var(--color-primary);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  border-radius: var(--radius-8);
  aspect-ratio: 1;
  outline: calc(var(--s)/2.5) solid var(--blur-effect-01);
  outline-offset: calc(var(--s)/-2);
  cursor: pointer;
  transition: 0.3s;
  z-index: 1001;
  margin-bottom: 20px;

  & > h3 {
    font-family: var(--font-secondary-inter);
    text-align: center;
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    line-height: var(--font-line-height-20);
    color: var(--color-white-mode);
  }

  & > p {
    font-family: var(--font-quartenary-mont);
    text-align: center;
    font-weight: var(--font-weight-500);
    font-size: var(--font-text-12);
    line-height: var(--font-line-height-24);
    color: var(--color-white-mode);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  &:hover {
    outline: var(--b) solid var(--c);
    outline-offset: var(--g);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 505px) {
    --s: 220px;   /* the size of the image */
    width: 200px;
    height: 200px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 160px;
    }
  }
  @media screen and (min-width: 600px) {
    --s: 20px;   /* the size of the image */
    width: 200px;
    height: 200px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 160px;
    }
  
  }
  @media screen and (min-width: 630px) {
    --s: 260px;   /* the size of the image */
    width: 240px;
    height: 240px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 160px;
    }
  
  }
  @media screen and (min-width: 768px) {
    --s: 260px;   /* the size of the image */
    width: 240px;
    height: 240px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 200px;
    }
  }
  @media screen and (min-width: 1024px) {
    --s: 370px;   /* the size of the image */
    width: 350px;
    height: 350px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 200px;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const ContentDiv2 = styled.div`
  --s: 250px;   /* the size of the image */
  --b: 4px;     /* the border thickness*/
  --g: 8px;    /* the gap */
  --c: var(--main-dark-color); /* the color */

  width: 230px;
  height: 230px;
  background-color: var(--color-primary);
  border: 2px solid var(--main-yellow);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  border-radius: var(--radius-8);
  aspect-ratio: 1;
  outline: calc(var(--s)/2.5) solid var(--blur-effect-01);
  outline-offset: calc(var(--s)/-2);
  cursor: pointer;
  transition: 0.3s;
  z-index: 1001;
  margin-bottom: 20px;
  
  & > h3 {
    font-family: var(--font-secondary-inter);
    text-align: center;
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    line-height: var(--font-line-height-20);
    color: var(--main-dark-color);
  }

  & > p {
    font-family: var(--font-quartenary-mont);
    text-align: center;
    font-weight: var(--font-weight-500);
    font-size: var(--font-text-12);
    line-height: var(--font-line-height-24);
    color: var(--main-dark-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
  }

  &:hover {
    outline: var(--b) solid var(--c);
    outline-offset: var(--g);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 505px) {
    --s: 220px;   /* the size of the image */
    width: 200px;
    height: 200px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 160px;
    }
  }
  @media screen and (min-width: 600px) {
    --s: 220px;   /* the size of the image */
    width: 200px;
    height: 200px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 160px;
    }
  
  }

  @media screen and (min-width: 630px) {
    --s: 260px;   /* the size of the image */
    width: 240px;
    height: 240px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 160px;
    }
  
  }

  @media screen and (min-width: 768px) {
    --s: 260px;   /* the size of the image */
    width: 240px;
    height: 240px;
    padding-top: 50px;

    & > p {
      white-space: nowrap;
      min-width: 200px;

    }
  }
  @media screen and (min-width: 1024px) {
    --s: 370px;   /* the size of the image */
    width: 350px;
    height: 350px;
    padding-top: 50px;

    & > p {
      white-space: pre-wrap;
      min-width: 200px;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;
