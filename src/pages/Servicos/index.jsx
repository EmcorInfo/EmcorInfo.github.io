import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import { Breadcrumb } from './../../components/breadcrumb/Breadcrumb';
import Footer2 from './../../components/footer2/Footer2';
import Servico from './../../components/servico/index';


function Servicos2() {
  return (
    <>
    <Topbar/>
    <Servico/>
    <Breadcrumb crumb="Serviços 2" />
    <Footer2/>
    </>
  )
}

export default Servicos2
