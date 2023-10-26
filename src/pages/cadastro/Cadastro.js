import React from "react";
import usuario from "../../image/Usuario.png";
import {
  Box,
  Br,
  CGrid,
  Form,
  Img,
  P,
  Paragrafo,
  Section,
  Span,
} from "../../styles/tags";
import Input from "../../components/form/input/Input";
import Button from "../../components/form/button/Button";
import { UserContext } from "../../UserContext";
import useForm from "../../hooks/useForm";
import { USER_POST } from "../../utils/Api";
import { InputGroup } from "../../components/form/input/InputStyled";

const Cadastro = () => {
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const nome = useForm();
  const telefone = useForm();
  const email = useForm("email");
  const cpf = useForm();
  const senha = useForm();

  const { userLogin } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErro(null);
      setLoading(true);

      const { url, options } = USER_POST({
        nome: nome.value,
        telefone: telefone.value,
        email: email.value,
        cpf: cpf.value,
        senha: senha.value,
        endereco: [],
      });

      const response = await fetch(url, options);

      if (response.ok) {
        userLogin(email.value, senha.value);
      } else {
        setErro("Verifique se o cpf está correto!");
      }
    } catch (err) {
      setErro(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <CGrid grid="1fr">
        <Box>
          <Img src={usuario} alt="Usuário" style={{ width: "160px" }} />
        </Box>
        <Paragrafo margin="0">
          Crie uma conta para ter acesso a ferramentas que irão{" "}
          <Span>
            transformar <Br /> o seu negócio
          </Span>
        </Paragrafo>

        <Box>
          <Form onSubmit={handleSubmit}>
            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Nome"
                type="text"
                cor="#4b4b4b"
                corplaceholdereholder="#4b4b4b"
                {...nome}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                id="telefone"
                placeholder="Telefone"
                type="text"
                cor="#4b4b4b"
                corplaceholdereholder="#4b4b4b"
                {...telefone}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Email"
                type="email"
                cor="#4b4b4b"
                corplaceholdereholder="#4b4b4b"
                {...email}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="CPF"
                type="text"
                cor="#4b4b4b"
                corplaceholdereholder="#4b4b4b"
                {...cpf}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Senha"
                type="password"
                cor="#4b4b4b"
                corplaceholdereholder="#4b4b4b"
                {...senha}
              />
            </InputGroup>

            {loading ? (
              <Button
                texto="Cadastrar..."
                fontWeight="550"
                type="first"
                color="#fff"
                className="carregando"
              />
            ) : (
              <Button
                texto="Cadastrar"
                fontWeight="550"
                type="first"
                color="#fff"
              />
            )}

            {erro && <P style={{ color: "#f00" }}>{erro}</P>}
          </Form>
        </Box>
      </CGrid>
    </Section>
  );
};

export default Cadastro;
