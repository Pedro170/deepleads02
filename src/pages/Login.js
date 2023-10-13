import React from "react";
import { BoxLogin, Br, CGrid, Form, P, Section } from "../styles/tags";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import useForm from "../hooks/useForm";
import { useNavigate } from 'react-router-dom';

import Logo from "../image/logo.svg";
import SVGTopLeft from "../image/SVGTopLeft.svg";
import SVGBottomRight from "../image/SVGBottomRight.svg";

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

  const customTextColor = "#2171AC";

  return (
    <Section style={{ position: "relative" }}>
      <img src={SVGTopLeft} alt="Top Left SVG" style={{ position: "absolute", top: 0, left: 0, width: '350px', height: '350px' }} />
      <CGrid grid="repeat(2, 1fr)" alignItems="center" padding="0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BoxLogin type="first" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: "#fff" }}>
          <img src={Logo} alt="Logo" />
          <P type="branco" fontSize="1.25" textAlign="center" mt="2" mb="2" style={{ color: "#4D4D4D" }}>
            Entre em sua conta para ter <Br /> acesso a todo o potencial deepleads
          </P>

          <Form onSubmit={handleSubmit}>
            <InputGroup background="#D9D9D9">
              <Input
                placeholder="Email"
                type="email"
                cor={customTextColor}
                corplaceholdereholder={customTextColor}
                {...login}
              />
            </InputGroup>

            <InputGroup background="#D9D9D9">
              <Input
                placeholder="Senha"
                type="password"
                cor={customTextColor}
                corplaceholdereholder={customTextColor}
                {...senha}
              />
            </InputGroup>

            <Button
              texto="Entrar"
              fontWeight="550"
              type="second"
              color="#fff"
              style={{ marginBottom: '50px' }}
            />
          </Form>

          <Link
            to="/cadastro"
            style={{
              color: '#2171AC',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >Não tem uma conta? Cadastre-se clicando aqui.</Link>
        </BoxLogin>
      </CGrid>
      <img src={SVGBottomRight} alt="Bottom Right SVG" style={{ position: "absolute", bottom: 0, right: 0, width: '350px', height: '350px' }} />
    </Section>
  );
};

export default Login;
