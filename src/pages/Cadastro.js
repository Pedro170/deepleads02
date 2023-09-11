import React from "react";
import usuario from "../image/Usuario.png";
import {
  Box,
  Br,
  CGrid,
  Form,
  Img,
  Paragrafo,
  Section,
  Span,
} from "../styles/tags";
import Input, { InputGroup } from "../components/form/input/Input";
import Button from "../components/form/button/Button";
import { UserContext } from '../UserContext';
import useForm from '../hooks/useForm'
import { USER_POST } from "../utils/Api";

const Cadastro = () => {
  const nome = useForm();
  const telefone = useForm();
  const email = useForm('email');
  const cpf = useForm();
  const senha = useForm();

  const { userLogin } = React.useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {url, options} = USER_POST({
      nome: nome.value,
      telefone: telefone.value,
      email: email.value,
      cpf: cpf.value,
      senha: senha.value
    })
    const response = await fetch(url, options)
    if(response.ok) {
      let login = email.value
      userLogin(login, senha.value)
      window.location.reload()
    }
  }


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
                corPlac="#4b4b4b"
                {...nome}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                id="telefone"
                placeholder="telefone"
                type="text"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
                {...telefone}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Email"
                type="email"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
                {...email}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="CPF"
                type="text"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
                {...cpf}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Senha"
                type="password"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
                {...senha}
              />
            </InputGroup>

            <Button
              texto="Cadastrar"
              fontWeight="550"
              type="first"
              color="#fff"
            />
          </Form>
        </Box>
      </CGrid>
    </Section>
  );
};

export default Cadastro;
