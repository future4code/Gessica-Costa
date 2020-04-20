import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import Mensagem from './components/Mensagem/Mensagem'
import Header from './components/Header/Header'
import imagemEmail from './email.png'
import imagemAdress from './adress.png'

function App() {
  return (
    <div className="App">
      <Header
      />
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQEo6tfGzElRBg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=anmY0o9apGcoVnUtkhYXSQ-WtfU2B4aOGYBZuPSOlMA"
          nome="Géssica Costa"
          descricao="Oi, eu sou a Géssica. Sou aluna da Labenu e sou formada em Engenharia Elétrica pela UFRN."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={imagemEmail}
          nome="Email:"
          valor=" gessica@gmail.com"
        />
        <CardPequeno
          imagem={imagemAdress}
          nome="Endereço:"
          valor=" Banff Ave"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação acadêmica</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_200_200/0?e=1594857600&v=beta&t=BXqJmPY12-TZxOAwRvPPIO84WAUXmYVKx53TGXt5hfQ"
          nome="Universidade Federal do Rio Grande do Norte"
          descricao="Graduação, Engenharia Elétrica."
        />
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHmVhe5XeVbnA/company-logo_200_200/0?e=1594857600&v=beta&t=p1Li49tE36gTi6lOuurQxlHj2IfeN7bgmPU97d84sXo"
          nome="Superintendência de Informática - UFRN"
          descricao="Bolsista, Analista de helpdesk."
        />
      </div>
      <div>
        <div className="page-section-container">
          <h2>Minhas redes sociais</h2>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </div>
        <Mensagem
          mensagem="Mensagem"
        />
      </div>
    </div>
  );
}

export default App;
