function BotaoAzul(props) {
    return(
        <button type="button" className={`btn btn-sm btn-${props.class}`}>{props.texto}</button>
    )
}

export default BotaoAzul