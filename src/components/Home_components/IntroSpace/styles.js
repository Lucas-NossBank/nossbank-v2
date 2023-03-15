import styled from "styled-components";
import banner1 from "../../../assets/img/banners/banner_12.jpg"
import banner2 from "../../../assets/img/banners/banner_14.jpg"
import banner3 from "../../../assets/img/banners/banner_15.jpg"
import banner4 from "../../../assets/img/banners/banner_16.jpg"
import defaultBanner from "../../../assets/img/banners/banner_20.jpg"

const changeDisplay = (hover) => {
    switch (hover) {
        case 1:
            return "none";
        default:
            return "flex";
    }
}
const changeBackground = (background) => {
    switch (background) {
        case 1:
            return banner1;
        case 2:
            return banner2;
        case 3:
            return banner3;
        case 4:
            return banner4;
        default:
            return defaultBanner;
    }
}

export const IntroSection = styled.section`
    width: 100%;
    height: 150vh;
    background-color: var(--color-navigation);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px -10px 5px 0px #272974,0px 15px 5px 0px #272974;
    z-index: 1001;
    border: 2px solid var(--main-dark-color);
    padding: 0px 10px;

    & > h1 {
        text-align: center;
        font-size: var(--font-subtitle-30);
        font-weight: var(--font-weight-700);
        color: var(--color-white-mode);
        font-family: var(--font-primary-nunito);
        letter-spacing: 2px;
        line-height: var(--);
    }

    & > h2 {
            font-family: var(--font-primary-nunito);
            font-size: var(--font-subtitle-24);
            font-weight:var(--font-weight-700);
            letter-spacing: 2px;
            width: 100%;
            color: var(--color-primary);
            text-transform: uppercase;

        }


    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
        padding: 0px 65px;
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
`;

/* --------------- ~> Skip Line <~ --------------- */

export const MainText = styled.div`
    width: 100%;
    height: 150px;
    display: ${({hover}) => changeDisplay(hover)};
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h3 {
        text-align: center;
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-600);
        color: var(--color-white-mode);
        font-family: var(--font-primary-nunito);
    }
`;

/* --------------- ~> Skip Line <~ --------------- */

export const FirstTextChange = styled.div`
    width: 100%;
    height: 150px;
    display: ${({ hover1 }) => (hover1 ? "flex" : "none")};
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h3 {
        text-align: center;
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-600);
        color: var(--color-white-mode);
        background-color: var(--blur-effect-02);
        width: 90%;
        height: 50px;
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-8);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        font-family: var(--font-primary-nunito);
    }
`;
export const SecondTextChange = styled.div`
    width: 100%;
    height: 150px;
    display: ${({ hover2 }) => (hover2 ? "flex" : "none")};
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h3 {
        text-align: center;
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-600);
        color: var(--main-dark-color);
        font-family: var(--font-quartenary-mont);
    }
`;
export const ThirdTextChange = styled.div`
    width: 100%;
    height: 150px;
    display: ${({ hover3 }) => (hover3 ? "flex" : "none")};
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h3 {
        text-align: center;
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-600);
        color: var(--color-white-mode);
        font-family: var(--font-quartenary-mont);
    }
`;
export const ForthTextChange = styled.div`
    width: 100%;
    height: 150px;
    display: ${({ hover4 }) => (hover4 ? "flex" : "none")};
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h3 {
        text-align: center;
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-600);
        color: var(--color-white-mode);
        font-family: var(--font-quartenary-mont);
    }
`;

export const ImageDiv = styled.div`
    width: 60%;
    height: 100%;
`;

export const ParallaxSpace = styled.div`
    width: 80%;
    height: 50vh;
    background-color: aliceblue;
    background-image: url(${({background}) => changeBackground(background)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 1s ease-in-out;
    margin: 0;
    /* display: grid;
    place-content: center;  */
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-8);

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
        justify-content: flex-start;
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
`;

export const ImageSpace = styled.div`
        --g: 8px;   /* the gap */
        --s: 200px; /* the size */
        display: grid;
        border-radius: 50%;
        z-index: 1001;
        align-self: center;

        & > img {
            grid-area: 1/1;
            width: 180px;
            aspect-ratio: 1;
            object-fit: cover;
            border: 5px solid var(--color-primary);
            border-radius: 50%;
            transform: translate(var(--_x,0),var(--_y,0));
            cursor: pointer;
            z-index: 1001;
            transition: .3s, z-index 0s .3s; 
        }

        & > img:hover {
            --_i: 1;
            z-index: 1002;
            transition: transform .2s, clip-path .3s .2s, z-index 0s;
        }
        
        &:hover img { 
            transform: translate(0,0);
        }

        & > img:nth-child(1) {
            clip-path: polygon(50% 50%,calc(50%*var(--_i,0)) calc(120%*var(--_i,0)),0 calc(100%*var(--_i,0)),0 0,100% 0,100% calc(100%*var(--_i,0)),calc(100% - 50%*var(--_i,0)) calc(120%*var(--_i,0)));
            --_y: calc(-1*var(--g))    
        }
        & > img:nth-child(2) {
            clip-path: polygon(50% 50%,calc(100% - 120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100% - 100%*var(--_i,0)) 0,100% 0,100% 100%,calc(100% - 100%*var(--_i,0)) 100%,calc(100% - 120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
             --_x: var(--g)    
        }
        & > img:nth-child(3) {
            clip-path: polygon(50% 50%,calc(100% - 50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)),100% calc(100% - 120%*var(--_i,0)),100% 100%,0 100%,0 calc(100% - 100%*var(--_i,0)),calc(50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)));
            --_y: var(--g)   
        }
        & > img:nth-child(4) {
            clip-path: polygon(50% 50%,calc(120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100%*var(--_i,0)) 0,0 0,0 100%,calc(100%*var(--_i,0)) 100%,calc(120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
            --_x: calc(-1*var(--g))  
        } 

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
        --g: 8px;   /* the gap */
        --s: 400px; /* the size */
        display: grid;
        border-radius: 50%;
        z-index: 1001;
        align-self: center;
        margin-left: 60px;

        & > img {
            grid-area: 1/1;
            width: 330px;
            aspect-ratio: 1;
            object-fit: cover;
            border: 5px solid var(--color-primary);
            border-radius: 50%;
            transform: translate(var(--_x,0),var(--_y,0));
            cursor: pointer;
            z-index: 1001;
            transition: .3s, z-index 0s .3s; 
        }

        & > img:hover {
            --_i: 1;
            z-index: 1002;
            transition: transform .2s, clip-path .3s .2s, z-index 0s;
        }
        
        &:hover img { 
            transform: translate(0,0);
        }

        & > img:nth-child(1) {
            clip-path: polygon(50% 50%,calc(50%*var(--_i,0)) calc(120%*var(--_i,0)),0 calc(100%*var(--_i,0)),0 0,100% 0,100% calc(100%*var(--_i,0)),calc(100% - 50%*var(--_i,0)) calc(120%*var(--_i,0)));
            --_y: calc(-1*var(--g))    
        }
        & > img:nth-child(2) {
            clip-path: polygon(50% 50%,calc(100% - 120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100% - 100%*var(--_i,0)) 0,100% 0,100% 100%,calc(100% - 100%*var(--_i,0)) 100%,calc(100% - 120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
             --_x: var(--g)    
        }
        & > img:nth-child(3) {
            clip-path: polygon(50% 50%,calc(100% - 50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)),100% calc(100% - 120%*var(--_i,0)),100% 100%,0 100%,0 calc(100% - 100%*var(--_i,0)),calc(50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)));
            --_y: var(--g)   
        }
        & > img:nth-child(4) {
            clip-path: polygon(50% 50%,calc(120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100%*var(--_i,0)) 0,0 0,0 100%,calc(100%*var(--_i,0)) 100%,calc(120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
            --_x: calc(-1*var(--g))  
        } 
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
`;


/*------------------------- Skip line -------------------------*/

export const NoticeBoard = styled.section`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
`;


export const NoticeCard = styled.article`
    /* position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0);
    transform: translateX(-50%) translateY(-50%) translateZ(0); */
    position: relative;
    width: 320px;
    height: 48vh;
    background-color: var(--blur-effect-02);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    overflow: hidden;
    -webkit-transition: box-shadow 0.5s;
    transition: box-shadow 0.5s;
    border-radius: var(--radius-8);
    margin-right: 20px;

  &:hover {
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.3);
  }

  &:hover .headerS {
    height: 130px;
  }

  &:hover .headerS .imageS {
    opacity: 0.6;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  &:hover .cardBodyS {
    height: 300px;
  }

  &:hover .cardPS {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
`;

export const NoticeCardHeader = styled.header`
  height: 245px;
  overflow: hidden;
  background-color: var(--main-dark-color);
  -webkit-transition: height 0.5s;
  transition: height 0.5s;

  & > a { 
    color: inherit;
    text-decoration: none;
  }

  & > a > img {
    width: 100%;
    display: block;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, transform 0.5s;
    transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  }
`;

export const NoticeCardDate = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  padding-top: 10px;
  font-family: var(--font-primary-nunito);
  background-color: var(--button-color-red);
  border-radius: 50%;
  color: var(--color-white-mode);
  text-align: center;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 1px;
`;

export const NoticeCardDay = styled.span`
  font-size: var(--font-text-14);
`;

export const NoticeCardMonth = styled.span`
  text-transform: uppercase;
  font-size: 10px;
`;

export const NoticeCardBody = styled.section`
  position: relative;
  height: 185px;
  padding: 20px;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  display: flex; 
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  & > h2 > a {
    margin: 0;
    padding: 0 0 10px 0;
    color: var(--color-white-mode);
    font-family: var(--font-primary-nunito);
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
  }

  & > h3 {
    margin-top: 10px;
    padding: 0 0 10px 0;
    font-size: 19px;
    font-family: var(--font-primary-nunito);
    color: coral;
  }

  & > p {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 60px;
    margin: 0;
    padding: 0;
    color: var(--color-grey-5);
    font-family: var(--font-primary-nunito);
    line-height: 27px;
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
`;

export const NoticeCardCategory = styled.div`
    position: absolute;
    top: -30px;
    left: 0;
    height: 30px;
    padding: 0 15px;
    background-color: coral;

  & > a { 
    color: #fff;
    text-transform: uppercase;
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-12);
    line-height: 25px;
    text-decoration: none;
  }
`;

export const NoticeCardFooter = styled.footer`
  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  color: #A3A9A2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterClock = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: -2px 0 0 2px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    & > span {
        font-size: var(--font-text-14);
        color: var(--color-white-mode);
        padding-left: 10px;
    }
`;
export const FooterComment = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: -2px 0 0 2px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 10px;

    & > span {
        font-size: var(--font-text-14);
        color: var(--color-white-mode);
        padding-left: 10px;
    }
`;