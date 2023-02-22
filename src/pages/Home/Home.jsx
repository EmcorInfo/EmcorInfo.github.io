import CarouselFade from "../../components/carrocel/Carrocel";
import Footer2 from "../../components/footer2/Footer2";
import Topbar from "../../components/topbar/Topbar";
import { Helmet } from 'react-helmet';

export default function Home() {
  return(
    <>
    <Helmet>
        <title>Início - Hospital EMCOR</title>
        <meta name="description" content="Conheça nossos serviços." />
    </Helmet>
    <Topbar />
    <CarouselFade/>
    <Footer2 />
    </>
  );
}
