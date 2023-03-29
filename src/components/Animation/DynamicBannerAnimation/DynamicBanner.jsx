import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { FirstTextChange, ForthTextChange, ImageSpace, MainText, ParallaxSpace, SecondTextChange, ThirdTextChange } from "./styles"
import mainPhoto01 from "../../../assets/img/main_photos/photo_mobile_01.jpg"
import mainPhoto02 from "../../../assets/img/main_photos/photo_mobile_04.png"
import mainPhoto03 from "../../../assets/img/main_photos/photo_mobile_02.png"
import mainPhoto04 from "../../../assets/img/main_photos/photo_mobile_10.png"

const DynamicBanner = () => {

    const { hover, hover1, hover2, hover3, hover4, setHover, setHover1, setHover2, setHover3, setHover4 } = useContext(AuthContext);

    const [background, setBackground] = useState(Number)

    return (
        <>
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
        </>
    )
}

export default DynamicBanner