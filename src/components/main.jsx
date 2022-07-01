export function Main({ busqueda, tools, setTools, similitudes }) {
  return (
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
                    const { finish } = tool;
                    setTools((currem) => {
                      const datos = [...currem];
                      datos[index].finish = !finish;
                      return datos;
                    });
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
                    setTools((currem) => {
                      const copyData = [...currem];
                      copyData.splice(index, 1);
                      return copyData;
                    });
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
                    setTools((currem) => {
                      const copyData = [...currem];
                      copyData[index].finish = !finish;
                      console.log(copyData);
                      return copyData;
                    });
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
                <span onClick={() => {}}>X</span>
              </div>
            );
          })}
    </ul>
  );
}
