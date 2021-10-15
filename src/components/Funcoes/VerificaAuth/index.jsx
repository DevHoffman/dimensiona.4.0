import { useHistory } from "react-router-dom"

function VerificaAuth(){
    
    let history = useHistory()
    setTimeout(() => { // Redireciona para Dashboard
        if (typeof localStorage.user_data === 'undefined' && localStorage.user_data !== false) {
            history.push("/Login")
            // window.location = '/Login'
            console.log('redireciona')
        }
        else {
            localStorage.clear()
            localStorage.setItem('user_data', false)
            console.log('user_data: false')
        }
    }, 3000)
}

export default VerificaAuth