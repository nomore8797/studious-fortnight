import React, { useState } from "react";
import "./App.css";

function App() {
  // Состояние для отображения сообщения Демо
  const [demoMessage, setDemoMessage] = useState("");

  // Обработчик кнопки Демо
  const handleDemoClick = () => {
    setDemoMessage("Демо активировано! 🎉");
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <header>
        <h1>Консалтинговая платформа</h1>
        <p>Добро пожаловать в демо-версию платформы</p>
      </header>

      <main>
        <button
          onClick={handleDemoClick}
          style={{
            padding: "1rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: "1rem"
          }}
        >
          Демо
        </button>

        {demoMessage && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#e0f7fa",
              borderRadius: "5px",
              color: "#00796b",
              fontWeight: "bold"
            }}
          >
            {demoMessage}
          </div>
        )}
      </main>

      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
        © 2025 Консалтинговая платформа
      </footer>
    </div>
  );
}

export default App;