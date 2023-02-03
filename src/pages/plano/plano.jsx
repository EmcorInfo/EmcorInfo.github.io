import amil from "../../images/planos-e-convenios/amil.png";
import assimSaude from "../../images/planos-e-convenios/assimSaudepng.png";
import bradescoSaude from "../../images/planos-e-convenios/bradescoSaude.png"
import capesaude from "../../images/planos-e-convenios/capesaude.png"
import cassi from "../../images/planos-e-convenios/cassi.png"
import eletrosaude from "../../images/planos-e-convenios/eletro-saude.png"
// import emgeprom from "../../images/planos-e-convenios/emgepron.png"
import gama from "../../images/planos-e-convenios/gama.png"
import geap from "../../images/planos-e-convenios/geap.png"
import goldemcross from "../../images/planos-e-convenios/goldenCross.png"
import notreDame from "../../images/planos-e-convenios/grupo-notredame-intermedica-logo.png"
import medservice from "../../images/planos-e-convenios/logo-Mediservice.png"
import postal from "../../images/planos-e-convenios/logo-postal.png"
import portoSeguro from "../../images/planos-e-convenios/portoSeguro.png"
import saudeCaixa from "../../images/planos-e-convenios/saudeCaixa.png"
import sulamerica from "../../images/planos-e-convenios/sulamerica-logo.png"
import unimed from "../../images/planos-e-convenios/unimed-logo.png"
import univida from "../../images/planos-e-convenios/univida.png"
import leve from "../../images/planos-e-convenios/leve.png"
import petro from "../../images/planos-e-convenios/petrobras.png"
import assefaz from "../../images/planos-e-convenios/assefaz.png"
import conab from "../../images/planos-e-convenios/conab.jfif"
import pmerj from "../../images/planos-e-convenios/pmerj.png"
import novaiguacu from "../../images/planos-e-convenios/pmni.png"
import belroxo from "../../images/planos-e-convenios/pmbr.jpg"
import "./plano.css"
import Flip from 'react-reveal/Flip'
import Topbar from "../../components/topbar/Topbar";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import Footer2 from "../../components/footer2/Footer2";
// import { useState } from "react";
// import IModal from "../../components/modal/modal";




function Planos() {
    // const [openModal , setModal] = useState(false);
    // const [modalImg , setImg] =useState();

    return(
        <>
        <Topbar/>
        {/* {openModal && <IModal closeModal={setModal} Src={modalImg}/>}   */}
        <h3 className="text-center bg-dark text-light mb-5">Planos e Convênios</h3>
            <div className="container justify-content-center">
            <Flip left cascade>
                <div className="row m-3">
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={amil} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={goldemcross} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={assimSaude} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={bradescoSaude} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={capesaude} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={cassi} alt="" /></div>
                    
                </div></Flip>
                <Flip right cascade>
                <div className="row m-3">
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={leve} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={gama} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={geap} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={eletrosaude} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={notreDame} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={medservice} alt="" /></div>
                </div></Flip>
               <Flip left cascade>  
               <div className="row m-3">
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={postal} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={portoSeguro} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={saudeCaixa} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={sulamerica} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={unimed} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={univida} alt="" /></div>
                </div></Flip>
                <Flip right cascade><div className="row m-3">
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={petro} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={assefaz} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={conab} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={pmerj} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={novaiguacu} alt="" /></div>
                    <div className="ImgConv col-sm-2 p-2 m-2 d-flex align-items-center" ><img className="img-responsive  w-100" src={belroxo} alt="" /></div>
                </div></Flip>
            </div>
            <Breadcrumb crumb="Planos e Convênios"/>
            <Footer2/>
        </>
    )
}
export default Planos