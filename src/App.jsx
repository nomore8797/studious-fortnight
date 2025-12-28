import React from 'react';

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header>
        <h1>Консалтинговая платформа</h1>
        <p>Добро пожаловать в демо-версию платформы</p>
      </header>

      <main>
        <section style={{ marginBottom: '1rem' }}>
          <button
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              cursor: 'pointer',
              marginBottom: '1rem',
              backgroundColor: 'rgb(0, 121, 107)',
              color: '#fff',
              borderRadius: '5px',
            }}
          >
            Демо
          </button>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <h2>Панель состояния:</h2>
          <div
            style={{
              padding: '0.5rem',
              backgroundColor: 'rgb(255, 243, 224)',
              borderRadius: '5px',
              color: 'rgb(230, 81, 0)',
              fontWeight: 'bold',
            }}
          >
            Платформа в облаке. Стабильность: нормальная
          </div>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <h2>История действий Демо:</h2>
          <ul style={{ paddingLeft: '1.5rem' }} />
        </section>

        <section style={{ marginTop: '1rem' }}>
          <h2>Уведомления:</h2>
          <ul style={{ paddingLeft: '1.5rem', color: 'rgb(216, 67, 21)' }} />
        </section>
      </main>

      <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgb(85, 85, 85)' }}>
        © 2025 Консалтинговая платформа
      </footer>
    </div>
  );
}

export default App;