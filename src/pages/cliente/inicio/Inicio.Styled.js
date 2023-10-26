import styled, { keyframes } from "styled-components";
import detalhe from "../../../image/detalhe.svg";
import detalheCinza from "../../../image/detalhe-cinza.svg";

const loading = keyframes`
  0% {
		transform: rotate(0);
	}
	100% {
	transform: rotate(360deg);
  }
`;

export const BoxConversa = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);

  .fromulario-gpt {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-end;
    justify-items: flex-end;
    gap: 10px;
    padding: 0;
    margin-right: 60px;

    @media (max-width: 800px) {
      margin-right: 20px;

      .loading-gpt {
        width: 24px;
        height: 24px !important;
        border-radius: 50%;
        border: solid 4px #2171ac;
        border-top-color: transparent;
        background: #fff;
        padding: 0 !important;
        color: #fff;
        opacity: 1 !important;
        animation: ${loading} 2s linear infinite;
        overflow: hidden;
      }
    }
  }
`;

export const Conversa = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  margin-bottom: 1.5rem;
  padding-left: 6rem;
  overflow: auto;

  .box-conversa {
    position: relative;
  }

  .box-conversa .box-img {
    position: absolute;
    bottom: 8px;
    left: -56px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #fff;
    border: solid 4px #2bc48a;
    overflow: hidden;
  }

  .box-conversa .box-img img {
    width: 100%;
    height: 100%;
  }

  .texto-conversa {
    position: relative;
    margin-bottom: calc(2rem - 2px);
    max-width: 60%;
    line-height: 1.33;
    font-size: 1.25rem;
    padding: 1rem;

    @media (max-width: 800px) {
      max-width: initial;
      font-size: 1rem;
    }
  }

  .pergunta {
    position: relative;
    border-radius: 10px 10px 10px 0;
    border-top: solid 1px #4ea3e2;
    background: #6dbcf6;
    color: #001829;
  }

  .pergunta::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -46px;
    width: 46px;
    height: 36px;
    background: url(${detalhe});
  }

  .resposta {
    right: 0;
    transform: translateX(60%);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.5rem;
    align-items: flex-start;
    border-top: solid 1px #c3c3c3;
    border-radius: 10px 10px 0 10px;
    background: #e1e1e1;
    color: #121212;

    img {
      width: 20px;
      cursor: pointer;
    }

    @media (max-width: 800px) {
      transform: translateX(0);
      gap: 0.5rem;
    }
  }

  .resposta::before,
  .resposta::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -46px;
    width: 46px;
    height: 36px;
    background: url(${detalheCinza});
    transform: scaleX(-1);
  }

  .resposta::after {
    content: "C";
    display: flex;
    justify-content: center;
    align-items: center;
    right: -56px;
    bottom: 8px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2171ac 0%, #145b8e 100%, #053456 100%);
    transform: scaleX(1);
    font-size: 2rem;
    color: #fff;
  }

  .resposta:nth-child(even) {
    position: relative;
    left: -60px;
    z-index: 2;

    @media (max-width: 600px) {
      left: 0;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  @media (max-width: 800px) {
    padding-left: 4rem;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;
