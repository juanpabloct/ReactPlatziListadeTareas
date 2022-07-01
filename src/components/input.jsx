import { memo } from "react";

function Busqueda({ busqueda, setBusqueda }) {
  return <input onChange={(e) => setBusqueda(e.target.value)} type="text" />;
}
export default memo(Busqueda);
