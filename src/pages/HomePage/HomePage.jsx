import { useContext } from "react"
import { IconContext } from "react-icons"
import { GiHamburgerMenu } from "react-icons/gi"
import HomeAnimation from "../../components/Animation/HomeAnimation/HomeAnimation"
import FooterSpace from "../../components/FooterSpace/FooterSpace"
import FormSpace from "../../components/FormSpace/FormSpace"
import HeaderSpace from "../../components/HeaderSpace/HeaderSpace"
import AboutSpace from "../../components/Home_components/AboutSpace/AboutSpace"
import IntroSpace from "../../components/Home_components/IntroSpace/IntroSpace"
import SolutionSpace from "../../components/Home_components/SolutionSpace/SolutionSpace"

import { AuthContext } from "../../contexts/AuthContext"

import { Bg01, Bg02, Bg03, HomeSpace, NavBarMenuBtn } from "./styles"

const HomePage = () => {

    const { show, setShow } = useContext(AuthContext);

    function openMenu() {
        setShow((current) => !current);
      }

    return (
        <>
            <HeaderSpace show = {show}/>
            <NavBarMenuBtn onClick={() => openMenu()}>
        <IconContext.Provider
          value={{
            color: "var(--color-grey-0)",
          }}
        >
          <GiHamburgerMenu />
        </IconContext.Provider>
      </NavBarMenuBtn>
            {/* <Bg01/>
            <Bg02/>
            <Bg03/> */}
            <HomeAnimation/>
            <HomeSpace>
            </HomeSpace>
            <IntroSpace/>
            <SolutionSpace/>
            <FormSpace/>
            <AboutSpace/>
            <FooterSpace/>
        </>
    )
}

export default HomePage