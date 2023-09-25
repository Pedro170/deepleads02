import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styled from "styled-components";
import Modal from "../helpers/modal/Modal";

export const ContainerTable = styled.div`
  width: 100%;
  .table {
    width: calc(100% - 40px);
    margin: 0 auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const DataTable = () => {
  const [rowss, setRowss] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getLead = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const json = await response.json();
      setRowss(json);
    };
    getLead();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 130 },
    { field: "username", headerName: "Usuário", width: 130 },
    {
      field: "email",
      headerName: "E-mail",
      type: "email",
      width: 90,
    },

    {
      field: "address",
      headerName: "Endereço",
      width: 90,
    },
  ];

  const onRowSelectionChange = (ids) => {
    const selectedIDs = new Set(ids);
    const linha = rowss.filter((row) => selectedIDs.has(row.id));
    const obj = linha.map(({ name, phone, email, state, category }) => {
      phone = "55" + phone;
      return { name, email, phone };
    });
    setData(obj);
  };

  const handleSubmitUsuarios = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:8080/api/whatsapp/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataInicio: "2023-09-17T08:00:00Z",
        dataFim: "2023-09-18T08:00:00Z",
        message:
          "Teste mensagem API DeepLeads pelo React se voce recebeu esta mensagem, desconsidere!",
        messageType: "text",
        phoneInitial: "5511957818539",
        leads: data,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
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

        {data && (
          <Modal texto="Disparo de campanha feita com sucesso!!!" />
        )}
      </ContainerTable>

      <button onClick={handleSubmitUsuarios}>Enivar</button>
    </>
  );
};

export default DataTable;
