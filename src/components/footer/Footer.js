import React from "react";
import { P } from "../../styles/tags";
import styled from "styled-components";

export const CFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
`;

const Footer = () => {
  return (
    <CFooter>
      <P negrito="bold" textalign="center" type="cor-02">
        &copy; Copyright 2023 - Todos os direitos reservados deepleads
      </P>
    </CFooter>
  );
};

export default Footer;
