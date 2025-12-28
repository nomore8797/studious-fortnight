import React from 'react';

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header>
        <h1>Studious Fortnight</h1>
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
              backgroundColor: '#00796b',
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
              backgroundColor: '#fff3e0',
              borderRadius: '5px',
              color: '#e65100',
              fontWeight: 'bold',
            }}
          >
            Платформа в облаке. Стабильность: нормальная
          </div>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <h2>История действий Демо:</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Первое действие</li>
            <li>Второе действие</li>
          </ul>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <h2>Уведомления:</h2>
          <ul style={{ paddingLeft: '1.5rem', color: '#d84315' }}>
            <li>Новое уведомление</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Доступные услуги:</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#e1f5fe',
                borderRadius: '5px',
                fontWeight: 'bold',
                flex: '1 0 200px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              Анализ рынка
            </div>
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#e1f5fe',
                borderRadius: '5px',
                fontWeight: 'bold',
                flex: '1 0 200px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              Оптимизация процессов
            </div>
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#e1f5fe',
                borderRadius: '5px',
                fontWeight: 'bold',
                flex: '1 0 200px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              Отчёты и рекомендации
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <a href="https://example.com">Документация</a>
        </section>
      </main>

      <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
        © 2025 Консалтинговая платформа
      </footer>
    </div>
  );
}

export default App;