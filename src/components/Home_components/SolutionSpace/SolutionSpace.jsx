import { Parallax } from "react-scroll-parallax"
import { Block, ContentDiv, ContentDiv2, Divisor, ParallaxDiv, SolutionCard, SolutionCardBody, SolutionCardCategory, SolutionCardDate, SolutionCardDay, SolutionCardFooter, SolutionCardHeader, SolutionCardMonth, SolutionContainer, SolutionSection, SolutionsImages, SolutionsTitle, SolutionUl } from "./styles"
import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import { VscGraph } from "react-icons/vsc"
import { BiTransferAlt } from "react-icons/bi"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { MdPayments } from "react-icons/md"
import { BsFillCartCheckFill } from "react-icons/bs"
import { RiHandCoinFill } from "react-icons/ri"
import { BsFillCreditCardFill } from "react-icons/bs"
import { SlPresent } from "react-icons/sl"
import SolutionsAnimation from "../../Animation/SolutionsAnimation/SolutionsAnimation"
import { PropagSection } from "../PropagSpace/styles"
import PropagSpace from "../PropagSpace/PropagSpace"


const SolutionSpace = () => {

    const [test, setTest] = useState()

    // useEffect(() => {
    //     function handleResize() {
            
    //        console.log(window.innerWidth)
    //     }
    //     window.addEventListener("resize", handleResize)
    // },[test])

    return (

        <>
            <Divisor>
                <SolutionSection>
                    <h1>Nossas Soluções Financeiras</h1>

                    <ParallaxDiv test={test} setTest={setTest}>
                        <Parallax  >
                            <ContentDiv>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--color-white-mode)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <VscGraph/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Antecipação de recebíveis</h3>
                                <p>Venda hoje, receba hoje.</p>
                            </ContentDiv>
                        </Parallax>
                        <Parallax  >
                            <ContentDiv2>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--main-dark-color)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <MdPayments/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Pagamentos & Recargas</h3>
                                <p>Desfrute da conta digital Nubank para pagar contas, fazer recargas e gerar cartões presente.</p>
                            </ContentDiv2>
                        </Parallax>
                        <Parallax  >
                            <ContentDiv>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--color-white-mode)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <BsFillCartCheckFill/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Vendas Online</h3>
                                <p>Soluções descomplicadas para facilitar vendas e cobranças.</p>
                            </ContentDiv>
                        </Parallax>

                        <Parallax  >
                            <ContentDiv2>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--main-dark-color)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <SlPresent/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Cartão Presentes</h3>
                                <p>Compra de cartões presente com débito direto na sua conta digital.</p>
                            </ContentDiv2>
                        </Parallax>
                        <Parallax  >
                            <ContentDiv>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--color-white-mode)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <BiTransferAlt/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Transferências</h3>
                                <p>DOC, TED e PIX sem complexidade.</p>
                            </ContentDiv>
                        </Parallax>
        
                        <Parallax  >
                            <ContentDiv2>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--main-dark-color)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <FaMoneyCheckAlt/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Extratos</h3>
                                <p>Controle de entradas e saídas de dinheiro da sua conta pessoal ou empresarial.</p>
                            </ContentDiv2>
                        </Parallax>
        
                        <Parallax  >
                            <ContentDiv>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--color-white-mode)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <RiHandCoinFill/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Saques</h3>
                                <p>O dinheiro na sua conta digital no seu bolso, direto da rede Banco 24hrs.</p>
                            </ContentDiv>
                        </Parallax>
        
                        <Parallax>
                            <ContentDiv2>
                                <a href="teste">

                                    <IconContext.Provider
                                        value={{
                                            color: "var(--main-dark-color)",
                                            size: "2em",
                                        }}
                                    >                                    
                                        <BsFillCreditCardFill/>
                                    </IconContext.Provider>
                                </a>
                                <h3>Cartão Nossbank</h3>
                                <p>Abra sua conta digital Nossbank e solicite seu cartão.</p>
                            </ContentDiv2>
                        </Parallax>
        
                    </ParallaxDiv> 
                    {/* <SolutionsAnimation/> */}
                
                </SolutionSection>
                <PropagSpace/>
            </Divisor>
            
        </>

    )
}

export default SolutionSpace