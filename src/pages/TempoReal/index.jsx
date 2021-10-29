import './style.css'

import VerificaAuth from '../../components/Funcoes/VerificaAuth'

import Header from '../../components/Template/Header'
import Navbar from '../../components/Template/Navbar'
import Footer from '../../components/Template/Footer'

import Datatables from '../../components/Datatables'

function TempoReal() {
    VerificaAuth() // Verifica autenticação do Usuário

    const columns = [
        {
            name: 'Campanha',
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
            "Campanha": "ARSP", 
            "CodiCampanha": "4", 
            "ABS": "1", 
            "Coordenador": "Priscilla Araujo", 
            "Escalado": "2", 
            "porcentagem": "50.00", 
            "Supervisor": "EDINA SANTOS" 
        }, 
        { 
            "Campanha": "BANCO PAN", 
            "CodiCampanha": "16", 
            "ABS": "4", 
            "Coordenador": "Priscilla Araujo", 
            "Escalado": "4", 
            "porcentagem": "100.00", 
            "Supervisor": "ERICO FERREIRA ROSA" 
        }, 
        { 
            "Campanha": "MEDSENIOR", 
            "CodiCampanha": "14", 
            "ABS": "1", 
            "Coordenador": "Priscilla Araujo", 
            "Escalado": "1", 
            "porcentagem": "100.00", 
            "Supervisor": "ERICO FERREIRA ROSA" 
        }, 
        { 
            "Campanha": "Rede Tribuna", 
            "CodiCampanha": "1", 
            "ABS": "16", 
            "Coordenador": "Priscilla Araujo", 
            "Escalado": "17", 
            "porcentagem": "94.12", 
            "Supervisor": "EDINA SANTOS" 
        }, 
        { 
            "Campanha": "Rodosol", 
            "CodiCampanha": "2", 
            "ABS": "5", 
            "Coordenador": "Priscilla Araujo", 
            "Escalado": "5", 
            "porcentagem": "100.00", 
            "Supervisor": "ERICO FERREIRA ROSA" 
        }, 
        { 
            "Campanha": "V1", 
            "CodiCampanha": "10", 
            "ABS": "2", 
            "Coordenador": "Priscilla Araujo", 
            "Escalado": "2", 
            "porcentagem": "100.00", 
            "Supervisor": "ERICO FERREIRA ROSA" 
        }, 
        { 
            "Campanha": "Vale", 
            "CodiCampanha": "5", 
            "ABS": "13", 
            "Coordenador": "Priscilla Araujo", 
            "Escalado": "16", 
            "porcentagem": "81.25", 
            "Supervisor": "JORGE PEIXOTO JR" 
        }
    ]
    
    var dataSelect = [{label: 'Todos', value: ''}]
    for (let i = 0; i < data.length; i++) {
        dataSelect.push({ label: data[i].Campanha, value: data[i].Campanha});
    }

    return(
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
                                                        nomeTabela='Relatório em Tempo Real'
                                                        columns={columns}
                                                        data={data}
                                                        dataSelect={dataSelect}
                                                        placeholderSelect={"Campanha"}
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

export default TempoReal