// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

import './style.css';

import Navbar from '../components/Navbar';
import Home from './Home';
import Footer from '../components/Footer';

function Dimensiona() {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default Dimensiona;
