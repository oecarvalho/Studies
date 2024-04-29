import Botao from "../Botao";

export default function Formulario(){
    return (
        <form>
            <div>
                <label htmlFor="tarefa">Adicione uma tarefa</label>
                <input type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="o que você quer estudar?"
                    required/>
            </div>

            <div>
                <label htmlFor="tempo"></label>
                <input type="time"
                    step='1'
                    name="tempo"
                    id="tempo"
                    min='00:00:00'
                    max='01:30:00'
                    required />
            </div>

            <Botao/>
        </form>
    )
}