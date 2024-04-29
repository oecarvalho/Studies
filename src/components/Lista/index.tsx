

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
        <aside>
            <h2>Estudos do dia</h2>

            <ul>
                {tarefas.map((item, index)=>(
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}