import Button from './evento/Button'

function Evento(){
function meuEvento(){
    console.log("Opa, fui ativado")
}

return(
<>
<p>Clique para disparar um evento: </p>

<Button event={meuEvento} text="Primeiro evento" />
{/* <button onClick={meuEvento}>Ativar</button> */}

</>
)

}

export default Evento