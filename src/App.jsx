import { GlobalStyle } from "./GlobalStyle";

import { NavBar } from "./components/Nav/NavBar.jsx";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Home />
      <About />
      <Product />
      <Contact />
    </>
  );
};
