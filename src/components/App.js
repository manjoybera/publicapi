import React from "react";
import { GlobalStylesConst } from "../styles/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./Header";
import { PageContainer } from "./PageContainer";
import { Footer } from "./Footer";



import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

export const App = () => {
  return (
    <>
      {GlobalStylesConst}
      <CssBaseline />
      <Header />
      <PageContainer />
      <Footer />
    </>
  );
};
