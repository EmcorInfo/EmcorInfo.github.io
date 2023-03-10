import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsent from "react-cookie-consent";
import Home from "./pages/Home/Home";
import Ohospital from "./pages/Ohospital/Ohospital";
import Servicos from "./pages/Nova Pagina/servicos";
import Planos from "./pages/plano/plano";
import Resultados from "./pages/Resultados/Resultados";
import Contato from "./pages/Contato/Contato";
import Politica from "./pages/CookiePoli/Politica";
import ScrollArrow from "./components/arrowTop/ScrollArrow";
import Sucesso from "./pages/Sucesso/Sucesso";
import Trabalhe from "./pages/trabalheConosco/Trabalhe";
import UnderC from "./pages/emconstrucao";
import Servicos2 from './pages/Servicos/index';
import Emerg from './pages/emergencia/index';
import Ambula from './pages/Ambulatorio/index';
import Diagimag from './pages/Diagimagem/index';
import LabPage from './pages/LaboratorioPage/index';
import Hemopage from './pages/hemodinamica/index';
import Cti from './pages/CTI/index';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servic" element={<Servicos />} />
        <Route exact path="/servi/" element={<Servicos2 />} />
        <Route exact path="/servic/emergencia" element={<Emerg />} />
        <Route exact path="/servic/ambulatorio" element={<Ambula />} />
        <Route exact path="/servic/laboratorio" element={<LabPage />} />
        <Route exact path="/servic/CTI" element={<Cti />} />
        <Route exact path="/servic/hemodinamica" element={<Hemopage />} />
        <Route exact path="/servic/diagnosticoporimagem" element={<Diagimag />} />
        <Route exact path="/OHospital" element={<Ohospital />} />
        <Route exact path="/plano" element={<Planos />} />
        <Route exact path="/planos-de-sauacutede.html" element={<Planos />} />
        <Route exact path="/mobile/planos-de-sauacutede.html" element={<Planos />} />
        <Route exact path="/resultado" element={<Resultados />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/politica-de-privacidade" element={<Politica />} />
        <Route exact path="/sucesso" element={<Sucesso />} />
        <Route exact path="/ouvidoria.html" element={<Contato />} />
        <Route exact path="/contato.html" element={<Contato />} />
        <Route exact path="/trabalhe-conosco.html" element={<Trabalhe />} />
        <Route exact path="/trabalhe-conosco" element={<Trabalhe />} />
        <Route exact path="/serviccedilos.html" element={<Servicos />} />
        <Route exact path="/corpo-cliacutenico.html" element={<Servicos />} />
        <Route exact path="/o-hospital.html" element={<UnderC />} />
      </Routes>
      <ScrollArrow />
      <CookieConsent
        expires={150}
        buttonText="Eu compreendo."
        style={{backgroundColor:"rgba(53,53,53,0.9)"}}
        >
          Usamos cookies em nosso site para fornecer a experi??ncia mais relevante, lembrando suas prefer??ncias e visitas repetidas. <br /> Ao clicar em ???Aceitar???, voc?? concorda com o uso de TODOS os cookies. &emsp; <Link className="link-info" to={"/politica-de-privacidade"}>Saiba mais</Link>      {/* O que est?? escrito na barra */}   
      </CookieConsent>
    </Router>
  );
}

export default App;
