import React from "react";
import {
  Box,
  CGrid,
  Container,
  Div,
  Form,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 100%;
  .table {
    width: calc(100% - 40px);
    margin: 0 auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const Campanha = () => {
  const [rowss, setRowss] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [campanha, setCampanha] = React.useState("");

  const usuario = JSON.parse(window.localStorage.getItem("usuario"))

  React.useEffect(() => {
    const getLead = async () => {
      const response = await fetch(
        `https://deepleads-api.azurewebsites.net/api/mineracao/get/leads/by-id?id=${usuario.id}`
      );
      const json = await response.json();
      setRowss(json);
    };
    getLead();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 230 },
    { field: "phone", headerName: "Telefone", width: 130 },
    { field: "category", headerName: "Categoria", type: "email", width: 130,},
    { field: "plusCode", headerName: "PlusCode", type: "email", width: 130,},
    { field: "place", headerName: "Endereco", type: "email", width: 230,},
    { field: "stars", headerName: "Avaliações", type: "email", width: 130,},
  ];

  const onRowSelectionChange = (ids) => {
    const selectedIDs = new Set(ids);
    const linha = rowss.filter((row) => selectedIDs.has(row.id));
    const obj = linha.map(({ name, phone, email, state, category }) => {
      phone = "55" + phone;
      return {name, phone, state, category}
    });
    setData(obj);
  };

  const handleSubmitDispararoCampanha = (event) => {
    event.preventDefault();
    document.getElementById(
      "conteudo"
    ).innerHTML += `<p class="paragrafo-campanha">${campanha}</p>`;

    fetch("https://deepleads-api.azurewebsites.net/api/whatsapp/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataInicio: "2023-09-17T08:00:00Z",
        dataFim: "2023-09-18T08:00:00Z",
        message: campanha,
        messageType: "text",
        phoneInitial: "5511957818539",
        leads: data,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setCampanha("");
  };

  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <TituloPrincipal>
            Configurando sua <Span>Campanha</Span>
          </TituloPrincipal>

          <Paragrafo>
            Nos próximos passos iremos programar e iniciar a sua{" "}
            <Span>Campanha</Span>
          </Paragrafo>

          <Div
            style={{ width: "100%", maxWidth: "1000px", marginBottom: "3rem" }}
          >
            <Form
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Data Início"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Data Término"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Horário"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Nº da Campanha"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>
            </Form>
          </Div>

          <Section
            style={{
              width: "100%",
              marginBottom: "60px",
            }}
          >
            <ContainerTable>
              {rowss ? (
                <DataGrid
                  className="table"
                  rows={rowss}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                      quickFilterProps: { debounceMs: 500 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  onRowSelectionModelChange={onRowSelectionChange}
                />
              ) : (
                "Carregando..."
              )}

            </ContainerTable>
          </Section>

          <Box
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "10px",
              background: "#CDCDCD",
              boxShadow:
                "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              padding: "1rem",
            }}
          >
            <Div id="conteudo"></Div>
            <Div style={{ width: "100%" }}>
              <Form
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "10px",
                  padding: "0",
                }}
              >
                <InputGroup background="#fff" border="solid 1px #4B4B4B">
                  <Input
                    placeholder="Digite a mensagem a ser disparada..."
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                    value={campanha}
                    onChange={({ target }) => setCampanha(target.value)}
                  />
                </InputGroup>

                <Button
                  fontSize={1.25}
                  type="first"
                  color="#fff"
                  style={{
                    height: "40px",
                    padding: ".5rem 1.2rem",
                  }}
                  onClick={handleSubmitDispararoCampanha}
                />
              </Form>
            </Div>
          </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Campanha;
