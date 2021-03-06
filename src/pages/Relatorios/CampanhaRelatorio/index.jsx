import './style.css'

import VerificaAuth from '../../../components/Funcoes/VerificaAuth'

import Header from '../../../components/Template/Header'
import Navbar from '../../../components/Template/Navbar'
import Footer from '../../../components/Template/Footer'

import Datatables from '../../../components/Datatables'
import DataPeriodo from '../../../components/DataPeriodo'

function CampanhaRelatorio() {
    VerificaAuth() // Verifica autenticação do Usuário

    const columns = [
        {
            name: 'Campanhas',
            selector: row => row.Campanha,
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
            "Campanha": "Campanha 01",
            "ABS": "1",
            "Escalado": "2",
            "porcentagem": "50.00%",
        },
        {
            "Campanha": "Campanha 02",
            "ABS": "4",
            "Escalado": "4",
            "porcentagem": "100.00%",
        },
        {
            "Campanha": "Campanha 03",
            "ABS": "1",
            "Escalado": "1",
            "porcentagem": "100.00%",
        },
        {
            "Campanha": "Campanha 04",
            "ABS": "16",
            "Escalado": "17",
            "porcentagem": "94.12%",
        },
        {
            "Campanha": "Campanha 05",
            "ABS": "5",
            "Escalado": "5",
            "porcentagem": "100.00%",
        },
        {
            "Campanha": "Campanha 06",
            "ABS": "2",
            "Escalado": "2",
            "porcentagem": "100.00%",
        },
        {
            "Campanha": "Campanha 07",
            "ABS": "13",
            "Escalado": "16",
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

    var dataSelect = limpaSelect(data, 'Campanha')

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
                                                {/* <!--begin::Data container-->*/}
                                                <DataPeriodo />
                                                {/* <!--end::Data container-->*/}
                                            </div>
                                            {/* <!--end::Card body-->*/}
                                        </div>
                                        {/* <!--end::Table-->*/}
                                        {/* <!--begin::Table-->*/}
                                        <div className="card card-flush mt-6">
                                            {/* <!--begin::Card body-->*/}
                                            <div className="card-body py-4">
                                                {/* <!--begin::Table container-->*/}
                                                <div className="table-responsive">
                                                    {/* <!--begin::Table-->*/}
                                                    <Datatables
                                                        nomeTabela='Relatórios das Campanhas'
                                                        columns={columns}
                                                        data={data}
                                                        dataSelect={dataSelect}
                                                        placeholderSelect={"Campanhas"}
                                                        indexSelect={'Campanha'}
                                                        indexTable={'Campanha'}
                                                    />
                                                    {/* <!--end::Table-->*/}
                                                </div>
                                                {/* <!--end::Table container-->*/}
                                            </div>
                                            {/* <!--end::Card body-->*/}
                                        </div>
                                        {/* <!--end::Table-->*/}
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

export default CampanhaRelatorio