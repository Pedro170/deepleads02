import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const LeadsPdf = (leads) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  let dados = [];
  if (leads != null) {
    dados = leads.map((lead) => {
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
      image:
        "data:image/png;base64,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",
      width: 160,
      margin: [0, -15, 0, 15],
    },

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

    content: [leadsDetalhes],
    footer: leadsRodape,
  };

  pdfMake.createPdf(docDefinicoes).download();
};

export default LeadsPdf;
