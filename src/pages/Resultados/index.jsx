import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import useFetch from 'react-fetch-hook'
import GridLoader from 'react-spinners/GridLoader'
import Topbar from '../../components/topbar/Topbar';
import Footer2 from '../../components/footer2/Footer2';
import { Helmet } from 'react-helmet';
import Marcamed from '../../components/Marcamed';



export default function Marcacao() {
  
  const  { isLoading }  = useFetch(Marcamed);

  return (<>
  <Helmet>
        <title>Marcação - Hospital EMCOR</title>
        <meta name="description" content="Marcação de consultas" />
    </Helmet>
  <Topbar/>
    { isLoading ? 
    <div className="container d-flex align-items-center justify-content-center" style={{height:'600px'}}> 
      <GridLoader color={'grey'} loading={'true'} size={10} />
    </div> 
    : 
    <Marcamed/> }

    <Breadcrumb crumb2="" crumb="Marcação"/> 
    <Footer2/>
  </>);
}
