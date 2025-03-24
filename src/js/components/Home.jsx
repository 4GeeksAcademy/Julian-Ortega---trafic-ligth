import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const cycleColors = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="bg-dark p-3 rounded d-flex flex-column align-items-center">
        {colors.map((light) => (
          <div
            key={light}
            className={`rounded-circle my-2 ${
              color === light ? "glow" : ""
            }`}
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: light,
              cursor: "pointer",
            }}
            onClick={() => setColor(light)}
          ></div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={cycleColors}>
        Cambiar Color
      </button>
      <button className="btn btn-secondary mt-2" onClick={addPurple}>
        Agregar Púrpura
      </button>
    </div>
  );
};

// Estilos para resaltar la luz seleccionada
const styles = document.createElement("style");
styles.innerHTML = `
  .glow {
    box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.8);
  }
`;
document.head.appendChild(styles);

export default TrafficLight;
