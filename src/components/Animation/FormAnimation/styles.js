import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

/****************************************
    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portifólio Design
    Description: Using styled-components to improve Header Space.
    ~ *   Header Styles   * ~
            Version: 1.0
****************************************/

const cubes = keyframes`
   from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }
    to {
        transform: scale(20) rotate(960deg) translate(-50%, -50%);
        opacity: 0;
    } 
`;

export const UlCubes = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--color-white-mode);
    overflow: hidden;
    z-index: 1;

    & > li {
        position: absolute;
        top: 80vh;
        left: 45vw;
        width: 10px;
        height: 10px;
        border: solid 1px var(--main-dark-color);
        color: transparent;
        transform-origin: top left;
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        animation: ${cubes} 13s ease-in forwards infinite; 
    }

    & > li:nth-child(0) {
    animation-delay: 0s;
    left: 61vw;
    top: 41vh;
    }

    & > li:nth-child(1) {
        animation-delay: 2s;
        left: 66vw;
        top: 43vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(2) {
        animation-delay: 4s;
        left: 72vw;
        top: 98vh;
    }

    & > li:nth-child(3) {
        animation-delay: 6s;
        left: 97vw;
        top: 50vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(4) {
        animation-delay: 8s;
        left: 41vw;
        top: 96vh;
    }

    & > li:nth-child(5) {
        animation-delay: 10s;
        left: 90vw;
        top: 29vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(6) {
        animation-delay: 12s;
        left: 64vw;
        top: 90vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(7) {
        animation-delay: 14s;
        left: 99vw;
        top: 2vh;
    }

    & > li:nth-child(8) {
        animation-delay: 16s;
        left: 9vw;
        top: 67vh;
    }

    & > li:nth-child(9) {
        animation-delay: 18s;
        left: 39vw;
        top: 62vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(10) {
        animation-delay: 20s;
        left: 83vw;
        top: 87vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(11) {
        animation-delay: 22s;
        left: 11vw;
        top: 15vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(12) {
        animation-delay: 24s;
        left: 18vw;
        top: 89vh;
    }

    & > li:nth-child(13) {
        animation-delay: 26s;
        left: 36vw;
        top: 31vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(14) {
        animation-delay: 28s;
        left: 79vw;
        top: 74vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(15) {
        animation-delay: 30s;
        left: 20vw;
        top: 75vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(16) {
        animation-delay: 32s;
        left: 27vw;
        top: 18vh;
    }

    & > li:nth-child(17) {
        animation-delay: 34s;
        left: 25vw;
        top: 84vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(18) {
        animation-delay: 36s;
        left: 55vw;
        top: 49vh;
    }

    & > li:nth-child(19) {
        animation-delay: 38s;
        left: 54vw;
        top: 35vh;
    }

    & > li:nth-child(20) {
        animation-delay: 40s;
        left: 92vw;
        top: 82vh;
    }

    & > li:nth-child(21) {
        animation-delay: 42s;
        left: 1vw;
        top: 25vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(22) {
        animation-delay: 44s;
        left: 14vw;
        top: 39vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(23) {
        animation-delay: 46s;
        left: 32vw;
        top: 20vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(24) {
        animation-delay: 48s;
        left: 89vw;
        top: 45vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(25) {
        animation-delay: 50s;
        left: 86vw;
        top: 10vh;
    }

    & > li:nth-child(26) {
        animation-delay: 52s;
        left: 58vw;
        top: 13vh;
    }

    & > li:nth-child(27) {
        animation-delay: 54s;
        left: 6vw;
        top: 58vh;
    }

    & > li:nth-child(28) {
        animation-delay: 56s;
        left: 77vw;
        top: 6vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(29) {
        animation-delay: 58s;
        left: 44vw;
        top: 61vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(30) {
        animation-delay: 60s;
        left: 3vw;
        top: 0vh;
    }

    & > li:nth-child(31) {
        animation-delay: 62s;
        left: 69vw;
        top: 9vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(32) {
        animation-delay: 64s;
        left: 73vw;
        top: 22vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(33) {
        animation-delay: 66s;
        left: 80vw;
        top: 71vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(34) {
        animation-delay: 68s;
        left: 15vw;
        top: 34vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(35) {
        animation-delay: 70s;
        left: 34vw;
        top: 56vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(36) {
        animation-delay: 72s;
        left: 49vw;
        top: 67vh;
    }

    & > li:nth-child(37) {
        animation-delay: 74s;
        left: 24vw;
        top: 94vh;
        border-color: #29a2ff;
    }

    & > li:nth-child(38) {
        animation-delay: 76s;
        left: 45vw;
        top: 79vh;
    }

    & > li:nth-child(39) {
        animation-delay: 78s;
        left: 51vw;
        top: 53vh;
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
