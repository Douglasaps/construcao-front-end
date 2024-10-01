import { useForm } from "react-hook-form"
import InputNome from "../components/inputNome";

function FormPerfil() {
    const {register, handleSubmit, formstate: {erros}} = useForm();
    return (
        <form onSubmit={handleSubmit((data) => { })}>
            <InputNome register = {register} error={erros.nome}/>
            <InPut

        </form>
    )
}