import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export const base64 =  (string) => {
	let stringbase = string
	return stringbase
}

const LeadsPdf = (leads) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const leadsTitulo = [
    {
      text: "Deepleads",
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

	let dados = [];
	if(leads != null) {
		dados = leads.map((lead) => {
			return [
				{text: lead.name, fontSize: 9, margin: [0, 2, 0, 2]},
				{text: lead.phone, fontSize: 9, margin: [0, 2, 0, 2]},
				{text: lead.category, fontSize: 9, margin: [0, 2, 0, 2]},
				{text: lead.plusCode, fontSize: 9, margin: [0, 2, 0, 2]},
				{text: lead.place, fontSize: 9, margin: [0, 2, 0, 2]},
				{text: lead.stars, fontSize: 9, margin: [0, 2, 0, 2]},
			]
		})
	}


  const leadsDetalhes = [
		{
			table: {
				headerRows: 1,
				widths: ['*', '*', '*', '*', '*', '*'],
				body: [
					[
						{text: 'Nome', style: 'tableHeader', fontSize: 10},
						{text: 'Telefone', style: 'tableHeader', fontSize: 10},
						{text: 'Categoria', style: 'tableHeader', fontSize: 10},
						{text: 'PlusCode', style: 'tableHeader', fontSize: 10},
						{text: 'Endereco', style: 'tableHeader', fontSize: 10},
						{text: 'Avaliações', style: 'tableHeader', fontSize: 10},
					],
					...dados
				]
			}
		}
	];

  const leadsRodape = (currentPage, pageCount) => {
		return [
			{
				text: currentPage + ` / ` + pageCount,
				alignment: 'right',
				fontSize: 9,
				bold: true,
				margin: [0, 10, 20, 0],
			},
		];
	}

  const docDefinicoes = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [leadsTitulo],
    content: [leadsDetalhes],
    footer: leadsRodape
  };

  pdfMake.createPdf(docDefinicoes).download()
};

export default LeadsPdf;
