import React from 'react'
import Botoes from '../faixaBotao';
import Lista from '../Lista';

function Servico() {

    const meusItens = [
      { id: "1" ,
        name:"Emergência 24hs",
        img: "/servicos/emerg.png",
        href: "emergencia",},
        { id: "2" ,
        name:"Centro de Tratamento Intensivo",
        img: "/servicos/cti2.JPG",
        href:"CTI",},
        { id: "3" ,
        name:"Hemodinâmica",
        img: "/servicos/hemo2.JPG",
        href:"hemodinamica",},
        { id: "4" ,
        name:"Diagnostico por Imagem",
        img: "/servicos/tecnologia2.JPG",
        href:"diagnosticoporimagem",},
        { id: "5" ,
        name:"Clinicas Ambulatoriais",
        img: "/servicos/cardio.png",
        href: "ambulatorio",},
        { id: "6" ,
        name:"Exames Laboratoriais",
        img: "/servicos/lab.png",
        href:"laboratorio",},
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
