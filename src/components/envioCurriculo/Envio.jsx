import React from 'react'
import "./envio.css"

export default function Envio() {
    const localizacao = window.location.href;
    var arr = localizacao.split("/");
  return (
      <div className=' d-flex justify-content-center p-4 mb-2 w-100 tcfundo'>
        <form className='w-75' method="POST" action="https://formsubmit.co/rh@hospitalemcor.com.br" enctype="multipart/form-data">
                <input type="hidden" name="_next" value={"http://" + arr[2] + "/sucesso"}/>
                <input type="hidden" name="_template" value="table"/>
            <div className="form-group m-2 d-flex align-itens-center justify-content-center">
                <label for="nameform" className='me-2 m-auto' >Nome:</label>
                <input type="text" className='form-control w-75' id='nameform' name="Nome" placeholder="Seu Nome" required/>
            </div>
            <div className="form-group m-2 d-flex align-itens-center justify-content-center">
                <label for="nascimento"className='me-2 m-auto'>Data de Nascimento:</label>
                <input type="date" className='form-control w-75' id='Nascimento' name="data de nascimento" required/>
            </div>
            <div className="form-group m-2 d-flex align-itens-center justify-content-center">
                <label for="Sexo"className='me-2 m-auto'>Sexo:</label>
                <select className="form-select w-75" id="Sexo" name='Sexo' required>
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>
            </div>
            <div className="form-group m-2 d-flex align-itens-center justify-content-center">
                <label for="emailform"className='me-2 m-auto'>E-mail:</label>
                <input type="email" className='form-control w-75' id='emailform' name="E-mail" placeholder="Seu email" required/>
            </div>
            <div className="form-group m-2 d-flex align-itens-center justify-content-center">
                <label for="vagaform"className='me-2 m-auto'>Vaga Pretendida:</label>
                <input type="text" className='form-control w-75' id='vagaform' name="Vaga Pretendida" placeholder="Pretensão de vaga" required/>
            </div>
            <div className="form-group m-2 d-flex align-itens-center justify-content-center">
                <label for="resumo"className='me-2 m-auto'>Resuma seu currículo:</label>
                <textarea name="Resumo" id='resumo' className='form-control w-75' rows={5} placeholder="Resuma seu currículo" required></textarea>
            </div>
            <div className="form-group m-2 d-flex align-itens-right justify-content-end">
                <label for="curriculo"className='me-2 m-auto'>Currículo:</label>
                <input type="file" className='form-control w-75' id="curriculo"name="Curriculo" accept=".doc,.docx,.pdf" required/>
            </div>
            <div className="w-50 form-group m-2 d-flex align-itens-center justify-content-end">
                <button type="submit" class="btn btn-outline-success m-2 me-5">Enviar</button>
                <button type="reset" class="btn btn-outline-danger m-2 ms-5">Resetar</button>
            </div>

        </form>
      </div>
  )
}
