import styled from "styled-components";

export const ContainerGrid = styled.div`
  background: linear-gradient(
    107deg,
    #3474a3 25.31%,
    rgba(35, 126, 193, 0.58) 69.54%
  );
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.25) inset;
  padding: 45px 0;

  h1 {
    text-align: center;
    font-weight: normal;
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
