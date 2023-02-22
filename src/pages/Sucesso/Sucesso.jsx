import React from 'react'
import emcorbranco from "../../images/emcorbranco.jpg";

export default function Sucesso() {
  return (
    <div className="fundo w-100 h-100 bg-secondary">
        <div className="container d-flex " style={{height:"100vh"}}>
            <div className='container d-flex justify-content-center align-itens-center align-self-center p-3 border rounded border-success bg-light w-50'style={{height:"60vh"}}>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center align-itens-center mb-5">
                    <img src={emcorbranco} alt="emcor" />
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center align-itens-center">
                    <h4>EMAIL ENVIADO COM SUCESSO!</h4>
                    </div>    
                    <div className="col-lg-12 d-flex justify-content-center align-itens-center">
                    <p>Clique no Botão para retornar</p>
                    </div>    
                    <div className="col-lg-12 d-flex justify-content-center align-itens-center">
                        <a name="button" id="voltar" className="btn btn-primary h-50" href="contato" role="button">Voltar</a>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}
