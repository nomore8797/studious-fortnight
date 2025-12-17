import { useState } from 'react';

function App() {
  const [demoMessage, setDemoMessage] = useState('Нажми кнопку, чтобы увидеть демо!');

  const handleDemoClick = () => {
    setDemoMessage('Демо платформы активировано! 🚀');
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Консалтинговая платформа</h1>
      <p>Добро пожаловать! Платформа теперь в облаке Render.</p>

      <button
        onClick={handleDemoClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Демо
      </button>

      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{demoMessage}</p>
    </div>
  );
}

export default App;