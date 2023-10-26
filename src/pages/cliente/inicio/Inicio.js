import React from "react";
import copy from "../../../image/copy.svg";
import {
  CGrid,
  Div,
  Form,
  Img,
  P,
  Section,
  Span,
} from "../../../styles/tags";
import { BASE_CHAT_DEV } from "../../../utils/Api";
import { BoxConversa, Conversa } from "./Inicio.Styled";
import Textarea from "../../../components/form/textarea/Textarea";
import {
  ButtonGPT,
  InputGroup,
} from "../../../components/form/textarea/TextareaStyled";
import UserContext from "../../../UserContext";
 
const Inicio = () => {
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [campanha, setCampanha] = React.useState("");
  const { imgusuario } = React.useContext(UserContext)

  const mensagemGPT = async (e) => {
    e.preventDefault();
    const conversa = document.querySelector("#conversa");
 
    conversa.innerHTML += `
      <div class="box-conversa">
        <div class="box-img">
          <img src=${imgusuario} alt=src=${campanha} />
        </div>
        <p class="texto-conversa pergunta">
          ${campanha}
        </p>
      </div>
    `;
 
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(
        `${BASE_CHAT_DEV}message?message=${campanha} com 25 palavras`
      );
 
      if (response.ok) {
        const json = await response.json();
        conversa.innerHTML += `
        <p class="texto-conversa resposta">
          <span>${json.response}</span>
          <img src="${copy}" alt="documento" class="btn-copia" />
        </p>
      `;
 
        setCampanha("");
      } else {
        setError("erro");
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
 
    const p = document.querySelector(".texto-conversa.resposta span");
    const buttons = document.querySelectorAll(".btn-copia");
    const storage = document.createElement("textarea");
 
    if (buttons) {
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          let paragrafo = button.parentElement.nextSibling.previousSibling.innerText
          const texto = paragrafo;
          storage.value = texto.replace(/["]/g, "");
          p.appendChild(storage);
          storage.select();
          storage.setSelectionRange(0, 99999);
          document.execCommand("copy");
          p.removeChild(storage);
        })
      });
    }
  };
 
  return (
    <Section>
      <CGrid grid="1fr" padding="30px 0">
        <Div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <BoxConversa>
            <Conversa id="conversa">
              <Div className="box-conversa">
                <Div className="box-img">
                  <Img
                    src={imgusuario}
                    alt="documento"
                  />
                </Div>
                <P className="texto-conversa pergunta">
                  Campanha para venda de motos
                </P>
              </Div>
 
              <P className="texto-conversa resposta">
                <Span>
                  "Não perca a chance de acelerar seus sonhos! Aproveite nossa
                  campanha imperdível e garanta já sua moto com descontos
                  incríveis. Vem ser livre, vem de moto!"
                </Span>
                <Img src={copy} alt="documento" />
              </P>
            </Conversa>
 
            <Div style={{ width: "100%" }}>
              <Form className="fromulario-gpt">
                <InputGroup background="#F0F0F0" border="solid 1px #C3C3C3">
                  <Textarea
                    rows="1"
                    placeholder="Digite em alguma palavras o que você gostaria..."
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                    value={campanha}
                    onChange={({ target }) => setCampanha(target.value)}
                  />
                </InputGroup>
 
                {loading ? (
                  <Span
                    style={{ height: "40px", padding: ".5rem 1.2rem" }}
                    className="carregando loading-gpt"
                  >
                    Aguardando resposta...
                  </Span>
                ) : (
                  <ButtonGPT onClick={mensagemGPT} />
                )}
              </Form>
            </Div>
 
            {error && <P>{error}</P>}
          </BoxConversa>
        </Div>
      </CGrid>
    </Section>
  );
};
 
export default Inicio;