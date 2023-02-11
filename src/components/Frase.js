import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation'
import styles from './Frase.module.css'

function Frase () {
return (
    <div className={styles.fraseContainer}>
        <h2>Meu primeiro componente</h2>
        <p className={styles.fraseContent}> frase frase frase </p>
    </div>
)

}
export default Frase