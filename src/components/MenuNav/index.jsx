import Cris from "../../assets/cris.svg";
import * as S from "./style";

export const MenuNav = () => {
  return (
    <S.Container>
      <div>
        <a href="#">
          <img src={Cris} alt="Logo" />
        </a>
      </div>
      <S.Nav>
        <p>
          <a href="#">Início</a>
        </p>
        <p>
          <a href="#about">Sobre</a>
        </p>
        <p>
          <a href="#product">Serviços</a>
        </p>
        <p>
          <a href="#contact">Contato</a>
        </p>
      </S.Nav>
    </S.Container>
  );
};
