import './style.css'

import VerificaAuth from '../../../components/Funcoes/VerificaAuth'

import Header from '../../../components/Template/Header'
import Navbar from '../../../components/Template/Navbar'
import Footer from '../../../components/Template/Footer'

import Datatables from '../../../components/Datatables'

function SupervisorTempoReal() {
    VerificaAuth() // Verifica autenticação do Usuário

    const columns = [
        {
            name: 'Supervisores',
            selector: row => row.Supervisor,
            sortable: true,
        },
        {
            name: 'Escalados',
            selector: row => row.Escalado,
            sortable: true,
        },
        {
            name: 'Absenteísmo',
            selector: row => row.ABS,
            sortable: true,
        },
        {
            name: 'Porcentagem',
            selector: row => row.porcentagem,
            sortable: true,
        },
    ]

    const data = [
        {
            "Supervisor": "Supervisor 01",
            "Escalado": "2",
            "ABS": "1",
            "porcentagem": "50.00%",
        },
        {
            "Supervisor": "Supervisor 02",
            "Escalado": "4",
            "ABS": "4",
            "porcentagem": "100.00%",
        },
        {
            "Supervisor": "Supervisor 03",
            "Escalado": "1",
            "ABS": "1",
            "porcentagem": "100.00%",
        },
        {
            "Supervisor": "Supervisor 04",
            "Escalado": "17",
            "ABS": "16",
            "porcentagem": "94.12%",
        },
        {
            "Supervisor": "Supervisor 05",
            "Escalado": "5",
            "ABS": "5",
            "porcentagem": "100.00%",
        },
        {
            "Supervisor": "Supervisor 06",
            "Escalado": "2",
            "ABS": "2",
            "porcentagem": "100.00%",
        },
        {
            "Supervisor": "Supervisor 07",
            "Escalado": "16",
            "ABS": "13",
            "porcentagem": "81.25%",
        }
    ]

    function limpaSelect(data, label = 'NivelAcesso') { // Gera os dados do SELECT com nível de acesso
        let limpaSelect = [{ label: 'Todos', value: '' }]

        for (let i = 0; i < data.length; i++) {
            limpaSelect.push({ label: data[i][label], value: data[i][label] })
        }

        let novoArr = limpaSelect.map(item => item.value);

        let novissimoArr = novoArr.filter((este, i) => {
            return novoArr.indexOf(este) === i;
        })

        limpaSelect = novissimoArr.map(item => {

            if (item) return { label: item, value: item }
            else return { label: 'Todos', value: item }
        })

        return limpaSelect
    }

    var dataSelect = limpaSelect(data, 'Supervisor')

    return (
        <div>
            {/* <!--begin::Body-->*/}
            <div id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed">
                {/* <!--begin::Main-->*/}
                {/* <!--begin::Root-->*/}
                <div className="d-flex flex-column flex-root">
                    {/* <!--begin::Page-->*/}
                    <div className="page d-flex flex-row flex-column-fluid">
                        {/* <!--begin::Aside-->*/}
                        <Navbar />
                        {/* <!--end::Aside-->*/}
                        {/* <!--begin::Wrapper-->*/}
                        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                            {/* <!--begin::Header-->*/}
                            <Header />
                            {/* <!--end::Header-->*/}
                            {/* <!--begin::Content-->*/}
                            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                {/* <!--begin::Post-->*/}
                                <div className="post d-flex flex-column-fluid" id="kt_post">
                                    {/* <!--begin::Container-->*/}
                                    <div id="kt_content_container" className="container-xxl">
                                        {/* <!--begin::Table-->*/}
                                        <div className="card card-flush mt-6">
                                            {/* <!--begin::Card body-->*/}
                                            <div className="card-body py-4">
                                                {/* <!--begin::Table container-->*/}
                                                <div className="table-responsive">
                                                    {/* <!--begin::Table-->*/}
                                                    <Datatables
                                                        nomeTabela='Supervisores em Tempo Real'
                                                        columns={columns}
                                                        data={data}
                                                        dataSelect={dataSelect}
                                                        placeholderSelect={"Supervisor"}
                                                        indexSelect={'Supervisor'}
                                                        indexTable={'Supervisor'}
                                                    />
                                                    {/* <!--end::Table-->*/}
                                                </div>
                                                {/* <!--end::Table container-->*/}
                                            </div>
                                            {/* <!--end::Card body-->*/}
                                        </div>
                                        {/* <!--end::Card-->*/}
                                    </div>
                                    {/* <!--end::Container-->*/}
                                </div>
                                {/* <!--end::Post-->*/}
                            </div>
                            {/* <!--end::Content-->*/}
                            {/* <!--begin::Footer-->*/}
                            <Footer />
                            {/* <!--end::Footer-->*/}
                        </div>
                        {/* <!--end::Wrapper-->*/}
                    </div>
                    {/* <!--end::Page-->*/}
                </div>
                {/* <!--end::Root-->*/}
                {/* <!--end::Main-->*/}
            </div>
            {/* <!--end::Body-->*/}
        </div>
    )
}

export default SupervisorTempoReal