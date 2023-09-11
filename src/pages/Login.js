import React from "react";
import { BoxLogin, Br, CGrid, Form, H1, P, Section } from "../styles/tags";
import Cadastro from "./Cadastro";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import useForm from "../hooks/useForm";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { userLogin } = React.useContext(UserContext)
  const login = useForm()
  const senha = useForm()
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if(login.validacao && senha.validacao) {
      userLogin(login.value, senha.value)
      navigate('/cliente/inicio');
    }
  }

  return (
    <Section>
      <CGrid grid="repeat(2, 1fr)" alignItems="center" padding="0">
        <BoxLogin type="first">
          <H1 type="branco" margin="0 auto" fontSize="2.875" textAlign="center">
            Olá, <Br />
            Seja bem-vindo
          </H1>

          <P type="branco" fontSize="1.25" textAlign="center" mt="2" mb="2">
            Entre em sua conta para ter <Br /> acesso a todo o potencial
            deepleads
          </P>

          <Form onSubmit={ handleSubmit }>
            <InputGroup background="#fff">
              <Input
                placeholder="Email"
                type="email"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
                {...login}
              />
            </InputGroup>

            <InputGroup background="#fff">
              <Input
                placeholder="Senha"
                type="password"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
                {...senha}
              />
            </InputGroup>

            <Button 
              texto="Login"
              fontWeight="550"
              type="second"
              color="#fff"
              style={{marginBottom: '50px'}}
            />
          </Form>

          <Link 
            to="/esqueceu-senha"
            style={{
              color: '#fff',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >Esqueceu sua senha?</Link>
        </BoxLogin>
        <Cadastro />

      </CGrid>
    </Section>
  );
};

export default Login;
