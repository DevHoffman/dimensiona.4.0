import { useHistory } from "react-router-dom"

function Sair() {
    let history = useHistory()

    localStorage.clear()
    history.push("/Login")
    return(
        <div></div>
    )
}

export default Sair