import './style.css'

import { useEffect } from 'react'

import { Line } from 'react-chartjs-2'
import VerificaAuth from '../../components/Funcoes/VerificaAuth'

function Dashboard() {
    VerificaAuth() // Verifica autenticação do Usuário

    useEffect(() => {
    }, [])

    const data = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
            {
                label: "CAMPANHA",
                data: [33, 53, 85, 41, 44, 65, 65, 65, 65, 65, 65, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Coordenador",
                data: [23, 43, 75, 31, 34, 55],
                fill: false,
                borderColor: "blue"
            },
            {
                label: "Supervisor",
                data: [13, 33, 65, 21, 24, 45],
                fill: false,
                borderColor: "#333"
            },
            {
                label: "Operador",
                data: [3, 23, 55, 11, 13, 35],
                fill: false,
                borderColor: "red"
            },
        ]
    };

    return(
        <div>
            {/* <!--begin::Post-->*/}
            <div className="post d-flex flex-column-fluid" id="kt_post">
                {/* <!--begin::Container-->*/}
                <div id="kt_content_container" className="container-xxl">
                    {/* <!--begin::Table-->*/}
                    <div className="card card-flush mt-6">
                        {/* <!--begin::Card body-->*/}
                        <div className="card-body py-4">
                            <h2>Tempo Real</h2>
                            <Line data={data} title="Relatório em Tempo Real" />
                        </div>
                        {/* <!--end::Card body-->*/}
                    </div>
                    {/* <!--end::Card-->*/}
                </div>
                {/* <!--end::Container-->*/}
            </div>
            {/* <!--end::Post-->*/}
        </div>
    )
}

export default Dashboard
