import { Parallax } from "react-scroll-parallax"
import { FirstCoin, SecondCoin, SolutionAnimationSection, ThirdCoin } from "./styles"

const SolutionsAnimation = () => {

    return (
        <>
            <SolutionAnimationSection>
                <Parallax translateY={[50,-250, "easeInOut"]} >
                    <FirstCoin/>
                </Parallax> 
                {/* <Parallax >
                    <ThirdCoin/>
                </Parallax>
                <Parallax >
                    <FirstCoin/>
                </Parallax>
                <Parallax >
                    <ThirdCoin/>
                </Parallax>
                <Parallax >
                    <FirstCoin/>
                </Parallax> */}
                <Parallax translateY={[-50,250, "easeInOut"]}>
                    <SecondCoin/>
                </Parallax>
        
            </SolutionAnimationSection>
        </>
    )
}

export default SolutionsAnimation