import Logo from "../../assets/Logo.svg";
import * as S from "./style";

export const MenuNav = () => {
  return (
    <S.Container>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <S.Nav>
        <p>Início</p>
        <p>Sobre</p>
        <p>Serviços</p>
        <p>Contato</p>
      </S.Nav>
    </S.Container>
  );
};
