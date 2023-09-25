import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { Segment, Button } from 'semantic-ui-react';
import { ThemeProvider } from 'styled-components';
import { Div, Img } from '../../styles/tags';
import message from '../../image/message.svg'

const theme = {
    background: '#fff',
    fontFamily: 'coolvetica',
    headerBgColor: '#2171AC',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#2171AC',
    botFontColor: '#fff',
    userBubbleColor: '#4b4b4b',
    userFontColor: 'white',
  };
  
  const steps = [
    {
      id: '1',
      message: 'Olá, como posso te ajudar?',
      trigger: '2'
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Como funciona os serviços dos produtos?', trigger: 'servico' },
        { value: 2, label: 'Planos', trigger: 'plano' },
        { value: 3, label: 'Qual o canal de contato?', trigger: 'contato' },
        { value: 4, label: 'Outros..', trigger: 'outros' },
      ],
    },
    {
      id: 'servico',
      message: 'Você poderá encontrar informações sobre nossos serviços na aba sobre e na tela home.',
      trigger: 'ultima'
    },
    {
      id: 'plano',
      message: 'Temos 3 opções de planos com preços acessíveis! Prata, Ouro e Diamante (Você poderá encontrar mais informações na aba de planos).',
      trigger: 'ultima'
    },
    {
      id: 'contato',
      message: 'Você conseguirá entrar em contato conosco preenchendo nosso formulário na página de contato.',
      trigger: 'ultima'
    },
    {
      id: 'outros',
      options: [
        { value: 1, label: 'Como faço para utilizar?', trigger: 'utilizar' },
        { value: 2, label: 'Quais tecnologias vocês utilizam?', trigger: 'tecnologia' },
        { value: 3, label: 'Qualquer outra pergunta...', trigger: 'outraPergunta' },
      ],
    },
    {
      id: 'utilizar',
      message: 'Crie uma conta e faça login para desfrutar do seu potencial deepleads.',
      trigger: 'ultima'
    },
    {
      id: 'tecnologia',
      message: 'Utilizamos diversas tecnologias como: inteligencia artificial, mineração de dados e disparo de mensagens via whatsapp.',
      trigger: 'ultima'
    },
    {
      id: 'outraPergunta',
      message: 'Para mais informações, entre em contato através de dos nossos canais de atendimento, por favor.',
      trigger: 'ultima'
    },
    {
      id: 'ultima',
      message: 'Tem mais alguma outra dúvida?',
      trigger: 'opcoes'
    },
    {
      id: 'opcoes',
      options: [
        { value: 1, label: 'Sim', trigger: 'sim' },
        { value: 2, label: 'Não', trigger: 'nao' },
      ],
    },
    {
      id: 'nao',
      message: 'Ótimo! Fico feliz em sanar suas dúvidas. Até mais, Obrigado!',
      end: true
    },
    {
      id: 'sim',
      message: 'Abaixo irei disponibilizar novamente as opções:',
      trigger: '2'
    },
  ]

const ChatDeepleads = () => {
    const [chatbotOpen, setChatbotOpen] = React.useState(false);

    const toggleChatbot = () => {
      setChatbotOpen(!chatbotOpen);
    };
  
    return (
      <Div className="Chat">
        {chatbotOpen && (
          <Segment floated='left'>
            <ThemeProvider theme={theme}>
              <ChatBot steps={steps} />
            </ThemeProvider>
          </Segment>
        )}

        <Button
          className='btn-chat'
          floated='left'
          onClick={toggleChatbot}
          color={chatbotOpen ? 'red' : 'green'}
        >
          <Img src={message} />
        </Button>
      </Div>
    );
}

export default ChatDeepleads
