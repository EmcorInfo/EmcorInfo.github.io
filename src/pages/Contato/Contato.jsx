import React from 'react';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Footer2 from '../../components/footer2/Footer2';
// import EmConstrucao from '../../components/emConstrucao/EmConstrucao';
import ContactUs from '../../components/Form/Form';
import Socials from '../../components/Socials/Socials';
import Topbar from '../../components/topbar/Topbar';
import { Helmet } from 'react-helmet';

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