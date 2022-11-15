import * as S from "./style";

import { SiFacebook, SiInstagram } from "react-icons/si";

export const Contact = () => {
  return (
    <S.Container>
      <h1>Contato</h1>
      <S.Content>
        <p>Agende seu atendimento conosco através do nosso Whatsapp</p>
        <button>Agende seu atendimento</button>
        <p>Siga as nossas redes sociais</p>
        <S.BoxSocial>
          <SiFacebook />
          <SiInstagram />
        </S.BoxSocial>
      </S.Content>
    </S.Container>
  );
};
