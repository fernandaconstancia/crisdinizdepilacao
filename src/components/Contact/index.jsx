import * as S from "./style";

import {
  SiFacebook,
  SiInstagram,
  SiGoogle,
  SiPinterest,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

export const Contact = () => {
  return (
    <>
      <S.Container>
        <a name="contact" />
        <h1>Contato</h1>
        <S.Content>
          <p>Agende seu atendimento conosco através do nosso Whatsapp</p>
          <button type="submit">
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5521976430017&text=Oii,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio"
              target="_blank"
            >
              Agende seu atendimento
            </a>
          </button>
          <p>Siga as nossas redes sociais</p>
          <S.BoxSocial>
            <a
              href="https://www.facebook.com/crisdinizdepilacao/"
              target="_blank"
            >
              <SiFacebook />
            </a>
            <a
              href="https://www.instagram.com/crisdinizdepilacao/"
              target="_blank"
            >
              <SiInstagram />
            </a>
            <a
              href="https://cris-diniz-depilacao.negocio.site/"
              target="_blank"
            >
              <SiGoogle />
            </a>
            <a href="https://br.pinterest.com/cdiniz0237/" target="_blank">
              <SiPinterest />
            </a>
            <a
              href="https://www.linkedin.com/in/cris-diniz-depila%C3%A7%C3%A3o-5957521b0/"
              target="_blank"
            >
              <SiLinkedin />
            </a>
            <a href="https://twitter.com/DepilacaoCris" target="_blank">
              <SiTwitter />
            </a>
          </S.BoxSocial>
        </S.Content>
      </S.Container>
      <S.Footer>
        <div />
        <p>
          <a
            href="https://www.linkedin.com/in/fernandaconstancia/"
            target="_blank"
          >
            Fernanda Constância - Todos os direitos reservados
          </a>
        </p>
      </S.Footer>
    </>
  );
};
