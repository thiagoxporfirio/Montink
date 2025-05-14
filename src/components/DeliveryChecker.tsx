import React, { useState } from 'react';

const DeliveryChecker: React.FC = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleCheckDelivery = async () => {
    if (cep.length !== 8) {
      setError('CEP deve ter 8 dígitos.');
      setAddress('');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado.');
        setAddress('');
      } else {
        setError('');
        setAddress(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
      }
    } catch (error) {
      setError('Erro ao consultar o CEP.');
      setAddress('');
    }
  };

  return (
    <div className="delivery-checker">
      <input
        type="text"
        value={cep}
        onChange={handleCepChange}
        placeholder="Digite seu CEP"
        className="border p-2"
      />
      <button onClick={handleCheckDelivery} className="bg-blue-500 text-white p-2 ml-2">
        Verificar
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {address && <p className="text-green-500">Endereço: {address}</p>}
    </div>
  );
};

export default DeliveryChecker;
