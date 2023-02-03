import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsent from "react-cookie-consent";
import Home from "./pages/Home/Home";
// import Ohospital from "./pages/Ohospital/Ohospital";
import Servicos from "./pages/Nova Pagina/servicos";
import Planos from "./pages/plano/plano";
import Resultados from "./pages/Resultados/Resultados";
import Contato from "./pages/Contato/Contato";
// import Politica from "./pages/CookiePoli/Politica";
import ScrollArrow from "./components/arrowTop/ScrollArrow";
import Sucesso from "./pages/Sucesso/Sucesso";
import Trabalhe from "./pages/trabalheConosco/Trabalhe";
import UnderC from "./pages/emconstrucao";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servicos" element={<Servicos />} />
        <Route exact path="/OHospital" element={<UnderC />} />
        <Route exact path="/plano" element={<Planos />} />
        <Route exact path="/resultado" element={<Resultados />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/politica-de-privacidade" element={<UnderC />} />
        <Route exact path="/sucesso" element={<Sucesso />} />
        <Route exact path="/trabalhe-conosco" element={<Trabalhe />} />
      </Routes>
      <ScrollArrow />
      <CookieConsent
        expires={150}
        buttonText="Eu compreendo."
        style={{backgroundColor:"rgba(53,53,53,0.9)"}}
        >
          Usamos cookies em nosso site para fornecer a experiência mais relevante, lembrando suas preferências e visitas repetidas. <br /> Ao clicar em “Aceitar”, você concorda com o uso de TODOS os cookies. &emsp; <Link className="link-info" to={"/politica-de-privacidade"}>Saiba mais</Link>      {/* O que está escrito na barra */}   
      </CookieConsent>
    </Router>
  );
}

export default App;
