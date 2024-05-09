import Botao from "../Botao";
import formulario from "./Formulario.module.scss"

export default function Formulario(){
    return (
        <form className={formulario.novaTarefa}>
            <div className={formulario.inputContainer}>
                <label htmlFor="tarefa">Adicione uma tarefa</label>
                <input type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="o que você quer estudar?"
                    required/>
            </div>

            <div className={formulario.inputContainer}>
                <label htmlFor="tempo"></label>
                <input type="time"
                    step='1'
                    name="tempo"
                    id="tempo"
                    min='00:00:00'
                    max='01:30:00'
                    required />
            </div>

            <Botao
                texto="Adicionar"
            />
        </form>
    )
}