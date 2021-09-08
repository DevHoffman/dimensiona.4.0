import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css'

import Home from './Home'
import Login from './Login'

function Dimensiona() {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        </div>
    )
}

export default Dimensiona;
