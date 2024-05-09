import Formulario from "../Formulario";
import Lista from "../Lista";
import Cronometro from "../Cronometro";
import styles from  './styles.module.scss'

function App() {


  return (
    <div className={styles.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  )
}

export default App
