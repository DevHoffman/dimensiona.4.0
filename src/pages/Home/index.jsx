import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Home(){
    return(
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>

                    <hr />

                    <Navbar />
                    <h1>Home</h1>
                    <Footer />

                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        </div>
    )
}

export default Home;
