import botao from './Botao.module.scss'



export default function Botao(props: {texto:string}){
    return(
        <button className={botao.botao}>
            {props.texto}
        </button>
    )
}