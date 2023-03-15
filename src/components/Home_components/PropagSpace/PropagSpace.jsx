
import { ImagePropagSpace, PropagSection } from "./styles"
import cellphone from "../../../assets/img/machines/machine_104.png"
import SwiperCar from "../../Animation/CarouselAnimation/CarouselAnimation"


const PropagSpace = () => {
    return (
        <>
            <PropagSection>
                <h1>Conta Digital na Nossbank</h1>
                <p>Moderna, prática e gratuita.</p>
                <p>Cartão pré pago para você e sua empresa.</p>
                <p>O Saldo da sua conta disponível no cartão.</p>
            
            <ImagePropagSpace>
                <img src={cellphone} alt="cellphone"/>
                <img src={cellphone} alt="cellphone"/>
                <img src={cellphone} alt="cellphone"/>
                <img src={cellphone} alt="cellphone"/>
            </ImagePropagSpace>
            <SwiperCar/>
           
            </PropagSection>

        </>
    )
}

export default PropagSpace