import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Dashboard(){
    return(
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/Dashboard">Home</Link></li>
                    </ul>

                    <hr />

                    <Navbar />
                    <h1>Home</h1>
                    <Footer />

                    <Route exact path="/Dashboard" component={Dashboard} />
                </div>
            </Router>
        </div>
    )
}

export default Dashboard;
