// import Footer from "../../components/footer2/Footer2";
import Topbar from "../../components/topbar/Topbar";
import { Helmet } from 'react-helmet';
import "./style.css"
import CarrosselEdit from "../../components/CarrosselEditavel";
import Footer2 from "../../components/footer";
// import CarouselFade from './../../components/carrocel/Carrocel';


export default function Home() {
  return(
    <>
    <Helmet>
        <title>Início - Hospital EMCOR</title>
        <meta name="description" content="Conheça nossos serviços." />
    </Helmet>
    <Topbar />

    {/* <CarouselFade/> */}
    <CarrosselEdit />
    <Footer2 />
    </>
  );
}
