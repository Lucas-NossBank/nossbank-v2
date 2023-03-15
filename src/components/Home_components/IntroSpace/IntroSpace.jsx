import { FirstTextChange, ForthTextChange, ImageSpace, IntroSection, MainText, ParallaxSpace, SecondTextChange,  NoticeCard,  NoticeCardBody,  NoticeCardCategory,  NoticeCardDate,  NoticeCardDay,  NoticeCardFooter,  NoticeCardHeader,  NoticeCardMonth,  ThirdTextChange, NoticeBoard, FooterClock, FooterComment } from "./styles"
import mainPhoto01 from "../../../assets/img/main_photos/photo_mobile_01.jpg"
import mainPhoto02 from "../../../assets/img/main_photos/photo_mobile_04.png"
import mainPhoto03 from "../../../assets/img/main_photos/photo_mobile_02.png"
import mainPhoto04 from "../../../assets/img/main_photos/photo_mobile_10.png"
import { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { BsClockHistory } from "react-icons/bs"
import { AiOutlineComment } from "react-icons/ai"
import { IconContext } from "react-icons"
import banner01 from "../../../assets/img/banners/banner_15.jpg"
import banner02 from "../../../assets/img/banners/banner_14.jpg"
import banner03 from "../../../assets/img/banners/banner_17.jpg"
import banner04 from "../../../assets/img/banners/banner_20.jpg"
import banner05 from "../../../assets/img/banners/banner_12.jpg"
const IntroSpace = () => {

    const { hover, hover1, hover2, hover3, hover4, setHover, setHover1, setHover2, setHover3, setHover4 } = useContext(AuthContext);

    const [background, setBackground] = useState(Number)

    return (
        <>
            <IntroSection>
                    <h1>100% Digital</h1>
                <ParallaxSpace background={background}>
                    <ImageSpace>
                        <img src={mainPhoto01} alt="a hot air balloon"
                        onMouseEnter={(()=> {
                            setHover(1)
                            setHover1(true)
                            setBackground(1)
                        })} 
                        onMouseLeave={(()=> {
                            setHover(0)
                            setHover1(false)
                            setBackground(0)
                            })}/>
                        
                        <img src={mainPhoto02} alt="a hot air balloon"
                        onMouseEnter={(()=> {
                            setHover(1)
                            setHover2(true)
                            setBackground(2)
                        })} 
                        onMouseLeave={(()=> {
                            setHover(0)
                            setHover2(false)
                            setBackground(0)
                            })}/>
                        
                        <img src={mainPhoto03} alt="a hot air balloon"
                        onMouseEnter={(()=> {
                            setHover(1)
                            setHover3(true)
                            setBackground(3)
                        })} 
                        onMouseLeave={(()=> {
                            setHover(0)
                            setHover3(false)
                            setBackground(0)
                            })}/>
                        
                        <img src={mainPhoto04} alt="a hot air balloon"
                        onMouseEnter={(()=> {
                            setHover(1)
                            setHover4(true)
                            setBackground(4)
                        })} 
                        onMouseLeave={(()=> {
                            setHover(0)
                            setHover4(false)
                            setBackground(0)
                            })}/>
                        
                    </ImageSpace>
                </ParallaxSpace>
                    <MainText hover={hover}>
                        <h3>Controle sua conta de forma prática e segura. Evite filas e deslocamentos. Comunique-se com atendentes de verdade.</h3>
                    </MainText>
                    <FirstTextChange hover1={hover1}>
                        <h3>Primeiro texto.</h3>
                    </FirstTextChange>
                    <SecondTextChange hover2={hover2}>
                        <h3>Segundo texto.</h3>
                    </SecondTextChange>
                    <ThirdTextChange hover3={hover3}>
                        <h3>Terceiro texto.</h3>
                    </ThirdTextChange>
                    <ForthTextChange hover4={hover4}>
                        <h3>Quarto texto.</h3>
                    </ForthTextChange>

                <h2>Faq e Tutoriais</h2>
                <NoticeBoard>
                    <NoticeCard>
                        <NoticeCardHeader className="headerS">
                            <a href="index.html">
                                <img src={banner01} alt="blabla" className="imageS"/>
                            </a>
                        </NoticeCardHeader>
                        <NoticeCardDate>
                            <NoticeCardDay>11</NoticeCardDay>
                            <br/>
                            <NoticeCardMonth>Jan</NoticeCardMonth>
                        </NoticeCardDate>
                        <NoticeCardBody className="cardBodyS">
                            <NoticeCardCategory>
                                <a href="index.html">pet</a>
                            </NoticeCardCategory>
                            <h2><a href="index.html">an ice cream sundae party！</a></h2>
                            <h3>an ice cream sundae party！</h3>
                            <p className="cardPS">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                        </NoticeCardBody>
                        <NoticeCardFooter>
                            <FooterClock>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <BsClockHistory />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterClock> 
                            <FooterComment>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <AiOutlineComment />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterComment> 
                            
                        </NoticeCardFooter>
                    </NoticeCard>
                    <NoticeCard>
                        <NoticeCardHeader className="headerS">
                            <a href="index.html">
                                <img src={banner02} alt="blabla" className="imageS"/>
                            </a>
                        </NoticeCardHeader>
                        <NoticeCardDate>
                            <NoticeCardDay>11</NoticeCardDay>
                            <br/>
                            <NoticeCardMonth>Jan</NoticeCardMonth>
                        </NoticeCardDate>
                        <NoticeCardBody className="cardBodyS">
                            <NoticeCardCategory>
                                <a href="index.html">pet</a>
                            </NoticeCardCategory>
                            <h2><a href="index.html">an ice cream sundae party！</a></h2>
                            <h3>an ice cream sundae party！</h3>
                            <p className="cardPS">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                        </NoticeCardBody>
                        <NoticeCardFooter>
                            <FooterClock>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <BsClockHistory />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterClock> 
                            <FooterComment>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <AiOutlineComment />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterComment> 
                            
                        </NoticeCardFooter>
                    </NoticeCard>
                    <NoticeCard>
                        <NoticeCardHeader className="headerS">
                            <a href="index.html">
                                <img src={banner03} alt="blabla" className="imageS"/>
                            </a>
                        </NoticeCardHeader>
                        <NoticeCardDate>
                            <NoticeCardDay>11</NoticeCardDay>
                            <br/>
                            <NoticeCardMonth>Jan</NoticeCardMonth>
                        </NoticeCardDate>
                        <NoticeCardBody className="cardBodyS">
                            <NoticeCardCategory>
                                <a href="index.html">pet</a>
                            </NoticeCardCategory>
                            <h2><a href="index.html">an ice cream sundae party！</a></h2>
                            <h3>an ice cream sundae party！</h3>
                            <p className="cardPS">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                        </NoticeCardBody>
                        <NoticeCardFooter>
                            <FooterClock>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <BsClockHistory />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterClock> 
                            <FooterComment>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <AiOutlineComment />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterComment> 
                            
                        </NoticeCardFooter>
                    </NoticeCard>
                    <NoticeCard>
                        <NoticeCardHeader className="headerS">
                            <a href="index.html">
                                <img src={banner04} alt="blabla" className="imageS"/>
                            </a>
                        </NoticeCardHeader>
                        <NoticeCardDate>
                            <NoticeCardDay>11</NoticeCardDay>
                            <br/>
                            <NoticeCardMonth>Jan</NoticeCardMonth>
                        </NoticeCardDate>
                        <NoticeCardBody className="cardBodyS">
                            <NoticeCardCategory>
                                <a href="index.html">pet</a>
                            </NoticeCardCategory>
                            <h2><a href="index.html">an ice cream sundae party！</a></h2>
                            <h3>an ice cream sundae party！</h3>
                            <p className="cardPS">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                        </NoticeCardBody>
                        <NoticeCardFooter>
                            <FooterClock>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <BsClockHistory />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterClock> 
                            <FooterComment>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <AiOutlineComment />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterComment> 
                            
                        </NoticeCardFooter>
                    </NoticeCard>
                    <NoticeCard>
                        <NoticeCardHeader className="headerS">
                            <a href="index.html">
                                <img src={banner05} alt="blabla" className="imageS"/>
                            </a>
                        </NoticeCardHeader>
                        <NoticeCardDate>
                            <NoticeCardDay>11</NoticeCardDay>
                            <br/>
                            <NoticeCardMonth>Jan</NoticeCardMonth>
                        </NoticeCardDate>
                        <NoticeCardBody className="cardBodyS">
                            <NoticeCardCategory>
                                <a href="index.html">pet</a>
                            </NoticeCardCategory>
                            <h2><a href="index.html">an ice cream sundae party！</a></h2>
                            <h3>an ice cream sundae party！</h3>
                            <p className="cardPS">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                        </NoticeCardBody>
                        <NoticeCardFooter>
                            <FooterClock>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <BsClockHistory />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterClock> 
                            <FooterComment>
                                <IconContext.Provider
                                value={{
                                    color: "var(--color-white-mode)",
                                    size: "1.5em",
                                }}
                                >
                                <AiOutlineComment />
                                </IconContext.Provider>
                                <span>
                                    10 mins ago
                                </span>
                            </FooterComment> 
                            
                        </NoticeCardFooter>
                    </NoticeCard>
                
                </NoticeBoard>
            </IntroSection>
        </>
    )
}

export default IntroSpace