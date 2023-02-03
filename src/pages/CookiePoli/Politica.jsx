import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Footer2 from '../../components/footer2/Footer2';
import Topbar from '../../components/topbar/Topbar';
import "./politica.css"

export default function Politica() {
  return (<>
    <Topbar/>
    <h3 className="text-center bg-dark text-light">Política de Privacidade</h3>
    <div className="container mt-3 p-5 pt-0 teste">
      <p className='capitular'>
        A presente Política de Privacidade e de Proteção de Dados <strong>(Política)</strong> se aplica a toda atividade de
        tratamento de dados pessoais realizada pelo EMCOR HOSPITAL DO CORAÇÃO E DE CLINICAS DE N IGUACU LTDA
        e serve para regular, de forma transparente, como são coletados, utilizados e protegidos os dados
        pessoais dos pacientes e das demais pessoas cujos dados são tratados na unidade física ou no
        site <a className='text-danger' style={{textDecoration:"none"}} href='/'>www.hospitalemcor.com.br</a> pelo Hospital EMCOR.
      </p>
      <h5 className="text-center bg-dark text-light">1 . O QUE SÃO OS DADOS PESSOAIS:</h5>
      <p className='capitular'>
        Dado pessoal é qualquer informação relacionada ao Titular que possa identificá-lo de maneira
        direta ou indireta, tais como dados cadastrais, dados sobre utilização de serviços vinculados à sua
        pessoa e identificadores eletrônicos. Dado pessoal sensível é uma categoria especial, por ser
        referente à origem racial, religião, opinião política, filiação a sindicato ou a organização religiosa,
        política ou filosófico, à saúde ou à vida sexual, dado genético ou biométrico da pessoa natural.
      </p>
      <h5 className="text-center bg-dark text-light">2 . A FINALIDADE DA UTILIZAÇÃO DOS DADOS PESSOAIS E CONSENTIMENTO:</h5>
      <p className='capitular'>
        Os dados pessoais podem ser coletados para permitir que sejam prestados os serviços de
        forma adequada e segura, para identificação dos Titulares, para efetuar tratamentos clínicos
        ou assistenciais, realizar consultas médicas, analisar o histórico clínico para diagnóstico,
        prescrever medicamentos, realizar exames, identificar doenças ou condições de saúde que
        prevalecem em determinados grupos, verificar eventuais restrições de tratamento devido à
        orientação/crença religiosa, para a comunicação com o Titular, para aprimoramento do Site,
        para, em casos de emergência, preservar a vida e a incolumidade física, nos casos de
        atendimentos emergenciais, em que a coleta do consentimento para procedimentos de alto
        risco se torna inviável, para realização de ações de marketing, para processar pagamentos,
        para o exercício regular de direitos em processos judiciais, administrativos ou arbitrais, para
        persecução de interesses legítimos, para a condução de atividades que visam prevenir a
        ocorrência de fraudes, para cumprimento de obrigações legais ou regulatórias e por razões
        de segurança.<br/>
        Ao contratar os serviços do EMCOR, o Titular concorda expressamente com o tratamento de
        seus dados pessoais nas finalidades aqui descritas, sendo que, para as ações de marketing, será
        solicitado o consentimento prévio e expresso do Titular, o qual poderá ser revogado a qualquer
        momento por ele.<br/>
        Na hipótese de algum serviço ser prestado a pessoas menores de idade, o EMCOR buscará a
        autorização de seus representantes legais, nos termos das legislações aplicáveis.
      </p>
      <h5 className="text-center bg-dark text-light">3 . A FORMA DE COLETA DOS DADOS PESSOAIS:</h5>
      <p>
        São coletados dados pessoais fornecidos:
        <br/><br />
        <h6>3.1. Diretamente pelos Titulares</h6>
        Ao efetuar o cadastro no EMCOR ou contratar um serviço, preencher formulários, mandar
        documentos e exames, assinar contratos, enviar email ou mensagens, telefonar, o Titular informa
        alguns dados pessoais, que serão coletados e tratados pelo EMCOR.
        <h6>3.2. Por terceiros</h6>
        O EMCOR poderá também receber os dados pessoais por intermédio de terceiros, sejam
        parceiros ou prestadores de serviços, que possuam algum relacionamento com o Titular e tenha
        obtido os dados em conformidade com a legislação aplicável.
        <h6>3.3. De forma automática</h6>
        Ao acessar o Site, dados do Titular são coletados de forma automática, através do uso de
        tecnologias de mercado, como cookies, por exemplo.
        <h6>3.4. Por meio de fontes publicamente disponíveis</h6>
        Além disso, o EMCOR pode coletar os dados de bases públicas, disponibilizadas pelas
        autoridades, por terceiros ou pelo próprio Titular em sites ou redes sociais.
      </p>
      <h5 className="text-center bg-dark text-light">4 . OS DADOS PESSOAIS QUE PODEM SER COLETADOS:</h5>
        <h6>4.1. Dados cadastrais, de identificação pessoal como:</h6> <p>nome completo, imagem, endereço, CEP,
        país, número de telefone, gênero, data de nascimento, registro civil, estado civil, origem racial ou
        étnica, endereço de email, número do CPF, CNH, R.G., registros profissionais, profissão, número
        do passaporte e filiação.</p>
        <h6>4.2. Dados financeiros:</h6> <p> dados de conta bancária, dados de cartão de crédito, carteira do plano de
        saúde. </p>
        <h6>4.3. Dados sobre a saúde:</h6><p> relatórios de anamnese, registros médicos necessários ao atendimento
        para fins de prestação de serviço de assistência médico-hospitalar dados genéticos, exames de
        saúde. </p>
        <h6>4.4. Dados sobre uso de aplicações e funcionalidade via internet:</h6><p> endereço IP, navegador utilizado,
        informações sobre a navegação pelo Site, </p>
        <h6>4.5. Dados adicionais:</h6><p> orientação sexual, religião, vida sexual.</p>
    <h5 className="text-center bg-dark text-light">5 . O COMPARTILHAMENTO DOS DADOS PESSOAIS</h5>
      <p><h6>5.1. Os dados pessoais dos Titulares são compartilhados pelo EMCOR:</h6>
        <p className='ml-3'>&emsp;<strong>5.1.1. &nbsp; </strong><em>Com fornecedores e prestadores de serviços do EMCOR, tais como: operadoras de
        planos de saúde, clínicas para exames.</em></p>
        <p>&emsp;<strong>5.1.2. &nbsp; </strong> <em>No caso de transações e operações societárias envolvendo o EMCOR, quando for
        necessário para continuidade das negociações;</em></p>
        <p>&emsp;<strong>5.1.3. &nbsp; </strong><em> Com as autoridades públicas, administrativas ou judiciárias, para proteção dos interesses do
        EMCOR em caso de conflito, ações judiciais e processos administrativos ou quando solicitado
        por essas autoridades, nos termos de lei ou regulamentos aplicáveis.</em></p>
        <p>&emsp;<strong>5.1.5.</strong><em> Com o Ministério da Saúde para formação do conjunto mínimo de dados, consoante artigo
        47 da <strong>Lei nº 8.080/1990</strong>;</em></p>
        <p>&emsp;<strong>5.1.6.</strong><em> Com os órgãos competentes, para notificação compulsória de doenças, conforme <strong>Lei nº
        6.259/1975</strong>.</em></p>
        <h6>5.2. As informações coletadas pelo EMCOR podem ser armazenadas em servidores e
        hospedagem de dados localizados no Brasil.</h6>
        <h6> 5.3. Os terceiros somente são autorizados a utilizar os dados pessoais dos Titulares para os fins
        específicos e nos limites de suas contratações.</h6></p>
    <h5 className="text-center bg-dark text-light">6 . DIREITOS DO CLIENTE</h5>
    <p><p> O Titular tem direito de obter, em relação aos seus dados pessoais, a qualquer momento e mediante requisição:</p>
    <p><strong>6.1.</strong> A confirmação da existência de tratamento;</p>
    <p><strong>6.2.</strong> O acesso aos dados;</p>
    <p><strong>6.3.</strong> A correção dos dados incompletos, inexatos ou desatualizados;</p>
    <p><strong>6.4.</strong> A anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na <strong>Lei nº 13.709/2018</strong>;</p>
    <p><strong>6.5.</strong> A portabilidade dos dados;</p>
    <p><strong>6.6.</strong> A eliminação dos dados pessoais tratados com o consentimento do Cliente, exceto nas hipóteses previstas na <strong>Lei nº 13.709/2018</strong>;</p>
    <p><strong>6.7.</strong> Informação das entidades públicas e privadas com as quais foram os dados pessoais compartilhados;</p>
    <p><strong>6.8.</strong> Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa, quando aplicável;</p>
    <p><strong>6.9.</strong> A revogação do consentimento, quando aplicável.</p>
    <p>Para exercer os seus direitos como Titular de dados pessoais, você deve enviar a solicitação para o
        Encarregado de Dados Pessoais, conforme item 10 dessa Política.
        O EMCOR ressalta a possibilidade da sua requisição ser legalmente rejeitada, seja por
        motivos formais (a exemplo de impossibilidade de comprovação da sua identidade) ou legais (a
        exemplo do pedido de exclusão de dados cuja manutenção é obrigatória), sendo certo que, na
        hipótese de impossibilidade de atendimento destas requisições, o EMCOR apresentará ao
        Titular as justificativas razoáveis.</p>
    </p>
    <h5 className="text-center bg-dark text-light">7 . TEMPO DE RETENÇÃO DE SEUS DADOS PESSOAIS:</h5>
    <p>Os dados pessoais dos Titulares são mantidos pelo tempo necessário para cumprir com as
      finalidades para as quais são coletados, bem como para o cumprimento de obrigações legais ou
      regulatórias a exemplo da Lei do Prontuário Eletrônico <strong>(artigo 6º da Lei 13.787/2018)</strong> que
      determina a guarda do respectivo documento por, no mínimo, 20 (vinte) anos, a partir do último
      registro, levando em conta também a eventual necessidade de utilização em processos judiciais,
      administrativos ou arbitrais. <br />
      Para determinar o período de retenção adequado para os dados pessoais são considerados os
      propósitos pelos quais os dados pessoais serão tratados, o tipo de dado processado, a existência
      de legislação específica que exija sua guarda e manutenção, bem como a existência de alguma
      pendência do Titular para com o EMCOR.</p>
    <h5 className="text-center bg-dark text-light">8 . SEGURANÇA</h5>
    <p>São empregadas medidas de segurança para proteger os dados pessoais dos Titulares, sendo que
      o EMCOR está sempre buscando aprimorar seus controles para proteger os dados pessoais
      de acessos não autorizados, e de situações de destruição, perda, alteração, quebra de sigilo e
      difusão de tais dados. São utilizadas ferramentas para prevenção de incidentes como controles de
      acesso.</p>
    <h5 className="text-center bg-dark text-light">9 . UTILIZAÇÃO DE COOKIES:</h5>
    <p>Cookies são pequenos arquivos que são gravados em seu computador quando você acessa sites
      na Internet. Quando o Site é visitado, este envia o cookie para o seu computador ou celular, o qual
      é armazenado em uma pasta localizada dentro do seu browser.
      O EMCOR utiliza apenas os cookies necessários, que são essenciais para que você navegue
      corretamente no Site, bem como faça o uso das funcionalidades disponíveis.</p>
    <h5 className="text-center bg-dark text-light">10 . ENCARREGADO:</h5>
    <p>Caso tenha alguma dúvida sobre a Política, ou queira exercer quaisquer dos direitos de Titular,
      conforme descrito acima, entre em contato com o Encarregado pelo tratamento de proteção de
      dados pessoais da EMCOR, __________________________, pelo email <a className='text-danger' style={{textDecoration:"none"}} href="mailto:atendimento@hospitalemcor.com.br?Subject=Politica%20de%20Cookies">atendimento@hospitalemcor.com.br</a>( e-mail temporário).
    </p>
    <h5 className="text-center bg-dark text-light">11.VIGÊNCIA E ATUALIZAÇÃO DESTA</h5>
    <p>A Política foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoas <strong>(Lei nº
      13.709/18)</strong> e o Marco Civil da Internet <strong>(Lei 12.965/14)</strong>, tendo validade por prazo indeterminado.
      Esta Política poderá ser revisada a qualquer momento pelo EMCOR. As alterações que vierem
      a ocorrer serão imediatamente disponibilizadas no site do EMCOR.</p>
</div>
    <Breadcrumb crumb="Política de Privacidade"/> 
    <Footer2/>
  </>);
}
