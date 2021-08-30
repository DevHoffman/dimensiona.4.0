import 'bootstrap/dist/css/bootstrap.min.css';
import './style-global.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/js/bootstrap.min.js';

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
