import React from "react";
import { BoxLogin, Br, CGrid, Form, H1, P, Section } from "../styles/tags";
import Button from "../components/form/button/Button";
import Input from "../components/form/input/Input";
import { UserContext } from "../UserContext";
import useForm from "../hooks/useForm";
import { Link } from 'react-router-dom';
import { InputGroup } from "../components/form/input/InputStyled";
import Cadastro from "./cadastro/Cadastro";

const Login = () => {
  const { userLogin, error, loading } = React.useContext(UserContext)
  const login = useForm()
  const senha = useForm()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(login.validacao() && senha.validacao()) {
      userLogin(login.value, senha.value)
    }
  }
  
  return (
    <Section>
      <CGrid grid="repeat(2, 1fr)" alignitems="center" padding="0">
        <BoxLogin type="first">
          <H1 type="branco" margin="0 auto" fontSize="2.875" textalign="center">
            Olá, <Br />
            Seja bem-vindo
          </H1>

          <P type="branco" fontSize="1.25" textalign="center" mt="2" mb="2">
            Entre em sua conta para ter <Br /> acesso a todo o potencial
            deepleads
          </P>

          <Form onSubmit={ handleSubmit } className="formulario-login">
            <InputGroup background="#fff">
              <Input
                placeholder="Email"
                type="email"
                cor="#4b4b4b"
                corplaceholdereholder="#4b4b4b"
                {...login}
              />
            </InputGroup>

            <InputGroup background="#fff">
              <Input
                placeholder="Senha"
                type="password"
                cor="#4b4b4b"
                corplaceholdereholder="#4b4b4b"
                {...senha}
              />
            </InputGroup>

            {
              loading 
              ? <Button texto="Logando..." fontWeight="550" type="second" color="#fff" className="carregando" style={{marginBottom: '50px'}}/>
              : <Button texto="Login" fontWeight="550" type="second" color="#fff" style={{marginBottom: '50px'}}/>
            }
            

            {error && <P style={{ position: 'relative', top: '-40px', color: '#fff' }}>{error}</P>}
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
