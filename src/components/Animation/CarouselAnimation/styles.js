
import styled from "styled-components";

export const CarouselDiv = styled.div`
    width: 90%;
    height: 40vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    .mySwiper {
        width: 100%;
        height: 40vh;
    }

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

export const SwiperImgDiv = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 1;

    & > img {
        width: 100%;
        height: 100%;
    }
`;
