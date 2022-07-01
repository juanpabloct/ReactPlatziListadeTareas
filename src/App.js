import logo from "./logo.svg";
import "./App.css";
import { memo, useState } from "react";
import Busqueda from "./components/input";
import { Main } from "./components/main";
import { Reloj } from "./components/Reloj";

function App() {
  const initialState = [
    { tool: "Salir a Correr", finish: false },
    { tool: "desayunar", finish: true },
    { tool: "Sacar el perro", finish: true },
  ];
  const [tools, setTools] = useState(initialState);
  const [busqueda, setBusqueda] = useState("");

  const similitudes = tools.filter((tool, index) => {
    const toolLowerCase = tool.tool.toLowerCase();
    const searchLowerCase = busqueda.toLowerCase();
    const results = toolLowerCase.includes(searchLowerCase);
    return results;
  });

  return (
    <div className="App">
      <Reloj />
      <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      <Main
        busqueda={busqueda}
        similitudes={similitudes}
        setTools={setTools}
        tools={tools}
      />
    </div>
  );
}

export default memo(App);
