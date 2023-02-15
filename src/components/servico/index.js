import React from 'react'
import Botoes from '../faixaBotao';
import Lista from '../Lista';

function Servico() {

    const meusItens = [
      { id: "1" ,
        name:"Emergência 24hs",
        img: "/servicos/emerg.png",
        redirect: "/",},
        { id: "2" ,
        name:"Centro de Tratamento Intensivo",
        img: "/servicos/cti2.JPG"},
        { id: "3" ,
        name:"Hemodinâmica",
        img: "/servicos/hemo2.JPG"},
        { id: "4" ,
        name:"Diagnostico por Imagem",
        img: "/servicos/tecnologia2.JPG"},
        { id: "5" ,
        name:"Clinicas Ambulatoriais",
        img: "/servicos/cardio.png"},
        { id: "6" ,
        name:"Exames Laboratoriais",
        img: "/servicos/lab.png"},
        // { id: "7" ,
        // name:"Cardiologia Ambulatorial",
        // img: "/servicos/cardio.png"},
        // { id: "8" ,
        // name:"Centro de Tratamento Intensivo",
        // img: "/servicos/cti.png"},
        // { id: "9" ,
        // name:"Centro de Tratamento Intensivo",
        // img: "/servicos/cti.png"},
        // { id: "10" ,
        // name:"Centro de Tratamento Intensivo",
        // img: "/servicos/cti.png"},
        // { id: "11" ,
        // name:"Centro de Tratamento Intensivo",
        // img: "/servicos/cti.png"},
        // { id: "12" ,
        // name:"Centro de Tratamento Intensivo",
        // img: "/servicos/cti.png"},

      ]

  return (
  <>
    <Botoes itens={meusItens}/>
    <Lista itens={meusItens}/>
  </>
  )
}

export default Servico
