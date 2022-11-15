import Face from "../../assets/imageface.svg";

import * as S from "./style";

export const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>Cuidados Estéticos</h1>
        <p>Cuidar da pele não é custo</p>
        <span>É investimento!</span>
        <button type="submit">
          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5521976430017&text=Oii,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio"
            target="_blank"
          >
            Agende seu atendimento
          </a>
        </button>
      </S.Content>
      <div>
        <img src={Face} alt="Face" />
      </div>
    </S.Container>
  );
};
