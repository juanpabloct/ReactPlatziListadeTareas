export function Busqueda({ busqueda, setBusqueda }) {
  return <input style={{width:"50%", height:"2rem", marginTop:"10rem", fontSize:"1rem", borderRadius:"10px"}} onChange={(e) => setBusqueda(e.target.value)} type="text" />;
}
