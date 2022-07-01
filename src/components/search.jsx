export function Busqueda({ busqueda, setBusqueda }) {
  return (
    <input
      style={{ margin: "auto", width: "50%", marginTop: "100px" }}
      onChange={(e) => setBusqueda(e.target.value)}
      type="text"
    />
  );
}
