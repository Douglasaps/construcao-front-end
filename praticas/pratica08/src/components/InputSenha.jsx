import React from 'react';

function InputSenha(props) {
  const regras = {
    required: 'Senha é obrigatória',
    minLength: {
      value: 6,
      message: 'A senha deve ter pelo menos 6 caracteres',
    },
  };

  return (
    <div>
      <label htmlFor="senha">Senha</label>
      <input type="password" {...props.register("senha", regras)} />
      {props.error && <p>{props.error.message}</p>}
      <InputSenha register={register} error={errors.senha} />

    </div>
  );
}

export default InputSenha;