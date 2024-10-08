import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import InputNome from '../components/InputNome';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import Botao from '../components/Botao';

function FormPerfil() {
  // Inicializa o hook useForm
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Obtém o id da rota
  const { id } = useParams();

  // Função que será chamada ao submeter o formulário
  const onSubmit = (data) => {
    console.log(data); // Exibe os dados no console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputNome register={register} error={errors.nome} />
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />
      <Botao texto="Salvar" />
    </form>
  );
}

export default FormPerfil;