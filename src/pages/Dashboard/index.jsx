import { useEffect } from 'react';

import './style.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import iziToast from 'izitoast';

function Dashboard(){
    useEffect(() => {
        iziToast.success({
            title: 'Bem vindo ao painel',
            position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        })
    }, []);
    return(
        <div>
            <Navbar />
            <h1>Home</h1>
            <Footer />
        </div>
    )
}

export default Dashboard;
