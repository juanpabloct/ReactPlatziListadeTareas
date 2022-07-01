import { useEffect, useState } from "react";

export function Reloj() {
  const [hora, setHora] = useState();
  const [showHora, setShowHora] = useState(false);
  useEffect(() => {
    const date = new Date();
    function hours() {
      const hours =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      setHora(hours);
    }
    if (showHora) {
      setTimeout(hours, 1000);
    } else {
      clearTimeout();
    }
    return () => {
      clearTimeout();
    };
  });
  return (
    <div>
      {showHora && <time>{hora}</time>}
      <button
        onClick={() => {
          setShowHora((currem) => !currem);
        }}
      >
        {showHora ? "Detener reloj" : "Activar hora"}
      </button>
    </div>
  );
}
