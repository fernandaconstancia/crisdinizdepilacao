import Face from "../../assets/imageface.svg";

import * as S from "./style";

export const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>Cuidados Estéticos</h1>
        <p>Cuidar da pele não é custo</p>
        <span>É investimento!</span>
        <button>Agende seu atendimento</button>
      </S.Content>
      <div>
        <img src={Face} alt="Face" />
      </div>
    </S.Container>
  );
};
