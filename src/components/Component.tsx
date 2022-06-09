import Entrada from "./Entradas";

interface FormularioProps{

}
export default function formulario(props: FormularioProps){
    return(
        <div>   
            <Entrada texto="Nome" valor="teste"/>
        </div>
    )
}