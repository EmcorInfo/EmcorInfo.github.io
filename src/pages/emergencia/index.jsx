import React from 'react'
import Topbar from './../../components/topbar/Topbar';
import Footer2 from './../../components/footer2/Footer2';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Banneremerg from '../../components/bannerEmerg';

function Emerg() {
  return (
    <>
    <Topbar/>
    <Banneremerg/>
    
    <Breadcrumb crumb2="Serviços 2" href="/2/" crumb="Emergência"/>
    <Footer2/>
    </>
  )
}

export default Emerg
