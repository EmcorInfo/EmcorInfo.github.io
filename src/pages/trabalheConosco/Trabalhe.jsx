import React from 'react'
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import Topbar from "../../components/topbar/Topbar";
import Footer2 from "../../components/footer2/Footer2";
import Envio from '../../components/envioCurriculo/Envio';
import Titulo from '../../components/Titulo/Titulo';
import { Helmet } from 'react-helmet';

export default function Trabalhe() {
  return (<>
  <Helmet>
        <title>Trabalhe Conosco - Hospital EMCOR</title>
        <meta name="description" content="Envie seu currículo para tornar-se um de nossos colaboradores." />
    </Helmet>
    <Topbar />
    <Titulo titulo="Trabalhe Conosco"/>
    <Envio />
    <Breadcrumb crumb2="" crumb="Trabalhe Conosco"/>
    <Footer2/>
    </>
  )
}
