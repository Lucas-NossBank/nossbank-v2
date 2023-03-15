import { CCardImage, CCarousel, CCarouselItem } from "@coreui/react";
import styled from "styled-components";

export const CarouselDiv = styled(CCarousel)`
    width: 90%;
    height: 40vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
        width: 400px;
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
`;

export const CarouselIt = styled(CCarouselItem)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const Machine01 = styled(CCardImage)`
    width: 100%;
    height: 100%;
    display: block;
`;
export const Machine02 = styled(CCardImage)`
    width: 100%;
    height: 100%;
    display: block;
`;
export const Machine03 = styled(CCardImage)`
    width: 100%;
    height: 100%;
    display: block;
`;
