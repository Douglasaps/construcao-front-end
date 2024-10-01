import { useForm } from "react-hook-form";
import Botao from "../components/Botao";
import InputEmail from "../components/inputEmail";
import InputSenha from "../components/inputSenha";
function FormLogin(){
    const {register, handleSubmit, formstate: {erros}} = useForm();
    return(
        <form onSubmit={handleSubmit((data)=> { })}> 
            <InputEmail register={register} error={erros.email}/>
            <InputSenha register={register} error={erros.senha}/> 
            <Botao texto="Entrar"/>
        </form>
    );
}

export default FormLogin;