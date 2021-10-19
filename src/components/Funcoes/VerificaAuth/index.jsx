import { useHistory } from "react-router-dom"

function VerificaAuth() {
    let history = useHistory()
    let Dados = []
    if (typeof localStorage.user_data === 'undefined') {
        Dados = {
            Usuario: 'NomeFiltrado2021',
            Email: 'Teste@teste.com',
            Foto: './assets/media/avatars/user.png',
        }
        Dados = JSON.stringify(Dados)
        window.localStorage.setItem("user_data", Dados)
        return history.push("/Login")
        // return window.location = '/Login'
    }
    else {
        Dados = localStorage.getItem('user_data')
        Dados = JSON.parse(Dados) // Transforma em objetos acessíveis

        function separarPalavras(stringToSplit, separator) {
            var arrayOfStrings = stringToSplit.split(separator)
            return arrayOfStrings[0]
        }

        return Dados.Usuario = separarPalavras(Dados.Usuario, ' ')
    }
}

export default VerificaAuth