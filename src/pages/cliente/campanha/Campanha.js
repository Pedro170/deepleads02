import React from "react";
import { Button, CGrid, Div, Form, P, Section } from "../../../styles/tags";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { BASE_DISPARAR_CAMPANHA, BASE_LEADS } from "../../../utils/Api";
import {
  ContainerTable,
  DispararCampanha,
  HeaderTable,
  Modal,
} from "./CampanhaStyled";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import LeadsPdf from "../../../components/leads/LeadsPdf";
import { InputGroup } from "../../../components/form/inputLogado/InputLogadoStyled";
import InputLogado from "../../../components/form/inputLogado/InputLogado";
import ButtonLogado from "../../../components/form/buttonLogado/ButtonLogado";
import Textarea from "../../../components/form/textarea/Textarea";

const Campanha = () => {
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [rows, setRows] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [campanha, setCampanha] = React.useState("");
  const [pdf, setPdf] = React.useState([]);
  const [base64, setBase64] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [telefone, setTelefone] = React.useState("");

  const usuario = JSON.parse(window.localStorage.getItem("usuario"));

  React.useEffect(() => {
    const getLead = async () => {
      try {
        setErro(null);
        setLoading(true);
        const response = await fetch(`${BASE_LEADS}${usuario.id}`);
        const json = await response.json();
        setRows(json);
      } catch (error) {
        setErro("Algo deu errado. Tente novamente mais tarde!");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getLead();
  }, [usuario.id]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 230 },
    { field: "phone", headerName: "Telefone", width: 130 },
    { field: "category", headerName: "Categoria", type: "email", width: 130 },
    { field: "plusCode", headerName: "PlusCode", type: "email", width: 130 },
    { field: "place", headerName: "Endereco", type: "email", width: 230 },
    { field: "stars", headerName: "Avaliações", type: "email", width: 130 },
  ];

  const onRowSelectionChange = (ids) => {
    const selectedIDs = new Set(ids);
    const linha = rows.filter((row) => selectedIDs.has(row.id));
    const obj = linha.map(({ name, phone, email, state, category }) => {
      phone = "55" + phone;
      return { name, phone, state, category };
    });
    setData(obj);
    setPdf(linha);
  };

  const handleSubmitDispararoCampanha = async (event) => {
    event.preventDefault();
    document.getElementById(
      "conteudo"
    ).innerHTML += `<p class="paragrafo-campanha">${campanha}</p>`;

    try {
      setErro(null);
      setLoading(true);

      const response = await fetch(`${BASE_DISPARAR_CAMPANHA}`,
        {
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
        }
      );

      if (response.ok) {
        console.log("sucesso");

      } else {
        console.log("falhou");
      }
    } catch (err) {
      setErro("Aconteceu um erro!");
      setLoading(false);
    } finally {
      setLoading(false);
    }

    setCampanha("");
  };

  const leadsPdf = (event) => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    if(event) {
      event.target.innerText = "Gerando PDF..."

      setTimeout(() => {
        event.target.innerText = "Gerar PDF"
      }, 1500)
    }

    const leadsTitulo = [
      {
        text: "Deepleads",
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45],
      },
    ];

    let dados = [];
    if (pdf != null) {
      dados = pdf.map((lead) => {
        return [
          { text: lead.name, fontSize: 9, margin: [0, 2, 0, 2] },
          { text: lead.phone, fontSize: 9, margin: [0, 2, 0, 2] },
          { text: lead.category, fontSize: 9, margin: [0, 2, 0, 2] },
          { text: lead.plusCode, fontSize: 9, margin: [0, 2, 0, 2] },
          { text: lead.place, fontSize: 9, margin: [0, 2, 0, 2] },
          { text: lead.stars, fontSize: 9, margin: [0, 2, 0, 2] },
        ];
      });
    }

    const leadsDetalhes = [
      {
        table: {
          headerRows: 1,
          widths: ["*", "*", "*", "*", "*", "*"],
          body: [
            [
              { text: "Nome", style: "tableHeader", fontSize: 10 },
              { text: "Telefone", style: "tableHeader", fontSize: 10 },
              { text: "Categoria", style: "tableHeader", fontSize: 10 },
              { text: "PlusCode", style: "tableHeader", fontSize: 10 },
              { text: "Endereco", style: "tableHeader", fontSize: 10 },
              { text: "Avaliações", style: "tableHeader", fontSize: 10 },
            ],
            ...dados,
          ],
        },
      },
    ];

    const leadsRodape = (currentPage, pageCount) => {
      return [
        {
          text: currentPage + ` / ` + pageCount,
          alignment: "right",
          fontSize: 9,
          bold: true,
          margin: [0, 10, 20, 0],
        },
      ];
    };

    const docDefinicoes = {
      pageSize: "A4",
      pageMargins: [15, 50, 15, 40],

      header: [leadsTitulo],
      content: [leadsDetalhes],
      footer: leadsRodape,
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinicoes);
    pdfDocGenerator.getBase64((data) => {
      setBase64(data);
    });
  };

  const mandarMensagem = async (event) => {
    event.preventDefault();

    try {
      setErro(null);
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/api/whatsapp/send/document`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dataInicio: "2023-09-17T08:00:00Z",
            dataFim: "2023-09-18T08:00:00Z",
            phoneInitial: "5511957818539",
            leads: [{ phone: 55 + telefone }],
            sourceBase64: base64,
          }),
        }
      );
      console.log(response)
      
      setTelefone("");
      setModal(false);
    } catch (err) {
      setErro(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    leadsPdf();
  }, []);

  return (
    <Section>
      <CGrid grid="1fr" padding="1rem 0">
        {/* <Div
          style={{ width: "100%", maxWidth: "1000px", marginBottom: "1rem" }}
        >
          <Form
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <InputLogado
                placeholder="Data Início"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>

            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <InputLogado
                placeholder="Data Término"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>

            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <InputLogado
                placeholder="Horário"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>

            <InputGroup background="#fff" border="solid 1px #4B4B4B">
              <InputLogado
                placeholder="Nº da Campanha"
                cor="#2171AC"
                corplaceholder="#2171AC"
              />
            </InputGroup>
          </Form>
        </Div> */}

        <HeaderTable style={{ marginBottom: "1rem" }}>
          <Div>
            <Button disabled={pdf.length > 0 ? false : true} onClick={leadsPdf}>
              Gerar PDF
              <i className="fas fa-file-pdf"></i>
            </Button>
            <Button
              disabled={pdf.length > 0 ? false : true}
              onClick={() => LeadsPdf(pdf)}
            >
              Baixa PDF
              <i className="fas fa-download"></i>
            </Button>
          </Div>

          <Button
            disabled={pdf.length > 0 ? false : true}
            onClick={() => setModal(true)}
          >
            Enviar PDF
            <i className="fas fa-share-alt"></i>
          </Button>
        </HeaderTable>

        <Section
          style={{
            width: "100%",
            marginBottom: "60px",
          }}
        >
          <ContainerTable>
            {rows ? (
              <DataGrid
                className="table"
                rows={rows}
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

        <DispararCampanha>
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
                <Textarea
                  placeholder="Digite a mensagem a ser disparada..."
                  cor="#2171AC"
                  value={campanha}
                  onChange={({ target }) => setCampanha(target.value)}
                />
              </InputGroup>

              {loading ? (
                <ButtonLogado
                  fontSize={1.25}
                  type="first"
                  color="#fff"
                  texto="Disparando campanha..."
                  style={{
                    height: "40px",
                    padding: ".5rem 1.2rem",
                  }}
                  className="carregando"
                  onClick={handleSubmitDispararoCampanha}
                />
              ) : (
                <ButtonLogado
                  fontSize={1.25}
                  type="first"
                  color="#fff"
                  texto="Disparar campanha"
                  style={{
                    height: "40px",
                    padding: ".5rem 1.2rem",
                  }}
                  onClick={handleSubmitDispararoCampanha}
                />
              )}

              {erro && <P>{erro}</P>}
            </Form>
          </Div>
        </DispararCampanha>
      </CGrid>

      {modal ? (
        <Modal>
          <Div className="modal">
            <Form>
              <InputGroup background="#fff" border="solid 1px #2171AC">
                <InputLogado
                  id="telefone"
                  label="Digite o número que deseja enviar a campanha"
                  cor="#2171AC"
                  value={telefone}
                  onChange={({ target }) => setTelefone(target.value)}
                />
              </InputGroup>

              <ButtonLogado
                w="max-content"
                fontSize={1.25}
                type="first"
                color="#fff"
                onClick={mandarMensagem}
                className="btn-enviar-numero"
                disabled={pdf.length > 0 ? false : true}
              />

              <Button className="fechar" onClick={() => setModal(false)}>
                &times;
              </Button>
            </Form>
          </Div>
        </Modal>
      ) : (
        ""
      )}
    </Section>
  );
};

export default Campanha;
