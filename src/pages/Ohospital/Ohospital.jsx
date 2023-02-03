import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import "./ohospital.css"
import  Fade  from "react-reveal/Fade";
import Topbar from "../../components/topbar/Topbar";
import Footer2 from "../../components/footer2/Footer2";
import Titulo from "../../components/Titulo/Titulo";

function Ohospital() {
    return(
    <>  
    <Topbar/>
    <Titulo titulo="O Hospital"/>
    <div className="container mt-3">
        
        <div class="row p-3 m-1">
            <div class="col-sm-6">
                <Fade left><p class="text-justify"><Fade left cascade>Pariatur culpa ea sint adipisicing nostrud cupidatat ea. Sint aute nisi tempor fugiat ea in velit. Laborum occaecat cupidatat eu ea. Esse ipsum do dolor cupidatat fugiat consequat excepteur est tempor esse aute velit dolore. Consequat proident est nulla nisi occaecat labore culpa culpa cupidatat tempor adipisicing et. Ullamco sint nostrud quis ullamco ex deserunt. Id enim proident duis excepteur exercitation magna.<br/>
                Enim duis elit dolore minim aliqua tempor reprehenderit dolore consectetur officia in mollit voluptate. Consequat consectetur qui dolore sint ullamco. Incididunt eu commodo adipisicing ipsum magna aliqua. Fugiat dolore quis commodo proident enim qui do in consequat duis id minim commodo. Laborum sunt id consequat exercitation irure. Dolor consectetur nisi nisi do sint adipisicing proident quis sit cillum. Deserunt magna labore cillum sint.</Fade></p></Fade>
            </div>
            <div className="col-sm-6">
                <Fade right cascade>
                    <div className="container ">
                        <div className="teste" style={{marginLeft: "20px"}}>
                            <span style={{fontSize: "18px", fontWeight: "bold"}}>Missão</span>
                            <span style={{fontSize: "16px",marginBottom:"70px"}}>Cuidar do Coração da baixada</span>
                        </div>
                        <div className="teste" style={{marginLeft: "20px"}}>
                            <span style={{fontSize: "18px", fontWeight: "bold"}}>Visão</span>
                            <span style={{fontSize: "16px",marginBottom:"70px"}}>Ser referência de cuidado cardiológico e de qualidade no estado do Rio de Janeiro.</span>
                        </div>
                        <div className="teste" style={{marginLeft: "20px"}}>
                            <span style={{fontSize: "18px", fontWeight: "bold"}}>Valores</span>
                            <span style={{fontSize: "16px",}}>Familia, Competência, Integridade, Sustentabilidade e Compromisso.</span>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
            
            
        </div>
        <Breadcrumb crumb={"O Hospital"} />
        <Footer2/>
    </>
    );
}

export default Ohospital;
