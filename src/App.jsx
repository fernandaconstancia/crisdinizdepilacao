import { GlobalStyle } from "./GlobalStyle";

import { MenuNav } from "./components/MenuNav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MenuNav />
      <Home />
      <About />
      <Product />
    </>
  );
};
