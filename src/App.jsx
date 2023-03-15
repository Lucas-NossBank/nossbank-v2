import GeneralProvider from "./contexts/AuthContext";
import RoutesMain from "./routes/routes";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
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