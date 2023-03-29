import GeneralProvider from "./contexts/AuthContext";
import RoutesMain from "./routes/routes";
import { ParallaxProvider } from "react-scroll-parallax";
import SwiperCore, {Autoplay} from "swiper"

function App() {

  SwiperCore.use([Autoplay])

  return (
    <>
      <GeneralProvider>
        <ParallaxProvider>

        <RoutesMain />
        </ParallaxProvider>
      </GeneralProvider>
    </>
  );
}

export default App;