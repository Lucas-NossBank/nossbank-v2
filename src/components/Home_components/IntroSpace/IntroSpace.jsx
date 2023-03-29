import {  IntroSection,  NoticeCard,  NoticeCardBody,  NoticeCardCategory,  NoticeCardDate,  NoticeCardDay,  NoticeCardFooter,  NoticeCardHeader,  NoticeCardMonth, NoticeBoard, FooterClock, FooterComment, SwiperImgDiv } from "./styles"
import { BsClockHistory } from "react-icons/bs"
import { AiOutlineComment } from "react-icons/ai"
import { IconContext } from "react-icons"
import banner01 from "../../../assets/img/banners/banner_15.jpg"
import banner02 from "../../../assets/img/banners/banner_14.jpg"
import banner03 from "../../../assets/img/banners/banner_17.jpg"
import banner04 from "../../../assets/img/banners/banner_20.jpg"
import banner05 from "../../../assets/img/banners/banner_12.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination,  Autoplay, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const IntroSpace = () => {


    return (
        <>
            <IntroSection>
                    
                    <Swiper
                        modules={[Autoplay, Pagination, Scrollbar]}
                        slidesPerView={1}
                        scrollbar={{
                            hide: true
                        }}
                        autoplay={{
                              delay: 3500,
                              pauseOnMouseEnter: true,
                              disableOnInteraction: false
                             }}
                        loop
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner01} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner02} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner03} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner04} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner01} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner01} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner01} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner01} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperImgDiv>
                                <img src={banner01} alt="#" />
                            </SwiperImgDiv>
                        </SwiperSlide>
                    </Swiper>

                <h1>Banco 100% Digital</h1> 

                <h3>Controle sua conta de forma prática e segura. Evite filas e deslocamentos. Comunique-se com atendentes de verdade.</h3>

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