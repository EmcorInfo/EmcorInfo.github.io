import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
// import Cards from "../../components/card/Card";
import "./novapagina.css"
import emerg from "../../images/servicos/emerg.png"
import gine from "../../images/servicos/gineco.jpg"
import cti from "../../images/servicos/cti2.JPG"
import hemo from "../../images/servicos/hemo2.JPG"
import lab from "../../images/servicos/lab.png"
import cardio from "../../images/servicos/cardio.png"
import eco from "../../images/servicos/eco.png"
import testergo from "../../images/servicos/testergo.png"
import ultrasom from "../../images/servicos/ultrasom.jpg"
import cirurgico from "../../images/servicos/centrocirurgico2.JPG";
import tecnologia from "../../images/tecnologia2.JPG";
import homapa from "../../images/servicos/homapa.jpg";
import Fade from 'react-reveal/Fade';
import Topbar from "../../components/topbar/Topbar";
import Footer2 from "../../components/footer2/Footer2";

export default function Servicos() {
return(
    
    <>  
    <Topbar/>
    <h3 className="text-center bg-dark text-light">Serviços</h3>
        <div className="w-100">
            <div className="mb-5 w-100 p-3">
                        <div className="py-3">
                            <div className="1 row">{/*1 ROW*/}
                                {/* <!--Item Left 1 row--> */}
                                <Fade left>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="hover hover-3 text-white rounded"><img src={emerg} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">Atendimento de emergência 24hs</h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                                {/* <!--Item Center 1 row--> */}
                                <Fade bottom>
                                        <div className="col-lg-4">
                                        <div className="hover hover-3 text-white rounded"><img src={cti} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">Centro de tratamento intensivo </h3>
                                        </div>
                                        </div>
                                    </div> 
                                </Fade>
                                 {/* <!--Item Right 1 row--> */}
                                 <Fade right>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="hover hover-3 text-white rounded"><img src={hemo} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">HEMODINÂMICA</h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                           
                            <div className="2 row mt-3">{/*2 ROW*/}
                                {/* <!--Item Left 2 row--> */}
                                <Fade left>
                                    <div className="col-lg-4">
                                        <div className="hover hover-3 text-white rounded"><img src={tecnologia} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">Tomografia Computadorizada </h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                                {/* <!--Item Center 2 row--> */}
                                <Fade bottom>
                                    <div className="col-lg-4">
                                        <div className="hover hover-3 text-white rounded"><img src={eco} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">ECOCARDIOGRAMA </h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                                {/* <!--Item right 2 row--> */}
                                <Fade right>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="hover hover-3 text-white rounded"><img src={cardio} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">CARDIOLOGIA AMBULATORIAL</h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="3 row mt-3">{/*1 ROW*/}
                                {/* <!--Item Left 3 row--> */}
                                <Fade left>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="hover hover-3 text-white rounded"><img src={testergo} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">TESTE ERGOMÉTRICO</h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                                {/* <!--Item Center 3 row--> */}
                                <Fade bottom>
                                    <div className="col-lg-4">
                                        <div className="hover hover-3 text-white rounded"><img src={ultrasom} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">ULTRASSONOGRAFIA </h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                                 {/* <!--Item Right 3 row--> */}
                                 <Fade right>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="hover hover-3 text-white rounded"><img src={lab} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">LABORATÓRIO BIOMÉDICO</h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="4 row mt-3">
                                {/* <!--Item Left 4 row--> */}
                                <Fade left>
                                    <div className="col-lg-4">
                                        <div className="hover hover-3 text-white rounded"><img src={homapa} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">M.a.p.a e Holter </h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                                {/* <!--Item center 4 row--> */}
                                <Fade bottom>
                                    <div className="col-lg-4">
                                        <div className="hover hover-3 text-white rounded"><img src={cirurgico} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">Centro Cirúrgico </h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                                {/* <!--Item Right 4 row--> */}
                                <Fade right>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="hover hover-3 text-white rounded"><img style={{}} src={gine} alt=""/>
                                        <div className="hover-overlay"></div>
                                        <div className="hover-3-content px-5 py-4">
                                            <h3 className="hover-3-description text-uppercase mb-0">GINECOLOGIA</h3>
                                        </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
            </div>
        </div>
        <Breadcrumb crumb="Serviços"/>
        <Footer2/>
    </>
)   
};

