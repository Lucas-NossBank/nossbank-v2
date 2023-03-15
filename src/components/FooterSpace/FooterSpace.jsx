import { FooterSection, FooterCTA, FooterIcons, IconDiv, IconText, Container, FooterInfoSpace, FooterLogoSpace, LogoDiv, LogoTextDiv, FollowUsDiv, UserfulLinks, TitlesShine, Subscribe, SubInfo, FooterEmailForm, CopyRightSpace, MenuCopyRight, NavMenu, CopyRightText } from "./styles"
import { SiGooglemaps } from "react-icons/si"
import { IoIosCall } from "react-icons/io"
import { MdEmail } from "react-icons/md" 
import { FaTelegramPlane } from "react-icons/fa" 
import { IconContext } from "react-icons"
import logo from "../../assets/logo/logo.png"

const FooterSpace = () => {

    return (
        <>
            <FooterSection>
                <Container>
                    <FooterCTA>
                        <FooterIcons>
                           
                                <IconDiv>
                                <IconContext.Provider
                                    value={{
                                        color: "orange",
                                        size: "1.8em",
                                    }}
                                    >
                                    <SiGooglemaps />
                                </IconContext.Provider>
                                    <IconText>
                                        <h4>Localização</h4>
                                        <span>Alameda Santos 700, conj.132 - Cerqueira Cesar, São Paulo, SP - 01418100</span>
                                    </IconText>
                                </IconDiv>
                       
                                <IconDiv>
                                <IconContext.Provider
                                    value={{
                                        color: "orange",
                                        size: "1.8em",
                                    }}
                                    >
                                    <IoIosCall />
                                </IconContext.Provider>
                                    <IconText>
                                        <h4>Contato</h4>
                                        <span>+55 (11) 2367-6427</span>
                                    </IconText>
                                </IconDiv>

                                <IconDiv>
                                <IconContext.Provider
                                    value={{
                                        color: "orange",
                                        size: "1.8em",
                                    }}
                                    >
                                    <MdEmail />
                                </IconContext.Provider>
                                    <IconText>
                                        <h4>Fale conosco</h4>
                                        <span>contato@nossbank.com.br</span>
                                    </IconText>
                                </IconDiv>
                      
                        </FooterIcons>
                    </FooterCTA>

                    
                    <FooterInfoSpace>
                            <FooterLogoSpace>
                              
                                <LogoDiv>
                                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo"/></a>
                                </LogoDiv>
                                <LogoTextDiv>
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.</p>
                                </LogoTextDiv>
                                <FollowUsDiv>
                                    <h2>Mídias Sociais</h2>
                                    <ul>
                                    <li className="facebook">
                                        <a href="#index">
                                            <i className="fa fa-facebook fa-2x" aria-hidden="true">
                                            </i>
                                        </a>
                                    </li>

                                    <li className="twitter">
                                        <a href="#index">
                                            <i className="fa fa-twitter fa-2x" aria-hidden="true">
                                            </i>
                                        </a>
                                    </li>

                                    <li className="instagram">
                                        <a href="#index">
                                            <i className="fa fa-instagram fa-2x" aria-hidden="true">
                                            </i>
                                        </a>
                                    </li>

                                    {/* <li className="google">
                                        <a href="#index">
                                            <i className="fa fa-google fa-2x" aria-hidden="true">
                                            </i>
                                        </a>
                                    </li> */}

                                    <li className="whatsapp">
                                        <a href="#index">
                                            <i className="fa fa-whatsapp fa-2x" aria-hidden="true">
                                            </i>
                                        </a>
                                    </li>

                                    </ul>
                                </FollowUsDiv>
                           
                            </FooterLogoSpace>



                            <UserfulLinks>
                                <TitlesShine>
                                    <h3>Links Úteis</h3>
                                </TitlesShine>
                                    <ul>
                                        <li><a href="index">Inicio</a></li>
                                        <li><a href="index">Sobre</a></li>
                                        <li><a href="index">Serviços</a></li>
                                        <li><a href="index">Beneficios</a></li>
                                        <li><a href="index">Contato</a></li>
                                        <li><a href="index">Companhias</a></li>
                                        <li><a href="index">Nosso time</a></li>
                                        <li><a href="index">Ultimas Noticias</a></li>
                                    </ul>
                            </UserfulLinks>
                     
                            <Subscribe>
                               
                                <TitlesShine>
                                    <h3>Inscreva-se</h3>
                                </TitlesShine>
                                <SubInfo>
                                    <p>Fique sempre por dentro de todas as nossas novidades, só o que precisamos é do seu e-mail.</p>
                                </SubInfo>
                                <FooterEmailForm>
                                   
                                    <input type="email" placeholder="Digite seu e-mail"/>
                                        <button>
                                        <IconContext.Provider
                                            value={{
                                                color: "var(--color-grey-0)",
                                                size: "1.8em",
                                            }}
                                            >
                                            <FaTelegramPlane />
                                        </IconContext.Provider>
                                            
                                        </button>
                                  
                                </FooterEmailForm>
                            </Subscribe>
                           
                    </FooterInfoSpace>
                </Container>
                <CopyRightSpace>
                  
                    <CopyRightText>
                        <p>Copyright &copy; 2018, All Right Reserved <span>Nossbank</span></p>
                    </CopyRightText>
                    
                    
                    <MenuCopyRight>
                        <NavMenu>
                            <li><a href="index">Inicio</a></li>
                            <li><a href="index">Termos</a></li>
                            <li><a href="index">Contrato</a></li>
                            <li><a href="index">Contato</a></li>
                        </NavMenu>
                    </MenuCopyRight>           
                
                </CopyRightSpace>
               
            </FooterSection>
        </>
    )
}

export default FooterSpace