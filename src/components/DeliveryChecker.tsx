import React, { useState } from 'react';

const formatCep = (cep: string) => {
  // Remove tudo que não for dígito e formata para 00000-000
  const digits = cep.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
};

const DeliveryChecker: React.FC = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<any>(null);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value);
    setCep(formatted);
    setAddress(null);
    setError('');
  };

  const handleCheck = async () => {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      setError('Digite um CEP válido com 8 dígitos.');
      setAddress(null);
      return;
    }
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();
      if (data.erro) {
        setError('CEP não encontrado.');
        setAddress(null);
      } else {
        setAddress(data);
        setError('');
      }
    } catch {
      setError('Erro ao consultar o CEP.');
      setAddress(null);
    }
  };

  return (
    <div className="mt-6">
      <label className="block mb-2 font-semibold">Verifique a disponibilidade de entrega:</label>
      <div className="flex space-x-2">
        <input
          type="text"
          value={cep}
          onChange={handleChange}
          placeholder="Digite o CEP"
          maxLength={9}
          className="border px-3 py-2 rounded w-40"
        />
        <button
          onClick={handleCheck}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Consultar
        </button>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {address && (
        <div className="mt-2 text-green-700">
          <div>
            {address.logradouro} {address.complemento}
          </div>
          <div>{address.bairro}</div>
          <div>
            {address.localidade} - {address.uf}
          </div>
          <div>CEP: {address.cep}</div>
        </div>
      )}
    </div>
  );
};

export default DeliveryChecker;
