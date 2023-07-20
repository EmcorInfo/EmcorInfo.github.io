import React from 'react';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
// import EmConstrucao from '../../components/emConstrucao/EmConstrucao';
import ContactUs from '../../components/Form/Form';
import Socials from '../../components/Socials/Socials';
import Topbar from '../../components/topbar/Topbar';
import { Helmet } from 'react-helmet';
import Footer2 from '../../components/footer';

function Contato() {
    return (
    <>
     <Helmet>
        <title>Fale Conosco - Hospital EMCOR</title>
        <meta name="description" content="Duvidas, elogios, sugestões ." />
    </Helmet>
        <Topbar/>
        <ContactUs/>
        <Socials/>
        <Breadcrumb crumb2="" crumb="Contato"/>
        <Footer2/>
    </>
    );
}

export default Contato;