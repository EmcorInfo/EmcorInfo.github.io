import React from 'react';
import Titulo from '../Titulo/Titulo';
import "./form.css"

function ContactUs(props) {
    const localizacao = window.location.href;
    var arr = localizacao.split("/");


    return (<>
        <Titulo titulo="Fale Conosco"/>
        <div className="bg-secondary contact4 overflow-hiddedn position-relative w-100">
        {/* Row */}
        <div className="row no-gutters w-100">
            <div className="container m-0">
            <div className="col-lg-6 contact-box m-0 smb-4">
                <div className="p-4 bg-dark bg-opacity-75" style={{marginLeft:"1rem"}}>
                <h1 className="title font-weight-light text-white mt-2">Fale Conosco</h1>
                <form className="mt-3" action="https://formsubmit.co/atendimento@hospitalemcor.com.br" method="POST">
                    <input type="hidden" name="_next" value={"http://" + arr[2] + "/sucesso"}/>
                    <input type="hidden" name="_template" value="table"/>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group mt-2">
                        <input className="form-control text-white" name='name' type="text" placeholder="Nome" required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group mt-2">
                        <input className="form-control text-white" name='email' type="email" placeholder="E-mail" required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group mt-2">
                        <textarea className="form-control text-white" name='message' rows="3" placeholder="Mensagem" required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex align-items-center mt-2">
                        <button type="submit" className="btn btn-outline-light px-3 py-2"><span> Enviar</span></button>
                        <span className="ml-auto text-white align-self-center m-3"><i className="fa fa-phone fa-2xl mx-2" aria-hidden="true"></i>(21) 3759-8100</span>
                    
                    </div>
                    <div className="col-lg-12 d-flex align-items-center mt-2">
                        <a href="https://wa.me/5521986436540" rel='noreferrer' target="_blank" className='WhatsappButton'> </a>
                    </div>
                    </div>

                </form>
                </div>
            </div>
            </div>
            <div className="col-lg-6 right-image" style={{paddingRight:'0'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14716.703570503058!2d-43.4474776!3d-22.7588528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f964c98fdd41219!2sEmcor%20Emerg%C3%AAncia%20Clin%20Cardiol%C3%B3gica!5e0!3m2!1spt-BR!2sbr!4v1663962135411!5m2!1spt-BR!2sbr"
                width="100%" height="100%" frameborder="0" title='mapa' style={{border:"0", paddingLeft:'0'}} allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe>
            </div>
        </div>
        </div>

    </>);
}

export default ContactUs;