import lista from './Lista.module.scss';
import Item from './item';

export default function Lista(){
    const tarefas = [{
        tarefa: 'Estudar React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'Estudar TypeScript',
        tempo: '01:00:00'
    },
    {
        tarefa: 'Estudar React com TS',
        tempo: '03:00:00'
    }]
    return(
        <aside className={lista.listaTarefas}>
            <h2>Estudos do dia</h2>

            <ul>
                {tarefas.map((item, index)=>(
                   <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                   />
                ))}
                
            </ul>
        </aside>
    )
}