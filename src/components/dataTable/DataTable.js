import React from "react";
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

const DataTable = () => {
  const [rowss, setRowss] = React.useState(null);

  const handleChange = (event) => {
    event.preventDefault();

    change()

    console.log('clicou')
  }

  const change = (teste) => {
    console.log(teste)
  }

  

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
            onRowSelectionModelChange={change}
          />
        ) : (
          "Carregando..."
        )}
      </ContainerTable>

      <button onClick={handleChange}>Enivar</button>
    </>
  );
};

export default DataTable;
