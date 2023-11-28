import React, { useState } from 'react';

const PinForm = () => {
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Überprüfe, ob der eingegebene PIN-Code gültig ist
    if (pin === '190604') {
      setMessage('PIN-Code korrekt. Zugriff gewährt!');
    } else {
      setMessage('Falscher PIN-Code. Zugriff verweigert!');
    }
  };

  return (
    <div>
      <h2>Pin-Eingabe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          PIN-Code:
          {/* Setze das type-Attribut auf "tel" */}
          <input type="tel" value={pin} onChange={handlePinChange} />
        </label>
        <button type="submit">Überprüfen</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default PinForm;
