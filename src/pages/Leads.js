import React from "react";
import {
  CGrid,
  Container,
  Div,
  Form,
  Iframe,
  P,
  Paragrafo,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import Input, { InputGroup } from "../components/form/input/Input";
import { styled } from "styled-components";
import Button from "../components/form/button/Button";
import { BASE_MINERAR } from "../utils/Api";

const DivMapa = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;

  iframe {
    position: absolute;
    top: -147px;
    width: 119%;
    height: 147%;
    border: none;
  }
`;

const Leads = () => {
  const [cidade, setCidade] = React.useState('')
  const [nicho, setNicho] = React.useState('')
  const [alcance, setAlcance] = React.useState('')
  const [maisInformacoes, setMaisInformacoes] = React.useState('')
  
  const handleMinerar = (event) => {
    event.preventDefault();

    console.log(`Cidade do ${cidade} ${nicho} ${alcance} ${maisInformacoes}`)

    fetch(BASE_MINERAR, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({
        url: "https://www.google.com.br/maps",
        typeSearch: "MAPSGOOGLE",
        keys: `Cidade do ${cidade} ${nicho} ${alcance} ${maisInformacoes}`
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

      setCidade('')
      setNicho('')
      setAlcance('')
      setMaisInformacoes('')
  }
  return (
    <Container>
      <CGrid grid="1fr" padding="60px 0" style={{ width: "100%" }}>
        <TituloPrincipal>
          Defina o seu <Span>Público Alvo</Span>
        </TituloPrincipal>

        <Paragrafo>
          Preencha os campos abaixo e descubra <Span>potenciais clientes</Span>{" "}
          perto de você
        </Paragrafo>

        <Div style={{ width: "100%" }}>
          <Form
            onSubmit={handleMinerar}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
              marginBottom: "34px",
            }}
          >
            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <Input
                placeholder="Cidade"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>

            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <Input
                placeholder="Nicho de busca"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>

            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <Input
                placeholder="Alcance"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>

            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <Input
                placeholder="Mais informações"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>

            <Button 
              texto="Minerar"
              fontSize={1.25}
              type="first"
              color="#fff"
              style={{
                height: '40px',
                padding: '.5rem 1.2rem'
              }} 
            />
          </Form>
        </Div>

        <DivMapa>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.842355544167!2d-46.62580232393874!3d-23.574104678791148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597abf1a28ff%3A0x1b02a58f85e6395e!2sFIAP!5e0!3m2!1spt-BR!2sbr!4v1693168848459!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></Iframe>
        </DivMapa>

        <CGrid grid="1fr auto" alignItems="center" gap="1rem">
          <P>Adicione a base de dados dos seus clientes arquivo .CSV</P>

          <Button texto="Upload" fontWeight="550" type="first" color="#fff" />
        </CGrid>

        <Div className="btnSalvar">
          <Button texto="Salvar" type="fourth" color="#fff" />
        </Div>
      </CGrid>
    </Container>
  );
};

export default Leads;
