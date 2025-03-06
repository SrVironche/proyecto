import motoLogo from './descarga.jpg'; 
import './App.css';
import { useState } from 'react';

function App() {
  const [moto, setMoto] = useState(""); 
  const [motosGuardadas, setMotosGuardadas] = useState([]);

  const handleInputChange = (e) => {
    setMoto(e.target.value);
  };

  const handleSaveMoto = () => {
    if (moto) {
      setMotosGuardadas([...motosGuardadas, moto]);
      setMoto("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={motoLogo} className="App-logo" alt="Moto Logo" />
        <h1>¿Que moto te gustaria?</h1>
        <p>escribe la lista de motos que te gustaria tener.</p>
        
        <div>
          <input 
            type="text" 
            placeholder="Escribe el nombre de una moto..." 
            value={moto} 
            onChange={handleInputChange} 
          />
          <button onClick={handleSaveMoto}>Guardar</button>
        </div>

        <div>
          <h3>Motos guardadas:</h3>
          <ul>
            {motosGuardadas.map((moto, index) => (
              <li key={index}>{moto}</li> 
            ))}
          </ul>
        </div>
      </header> 
    </div>
  );
}

export default App;
