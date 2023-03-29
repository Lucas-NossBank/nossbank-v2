import styled from "styled-components"
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
        --s: 200px; /* the size */
        display: grid;
        border-radius: 50%;
        z-index: 1001;
        align-self: center;
        margin-left: 60px;

        & > img {
            grid-area: 1/1;
            width: 230px;
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
