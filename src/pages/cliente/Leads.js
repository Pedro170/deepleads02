import React from "react";
import { CGrid, Div, Form, Iframe, P, Paragrafo, Span } from "../../styles/tags";
import { styled } from "styled-components";
import { BASE_MINERAR_DEV } from "../../utils/Api";
import UserContext from "../../UserContext";
import { InputGroup } from "../../components/form/inputLogado/InputLogadoStyled";
import InputLogado from "../../components/form/inputLogado/InputLogado";
import ButtonLogado from "../../components/form/buttonLogado/ButtonLogado";
 
const DivMapa = styled.div`
  position: relative;
  width: 100%;
  height: 492px;
  border-radius: 10px;
  border: solid 1px #C3C3C3;
  overflow: hidden;
 
  iframe {
    position: absolute;
    top: -147px;
    width: 119%;
    height: 147%;
    border: none;
  }
`;
 
const Leads = () => {
  const [cidade, setCidade] = React.useState("");
  const [nicho, setNicho] = React.useState("");
  const [alcance, setAlcance] = React.useState("");
  const [maisInformacoes, setMaisInformacoes] = React.useState("");
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
 
  const { data } = React.useContext(UserContext)
 
  const handleMinerar = async (event) => {
    event.preventDefault();
   
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(`${BASE_MINERAR_DEV}${data.id}&maxPersistenceSize=5&maxLeadsListSize=15`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: "https://www.google.com.br/maps",
          typeSearch: "MAPSGOOGLE",
          keys: `Cidade do ${cidade} ${nicho} ${alcance} ${maisInformacoes}`,
        }),
      })
 
      if(response.ok) {
        setLoading(false)
      }
    } catch (err) {
      setError(err)
      setLoading(false);
    } finally {
      setLoading(false)
    }
 
    setCidade("");
    setNicho("");
    setAlcance("");
    setMaisInformacoes("");
  };
  return (
    <CGrid grid="1fr 1fr" gap="20px" alignitems="flex-start" padding="1rem 0" style={{ width: "100%" }}>
      <DivMapa>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.842355544167!2d-46.62580232393874!3d-23.574104678791148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597abf1a28ff%3A0x1b02a58f85e6395e!2sFIAP!5e0!3m2!1spt-BR!2sbr!4v1693168848459!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></Iframe>
      </DivMapa>
 
      <Div style={{ width: "100%" }}>
        <Paragrafo style={{width: '23ch', margin: '0 auto'}}>
          Preencha os campos abaixo e descubra <Span>potenciais clientes</Span>
        </Paragrafo>
        <Form
          onSubmit={handleMinerar}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          <InputGroup background="#fff" border="solid 1px #2171AC">
            <InputLogado
              id="cidade"
              label="Cidade"
              cor="#2171AC"
              value={cidade}
              onChange={({ target }) => setCidade(target.value)}
            />
          </InputGroup>
 
          <InputGroup background="#fff" border="solid 1px #2171AC">
            <InputLogado
              id="nicho"
              label='Nicho de busca'
              cor="#2171AC"
              value={nicho}
              onChange={({ target }) => setNicho(target.value)}
            />
          </InputGroup>
 
          <InputGroup background="#fff" border="solid 1px #2171AC">
            <InputLogado
              id="alcance"
              label="Alcance"
              cor="#2171AC"
              value={alcance}
              onChange={({ target }) => setAlcance(target.value)}
            />
          </InputGroup>
 
          <InputGroup background="#fff" border="solid 1px #2171AC">
            <InputLogado
              id="informações"
              label="Mais informações"
              placeholder=""
              cor="#2171AC"
              value={maisInformacoes}
              onChange={({ target }) => setMaisInformacoes(target.value)}
            />
          </InputGroup>
         
          {
            loading
            ? <ButtonLogado  w='max-content' className="carregando" texto="Minerando leads..." fontSize={1.25} type="first" color="#fff"/>
 
            : <ButtonLogado  w='max-content' texto="Minerar" fontSize={1.25} type="first" color="#fff"/>
          }
 
          {error && <P>${error}</P>}
        </Form>
      </Div>
    </CGrid>
  );
};
 
export default Leads;
 