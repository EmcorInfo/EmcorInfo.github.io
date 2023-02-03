import React from 'react'
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import Topbar from "../../components/topbar/Topbar";
import Footer2 from "../../components/footer2/Footer2";
import Envio from '../../components/envioCurriculo/Envio';
import Titulo from '../../components/Titulo/Titulo';

export default function Trabalhe() {
  return (<>
    <Topbar />
    <Titulo titulo="Trabalhe Conosco"/>
    <Envio />
    <Breadcrumb crumb="Trabalhe Conosco"/>
    <Footer2/>
    </>
  )
}
