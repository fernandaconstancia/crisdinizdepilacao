import * as S from "./style";

import Cera from "../../assets/cera.svg";
import Egito from "../../assets/egito.svg";
import Sobrancelha from "../../assets/sobrancelha.svg";
import Argila from "../../assets/argila.svg";
import Cilios from "../../assets/cilios.svg";
import Massagem from "../../assets/massagem.svg";

export const Product = () => {
  return (
    <S.Container>
      <h1>Nossos Serviços</h1>

      <S.BoxProduct>
        <div>
          <img src={Cera} alt="Epilação Cera" />
          <h3>Epilação Cera</h3>
          <p>
            A epilação consiste na remoção dos pelos como um todo. A extração
            ocorre por inteiro, incluindo a parte que fica por baixo da pele, a
            exemplo do bulbo piloso. Para o procedimento, são utilizados
            diferentes aparelhos/processos, como cera, pinça, laser, aparelhos
            elétricos para arrancar o pelo, luz pulsada, eletrólise e outros.
          </p>
        </div>
        <div>
          <img src={Egito} alt="Epilação Egípcia" />
          <h3>Epilação Egípcia</h3>
          <p>
            A técnica da epilação egípcia consiste na remoção dos pelos através
            de uma linha de seda ou 100% algodão, elimina os fios pequenos e até
            a penugem bem fina, que costuma aparecer na testa, buço, queixo e
            maçãs do rosto. Não se sabe ao certo a origem. Sabe-se que ela já
            era utilizada a favor da beleza em países do Oriente Médio antes de
            se popularizar e conquistar clientes no Ocidente.
          </p>
        </div>
        <div>
          <img src={Sobrancelha} alt="Design de Sobrancelhas" />
          <h3>Design de Sobrancelhas</h3>
          <p>
            É uma técnica utilizada para desenhar as sobrancelhas e tem como
            objetivo valorizar o rosto e expressão da cliente. Para isso, é
            levado em consideração a personalidade da mulher, assim como o
            formato do rosto.
          </p>
        </div>
        <div>
          <img src={Argila} alt="Detox Facial" />
          <h3>Detox Facial</h3>
          <p>
            A desintoxicação facial é um procedimento estético essencial para
            revitalizar a pele do rosto. Ela é indicada para quem usa muita
            maquiagem, para quem tem pele acne, pele oleosa, para quem é fumante
            ou para peles que estão desvitalizadas e cansadas. Com a combinação
            de peeling de diamante e argila verde, ela ajuda a eliminar o
            acúmulo de produtos que obstruem os poros.
          </p>
        </div>
        <div>
          <img src={Cilios} alt="Alongamento de Cílios" />
          <h3>Alongamento de Cílios</h3>
          <p>
            A técnica de alongamento dos cílios consiste na colagem de fios
            sintéticos sobre os cílios naturais. A quantidade vai variar com o
            gosto da cliente e seu objetivo com o alongamento. Por ter previsão
            de durar entre 1 a 2 meses, deve ser repetido constantemente caso a
            pessoa deseje manter o efeito.
          </p>
        </div>
        <div>
          <img src={Massagem} alt="Massagem Relaxante" />
          <h3>Massagem Relaxante</h3>
          <p>
            Trata-se de manobras especializadas empregadas no músculo,
            conferindo ao indivíduo relaxamento e alívio muscular. Além de
            produzir efeitos nos sistemas muscular e nervoso, essa massagem age
            com eficácia nos sistemas linfático, circulatório e respiratório.
          </p>
        </div>
      </S.BoxProduct>
    </S.Container>
  );
};
