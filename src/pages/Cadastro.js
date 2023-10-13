import React from "react";
import logo from "../image/logo 5.png";
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
import useForm from '../hooks/useForm';
import { USER_POST } from "../utils/Api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const email1 = useForm('email');
  const email2 = useForm('email');
  const email3 = useForm('email');
  const email4 = useForm('email');
  const senha = useForm();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = USER_POST({
      email1: email1.value,
      email2: email2.value,
      email3: email3.value,
      email4: email4.value,
      senha: senha.value,
      endereco: []
    });

    const response = await fetch(url, options);

    if (response.ok) {
      navigate('/login'); // Redirecionar para a página de login após o cadastro bem-sucedido
    } else {
      console.error('Erro ao cadastrar o usuário');
    }
  }

  return (
    <Section>
      <CGrid grid="1fr">
        <Box>
          <Img src={logo} alt="Logo" style={{ width: "160px", marginTop: "100px" }} />
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
                placeholder="Email 1"
                type="email"
                cor="#4b4b4b"
                corplaceholdereholder="#2171AC"
                {...email1}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Email 2"
                type="email"
                cor="#4b4b4b"
                corplaceholdereholder="#2171AC"
                {...email2}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Email 3"
                type="email"
                cor="#4b4b4b"
                corplaceholdereholder="#2171AC"
                {...email3}
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Email 4"
                type="email"
                cor="#4b4b4b"
                corplaceholdereholder="#2171AC"
                {...email4}
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
