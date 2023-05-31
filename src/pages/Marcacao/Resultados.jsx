import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import useFetch from 'react-fetch-hook'
import GridLoader from 'react-spinners/GridLoader'
import Iframe from '../../components/Iframe';
import Topbar from '../../components/topbar/Topbar';
import Footer2 from '../../components/footer2/Footer2';
import { Helmet } from 'react-helmet';



export default function Resultados() {
  
  const  { isLoading }  = useFetch(Iframe);

  return (<>
  <Helmet>
        <title>Resultados - Hospital EMCOR</title>
        <meta name="description" content="Busca de resultados através da plataforma MEDCLOUD." />
    </Helmet>
  <Topbar/>
    { isLoading ? 
    <div className="container d-flex align-items-center justify-content-center" style={{height:'600px'}}> 
      <GridLoader color={'grey'} loading={'true'} size={10} />
    </div> 
    : 
    <Iframe/> }

    <Breadcrumb crumb2="" crumb="Resultados"/> 
    <Footer2/>
  </>);
}
