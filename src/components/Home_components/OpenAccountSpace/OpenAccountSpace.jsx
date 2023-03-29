import { AppleStore, DownloadSpace, DualGallery, GoogleStore,  OpenAccountSection, QRCODESpace } from "./styles"
import image01 from "../../../assets/img/machines/machine_101.png"
import image02 from "../../../assets/img/machines/machine_07_model.png"
import downloadGoogle from "../../../assets/img/banners/download_google_01.png"
import downloadApple from "../../../assets/img/banners/download_applestore_01.png"
import qrApple from "../../../assets/img/banners/apple_qrcode.png"
import qrGoogle from "../../../assets/img/banners/google_qrcode.png"

const OpenAccount = () => {

    return (
        <>
            <OpenAccountSection>
                <h1>A conta PJ na medida certa para sua empresa</h1>
                <p>Conta digital para donos de negócios e empreendedores como você.</p>
                <DualGallery>
                    <img src={image01} alt="ref 01" />
                    <img src={image02} alt="ref 02" />  
                </DualGallery>

                <p >Descomplique sua vida. Solicite o seu Nossbank</p>

                <h2>Baixe já no seu celular</h2>
                <DownloadSpace>
                    <GoogleStore>
                        <a href="https://play.google.com/store/apps/details?id=br.com.nossbank.app" rel="noreferrer" target="_blank">
                            <img src={downloadGoogle} alt="download G" />
                        </a>
                    </GoogleStore>
                    <AppleStore>
                        <a href="https://apps.apple.com/br/app/nossbank/id1669817284" rel="noreferrer" target="_blank">
                            <img src={downloadApple} alt="download G" />
                        </a>
                    </AppleStore>
                </DownloadSpace>
                <QRCODESpace>
                    <GoogleStore>
                        <a href="https://play.google.com/store/apps/details?id=br.com.nossbank.app" rel="noreferrer" target="_blank">
                            <img src={qrGoogle} alt="download G" />
                        </a>
                    </GoogleStore>
                    <AppleStore>
                        <a href="https://apps.apple.com/br/app/nossbank/id1669817284" rel="noreferrer" target="_blank">
                            <img src={qrApple} alt="download G" />
                        </a>
                    </AppleStore>
                </QRCODESpace>
            </OpenAccountSection>
        </>
    )

}

export default OpenAccount
