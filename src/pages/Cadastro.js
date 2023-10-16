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
      navigate('/login'); // Redirect to the login page after successful registration
    } else {
      console.error('Error registering the user');
    }
  }

  return (
    <Section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CGrid grid="1fr 1fr">
        <Box>
        <div className="left-side" style={{ marginTop: "-62px", marginLeft: "52px" }}>
            <div className="image-container" style={{ marginLeft: '272px' }}>
              <Img src={logo} alt="Logo" style={{ width: "160px", marginTop: "100px" }} />
            </div>
            <div className="text-container" style={{ marginLeft: '161px' }}>
              <Paragrafo margin="0" style={{ textAlign: 'center' }}>
                Crie uma conta para ter acesso<Br /> a ferramentas que irão{" "}
                <Span>
                  transformar <Br /> o seu negócio
                </Span>
              </Paragrafo>
            </div>
            <div className="form" style={{ marginLeft: '200px', marginTop: '-12px' }}>
              <Form onSubmit={handleSubmit}>
                <InputGroup background="#CDCDCD">
                  <Input
                    placeholder="Email 1"
                    type="email"
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                    style={{ width: "294px" }}
                    {...email1}
                  />
                </InputGroup>
                <InputGroup background="#CDCDCD">
                  <Input
                    placeholder="Email 2"
                    type="email"
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                    style={{ width: "294px" }}
                    {...email2}
                  />
                </InputGroup>
                <InputGroup background="#CDCDCD">
                  <Input
                    placeholder="Email 3"
                    type="email"
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                    style={{ width: "294px" }}
                    {...email3}
                  />
                </InputGroup>
                <InputGroup background="#CDCDCD">
                  <Input
                    placeholder="Email 4"
                    type="email"
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                    style={{ width: "294px" }}
                    {...email4}
                  />
                </InputGroup>
                <Button
                  texto="Cadastrar"
                  fontWeight="550"
                  type="first"
                  color="#fff"
                  style={{ width: "173px", marginLeft: '50px' }}
                />
              </Form>
            </div>
          </div>
        </Box>
        <div className="right-side" style={{ marginLeft: '200px', marginTop: '-12px' }}>
          <svg width="650" height="650" viewBox="0 0 1040 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1080V926H62V771H87V617H309V463H257V309H112V154H72V0H1040V1080H0Z" fill="#2171AC" />
            <path d="M428 1080H575V926H385V771H318V617H244V463H557V309H416V154H605V0H1040V1080H428Z" fill="#134F7B" />
            <path d="M559 1080H858V926H714V771H546V617H713V463H672V309H707V154H828V0H1040V1080H559Z" fill="#07304D" />
          </svg>
        </div>
      </CGrid>
    </Section>
  );
};

export default Cadastro;
