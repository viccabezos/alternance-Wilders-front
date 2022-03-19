import { createContext } from "react";

const MonContext = createContext({
  basket: [],
  addToBasket: () => {},
  clearBasket: () => {},
});

export default MonContext;
