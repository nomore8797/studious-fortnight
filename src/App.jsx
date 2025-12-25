import React, { useState } from "react";
import "./App.css";

function App() {
  const [platformState, setPlatformState] = useState({
    demoMessage: "",
    log: [],
    status: "Платформа в облаке. Стабильность: нормальная",
    notifications: []
  });

  const handleDemoClick = () => {
    const message = "Демо активировано! 🎉";
    setPlatformState(prev => ({
      ...prev,
      demoMessage: message,
      log: [...prev.log, message],
      notifications: [...prev.notifications, `Новая активность: ${message}`]
    }));
  };

  const handleServiceClick = (serviceName) => {
    const message = `Вы выбрали услугу: ${serviceName}`;
    setPlatformState(prev => ({
      ...prev,
      log: [...prev.log, message],
      notifications: [...prev.notifications, message]
    }));
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <header>
        <h1>Консалтинговая платформа</h1>
        <p>Добро пожаловать в демо-версию платформы</p>
      </header>

      <main>
        {/* Кнопка Демо */}
        <section style={{ marginBottom: "1rem" }}>
          <button
            onClick={handleDemoClick}
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              cursor: "pointer",
              marginBottom: "1rem",
              backgroundColor: "#00796b",
              color: "#fff",
              border: "none",
              borderRadius: "5px"
            }}
          >
            Демо
          </button>
          {platformState.demoMessage && (
            <div style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#e0f7fa",
              borderRadius: "5px",
              color: "#00796b",
              fontWeight: "bold"
            }}>
              {platformState.demoMessage}
            </div>
          )}
        </section>

        {/* Панель состояния */}
        <section style={{ marginTop: "1rem" }}>
          <h2>Панель состояния:</h2>
          <div style={{
            padding: "0.5rem",
            backgroundColor: "#fff3e0",
            borderRadius: "5px",
            color: "#e65100",
            fontWeight: "bold"
          }}>
            {platformState.status}
          </div>
        </section>

        {/* История действий Демо */}
        <section style={{ marginTop: "1rem" }}>
          <h2>История действий Демо:</h2>
          <ul style={{ paddingLeft: "1.5rem" }}>
            {platformState.log.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </section>

        {/* Уведомления */}
        <section style={{ marginTop: "1rem" }}>
          <h2>Уведомления:</h2>
          <ul style={{ paddingLeft: "1.5rem", color: "#d84315" }}>
            {platformState.notifications.map((note, index) => (<li key={index}>{note}</li>))}
          </ul>
        </section>

        {/* Список услуг (кликабельные блоки) */}
        <section style={{ marginTop: "2rem" }}>
          <h2>Доступные услуги:</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {["Анализ рынка", "Оптимизация процессов", "Отчёты и рекомендации"].map((service) => (
              <div
                key={service}
                onClick={() => handleServiceClick(service)}
                style={{
                  padding: "1rem",
                  backgroundColor: "#e1f5fe",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  flex: "1 0 200px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.1s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                {service}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
        © 2025 Консалтинговая платформа
      </footer>
    </div>
  );
}

export default App;