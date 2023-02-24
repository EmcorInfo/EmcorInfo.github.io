import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import { Breadcrumb } from './../../components/breadcrumb/Breadcrumb';
import Footer2 from './../../components/footer2/Footer2';
import Servico from './../../components/servico/index';
import { Helmet } from 'react-helmet';


function Servicos2() {
  return (
    <>
      <Helmet>
      <title>Serviços - Hospital EMCOR</title>
      <meta name="description" content="Serviços prestados pelo Hospital EMCOR." />
      </Helmet>
      <Topbar/>
      <Servico/>
      <Breadcrumb crumb2="" crumb="Serviços" />
      <Footer2/>
    </>
  )
}

export default Servicos2
