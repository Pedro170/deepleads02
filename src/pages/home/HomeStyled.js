import styled from "styled-components";



export const ContainerGrid = styled.div`
  background: linear-gradient(
    107deg,
    #3474a3 25.31%,
    rgba(35, 126, 193, 0.58) 69.54%
  );
  padding: 45px 0;

  h1 {
    text-align: center;
    font-weight: normal;
  }

  h2 .svg-icon {
    content: url('../../image/home/linhaSvg.png');
    position: absolute;
    bottom: -20px; /* Ajuste a posição vertical conforme necessário */
    left: 50%; /* Centralize horizontalmente */
    transform: translateX(-50%); /* Centralize horizontalmente */
    width: 50px; /* Defina a largura do SVG conforme necessário */
    height: 50px; /* Defina a altura do SVG conforme necessário */
    background: url('caminho-para-o-seu-arquivo-svg.svg') no-repeat; /* Substitua pelo caminho correto para o seu SVG */
    background-size: cover;
}
`;

export const ContainerGrid2 = styled.div`
  background: #4EA3E2;
  padding: 45px 0;

  h1 {
    text-align: center;
    font-weight: normal;
    
  }

  h3 {
    text-align: start;
    font-weight: bolder;
    color: white;
    width: 250px;
    font-size: 28px;
    margin-bottom: 16px;
  }

  p {
    color: #FFF;
    width: 300px;
    font-size: 18px;
  }

  
`;

export const ItemGrid = styled.div`
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  min-height: 15.25rem;

  h2 {
    color: #2171ac;
    font-weight: normal;
  }

  @media (max-width: 600px) {
    min-height: initial;
  }
`;

export const ContainerGridRoboTexto = styled.div`
  .item-robo-texto {
    min-height: 22.5rem;
  }

  .robo, .cifrao {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 2rem;
    width: 100%;
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      #2171ac 0%,
      rgba(47, 149, 224, 0.72) 138.84%
    );
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    h2 {
      color: #fff;
    }
  }

  .cifrao {
    background: linear-gradient(180deg, #959595 0%, rgba(0, 0, 0, 0.72) 138.84%);
  }

  .texto {
    border: solid 2px #2171ac;
  }
`;
