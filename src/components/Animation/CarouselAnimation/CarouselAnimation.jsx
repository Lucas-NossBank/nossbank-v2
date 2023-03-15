import machine01 from "../../../assets/img/machines/machine_01.png"
import machine02 from "../../../assets/img/machines/machine_02.png"
import machine03 from "../../../assets/img/machines/machine_13.png"
import { CarouselDiv, CarouselIt, Machine01, Machine02, Machine03 } from "./styles";
import '@coreui/coreui/dist/css/coreui.min.css'

const SwiperCar = () => {
  return (
    <>
      <CarouselDiv controls transition="crossfade">
        <CarouselIt>
          <Machine01 src={machine01} alt="slide 01"/>
        </CarouselIt>
        <CarouselIt>
          <Machine02 src={machine02} alt="slide 02"/>
        </CarouselIt>
        <CarouselIt>
          <Machine03 src={machine03} alt="slide 03"/>
        </CarouselIt>
         
      </CarouselDiv>
    </>
  );
}

export default SwiperCar