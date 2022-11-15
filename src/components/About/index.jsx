import * as S from "./style";

import Perfil from "../../assets/image2.svg";
import Item from "../../assets/butterfly.svg";

export const About = () => {
  return (
    <S.Container>
      <h1>Sobre Nós</h1>
      <S.BoxPerfil>
        <img src={Perfil} alt="Perfil" />
        <p>
          Cris Diniz Depilação oferece uma variedade de serviços de estilo e
          produtos para deixar você com o visual que deseja. Com uma extensa
          seleção, temos tudo para alcançar os resultados que você deseja. Se
          você tem um casamento, uma festa ou um evento chegando, ou se você
          simplesmente querendo se cuidar, ligue ou envie um Whatsapp hoje
          mesmo!
        </p>
      </S.BoxPerfil>
      <S.Resume>
        <li>
          <img src={Item} alt="Item1" />
          Mais de 5 anos de experiência no mercado de beleza.
        </li>
        <li>
          <img src={Item} alt="Item2" />
          Atuamos em todo território nacional, possuindo parceiros e mais de 400
          clientes.
        </li>
        <li>
          <img src={Item} alt="Item3" />
          Nossos procedimento ajudam na auto estima de mais de 200 mulheres
          mensalmente.
        </li>
        <li>
          <img src={Item} alt="Item4" />
          Além da nossa expertise na área da beleza, temos serviços de workshop
          exclusivo e de consultoria personalizada.
        </li>
      </S.Resume>
    </S.Container>
  );
};
