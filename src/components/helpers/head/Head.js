import React from "react";

const Head = () => {
	const [head, setHead] = React.useState("");
  React.useEffect(() => {
    let url = window.location.pathname;
    let parts = url.split("/");
    let urlComponent = parts.pop() || parts.pop();
    let texto = "";

		setHead(urlComponent)
    if (urlComponent === "inicio") {
      texto = "Crie suas campanhas";
    } else if (urlComponent === "leads") {
      texto = "Minere leads para a sua campanha";
    } else if (urlComponent === "campanha") {
      texto = "Dispare suas campanhas para potenciais clientes";
    } else if (urlComponent === "conta") {
      texto = "Edite sua informações";
    }
  }, []);

  return <div>{head}</div>;
};

export default Head;
