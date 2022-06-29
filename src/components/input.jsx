export function Busqueda({ busqueda, setBusqueda }) {
  return <input onChange={(e) => setBusqueda(e.target.value)} type="text" />;
}
