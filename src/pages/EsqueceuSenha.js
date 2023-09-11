import React from "react";
import { BoxLogin, Br, CGrid, Form, H1, Img, P, Section } from "../styles/tags";
import cadeado from "../image/lock.png";
import Input, { InputGroup } from "../components/form/input/Input";
import Button from "../components/form/button/Button";
import styled from "styled-components";

export const  BoxImg = styled.div `
  @media(max-width: 600px) {
    img {
      width: 120px;
    }
  }
`

const EsqueceuSenha = () => {
  return (
    <Section>
      <CGrid>
        <BoxLogin type="first" style={{ padding: '80px 0 20px 0'}}>
          <H1
            textAlign='center'
            type="branco"
            fontSize="2.5"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Esqueceu a sua Senha?
          </H1>
  
          <BoxImg>
            <Img src={cadeado} alt="cadeado" />
          </BoxImg>
  
          <P
            type="branco"
            fontSize="1.25"
            textAlign="center"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Siga os passos abaixo para <Br /> realizar as alterações
          </P>
  
          <Form>
            <InputGroup background="#fff">
              <Input
                placeholder="Email"
                type="email"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
              />
            </InputGroup>
  
            <InputGroup background="#fff">
              <Input
                placeholder="Nova Senha"
                type="password"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
              />
            </InputGroup>
  
            <InputGroup background="#fff">
              <Input
                placeholder="Confirmar Senha"
                type="password"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
              />
            </InputGroup>
  
            <Button
              texto="Alterar"
              fontWeight="550"
              type="second"
              color="#fff"
              style={{ marginBottom: "50px" }}
            />
          </Form>
        </BoxLogin>
      </CGrid>
    </Section>
  );
};

export default EsqueceuSenha;
