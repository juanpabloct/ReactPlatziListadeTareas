import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { changeStateTool, deleteTool } from "./store/toolSlider/toolSlice";
import { memo, useEffect, useState } from "react";
import { Busqueda } from "./components/input";

function App() {
  const { tools } = useSelector((state) => state);
  const [busqueda, setBusqueda] = useState("");
  const dispatch = useDispatch();

  const similitudes = tools.filter((tool, index) => {
    const toolLowerCase = tool.tool.toLowerCase();
    const searchLowerCase = busqueda.toLowerCase();
    const result = toolLowerCase.includes(searchLowerCase);
    return result;
  });

  return (
    <div className="App">
      <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      <ul
        style={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {busqueda.length === 0
          ? tools.map((tool, index) => {
              const styleSubrayed = tool.finish ? "line-through" : "none";
              return (
                <div
                  key={index}
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    textDecorationLine: styleSubrayed,
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const { finish } = tools[index];
                      dispatch(changeStateTool({ index, finish: !finish }));
                    }}
                  >
                    &#10003;{" "}
                  </span>
                  <li
                    style={{
                      listStyle: "none",
                      display: "inline-block",
                    }}
                  >
                    {tool.tool}
                  </li>
                  <span
                    onClick={() => {
                      dispatch(deleteTool({ index }));
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })
          : similitudes.map((tool, index) => {
              const styleSubrayed = tool.finish ? "line-through" : "none";
              return (
                <div
                  key={index}
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    textDecorationLine: styleSubrayed,
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const { finish } = tools[index];
                      dispatch(changeStateTool({ index, finish: !finish }));
                    }}
                  >
                    &#10003;{" "}
                  </span>
                  <li
                    style={{
                      listStyle: "none",
                      display: "inline-block",
                    }}
                  >
                    {tool.tool}
                  </li>
                  <span
                    onClick={() => {
                      dispatch(deleteTool({ index }));
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })}
      </ul>
    </div>
  );
}

export default memo(App);
