import { AboutDiv, AboutSection, CircleImage, Divider, SquareImage, ValueImgSpace, WaveDnaBot, WaveDnaUp, XImage } from "./styles"
import mainPhoto01 from "../../../assets/img/main_photos/photo_mobile_05.png"
import mainPhoto02 from "../../../assets/img/main_photos/photo_mobile_06.png"
import mainPhoto03 from "../../../assets/img/main_photos/photo_mobile_07.png"
import mainPhoto04 from "../../../assets/img/main_photos/photo_mobile_11.png"

const AboutSpace = () => {

    return (
        <>
            <AboutSection>
                <AboutDiv>
                    <h1>Sobre a Nossbank</h1>
                    <p>Nosso propósito é atender clientes e parceiros de forma humanizada, personalizada e transparente, sendo referência em qualidade no atendimento e excelência na prestação de serviços de meios de pagamentos.</p>

                </AboutDiv>
                <ValueImgSpace>
                    <SquareImage>
                        <img src={mainPhoto01}  alt="ref value 01"/>
                        <figcaption>Transparência</figcaption>
                    </SquareImage>
                    <SquareImage>
                        <img src={mainPhoto02}  alt="ref value 02"/>
                        <figcaption>Comprometimento</figcaption>
                    </SquareImage>
                    <SquareImage>
                        <img src={mainPhoto03}  alt="ref value 01"/>
                        <figcaption>Respeito</figcaption>
                    </SquareImage>
                    <SquareImage>
                        <img src={mainPhoto04}  alt="ref value 02"/>
                        <figcaption>Integridade</figcaption>
                    </SquareImage>
                    
                </ValueImgSpace>
                <Divider>

                    {/* <WaveDnaUp>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </WaveDnaUp>
                    <WaveDnaBot>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </WaveDnaBot> */}
                </Divider>
            </AboutSection>
        </>
    )

}

export default AboutSpace