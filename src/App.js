import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { changeStateTool, deleteTool } from "./store/toolSlider/toolSlice";
import { memo, useEffect, useState } from "react";
import { Busqueda } from "./components/input";
import { Start } from "./components/Home/start";
import { ButtonRestoreData } from "./components/restoreData/ButtonRestoreData";

function App() {
  const { tools } = useSelector((state) => state);
  const [busqueda, setBusqueda] = useState("");
  const data=tools.habitos
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      <Start busqueda={busqueda} tools={data}/>
      <ButtonRestoreData/>
    </div>)
  
}

export default memo(App);
