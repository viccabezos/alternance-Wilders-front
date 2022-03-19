import { useEffect, useState } from "react";

const Moncomposant = () => {
  const [state, setState] = useState({
    name: "toto",
    note: 4,
  });

  useEffect(() => {
    setState({ ...state, name: "tata" });
  }, []);

  return <div>{state.name}</div>;
};

export default Moncomposant;
