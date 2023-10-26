import React from "react";
import styled from "styled-components";
import {
  Box,
  CGrid,
  Container,
  Form,
  P,
  Section,
  Span,
  TituloPrincipal,
} from "../../../styles/tags";
import UserContext from "../../../UserContext";
import InputLogado from "../../../components/form/inputLogado/InputLogado";
import ButtonLogado from "../../../components/form/buttonLogado/ButtonLogado";
import { InputGroup } from "../../../components/form/inputLogado/InputLogadoStyled";
import { useNavigate } from "react-router-dom";
import { BASE_UPDATE_USUARIO } from "../../../utils/Api";
import useForm from "../../../hooks/useForm";

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;
  padding: 1rem;
`;

const Conta = () => {
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { data } = React.useContext(UserContext);
  const navigate = useNavigate();

  const nome = useForm();
  const telefone = useForm();
  const cpf = useForm();
  const senha = useForm();

  const handleSubmitAtualizarUsuario = async (event) => {
    event.preventDefault();

    try {
      setError(null);
      setLoading(true);
      const response = await fetch(`${BASE_UPDATE_USUARIO}${data.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          nome: nome.value,
          telefone: telefone.value,
          cpf: cpf.value,
          senha: senha.value,
        }),
      });

      if (response.ok) {
        window.localStorage.removeItem("usuario");
        window.localStorage.setItem(
          "usuario",
          JSON.stringify({
            id: data.id,
            name: nome.value,
            email: data.email,
            messageLogin: data.messageLogin,
          })
        );

        navigate("/cliente/inicio");
        window.location.reload();
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <TituloPrincipal>
            Olá, <Span>{data && data.name}</Span>
          </TituloPrincipal>

          <Box className="formulario-editar">
            <Form
              style={{ width: "100%" }}
              onSubmit={handleSubmitAtualizarUsuario}
            >
              <InputGroup background="#fff" border="solid 1px #2171AC">
                <InputLogado 
                  id="nome" label="Nome" cor="#2171AC" {...nome} 
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #2171AC">
                <InputLogado
                  id="telefone"
                  label="Telefone"
                  cor="#2171AC"
                  {...telefone}
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #2171AC">
                <InputLogado id="cpf" label="CPF" cor="#2171AC" {...cpf} />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #2171AC">
                <InputLogado
                  id="senha"
                  label="Senha"
                  cor="#2171AC"
                  type="password"
                  {...senha}
                />
              </InputGroup>

              {
                loading
                ? (
                  <ButtonLogado
                    w="max-content"
                    texto="Atualizando..."
                    fontSize={1.25}
                    color="#fff"
                    className="carregando"
                  />
                ) : (
                  <ButtonLogado
                    w="max-content"
                    texto="Salvar"
                    fontSize={1.25}
                    color="#fff"
                  />
                )
              }


              {error && <P>Verifique os dados</P>}
            </Form>
          </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Conta;
