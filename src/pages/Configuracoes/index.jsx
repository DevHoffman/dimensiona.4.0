import './style.css'

import VerificaAuth from '../../components/Funcoes/VerificaAuth'

function Configuracoes() {
    VerificaAuth() // Verifica autenticação do Usuário
    
    return(
        <div>
            <h1>Configurações</h1>
        </div>
    )
}

export default Configuracoes