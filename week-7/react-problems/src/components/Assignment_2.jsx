import { useState } from "react";

const Assignment_2 = () => {
  const buttons = [
    "red",
    "yellow",
    "black",
    "purple",
    "green",
    "blue",
    "orange",
  ];
  const [bgColor, setBgColor] = useState("");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50px",
          border: "1px solid gray",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        {buttons.map((button, index) => (
          <button
            key={button}
            style={{
              backgroundColor: button,
              color: button === "black" ? "white" : "black",
              border: "none",
              borderRadius: "10px",
              width: "12%",
            }}
            onClick={() => changeColor(button)}
          >
            {button.charAt(0).toUpperCase() + button.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Assignment_2;
