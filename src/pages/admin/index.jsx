import Footer2 from "../../components/footer2/Footer2";
import Topbar from "../../components/topbar/Topbar";
import { Helmet } from 'react-helmet';
import CarouselManagement from "../../components/Manager/CarouselManager";


export default function Adm() {
  return(
    <>
    <Helmet>
        <title>ADM - Hospital EMCOR</title>
        <meta name="description" content="ADM PAGE" />
    </Helmet>
    <Topbar />
    <CarouselManagement/>
    <Footer2 />
    
    </>
  );
}
