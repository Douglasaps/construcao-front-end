import React from 'react';

function InputNome(props) {
  const regras = {
    required: 'Nome é obrigatório',
    minLength: {
      value: 2,
      message: 'O nome deve ter pelo menos 2 caracteres',
    },
    maxLength: {
      value: 100,
      message: 'O nome deve ter até 100 caracteres',
    },
  };

  return (
    <div>
      <label htmlFor="nome">Nome</label>
      <input type="text" {...props.register("nome", regras)} />
      {props.error && <p>{props.error.message}</p>}
      <InputNome register={register} error={errors.nome} />
    </div>
  );
}

export default InputNome;