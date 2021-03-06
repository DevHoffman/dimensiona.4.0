import "./style.css"

import VerificaAuth from '../../components/Funcoes/VerificaAuth'

import Footer from "../../components/Template/Footer"
import Header from "../../components/Template/Header"
import Navbar from "../../components/Template/Navbar"
import Datatables from "../../components/Datatables"

function Usuarios() {
    VerificaAuth() // Verifica autenticação do Usuário

    const columns = [
        {
            name: 'Nome',
            selector: row => row.Usuario,
            sortable: true,
        },
        {
            name: 'Login',
            selector: row => row.Login,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.Email,
            sortable: true,
        },
        {
            name: 'Nivel de Acesso',
            selector: row => row.NivelAcesso,
        },
    ]

    const data = [
        {
            Usuario: 'Thyago Hoffman',
            Email: 'thoffman1698@gmail.com',
            Login: 'hoffman',
            NivelAcesso: 'Administrador',
        },
        {
            Usuario: 'Teste 0',
            Email: 'teste@teste.com',
            Login: 'teste0',
            NivelAcesso: 'Usuario',
        },
        {
            Usuario: 'Administrador',
            Email: 'admin@admin.com',
            Login: 'admin',
            NivelAcesso: 'Administrador',
        },
        {
            Usuario: 'Teste 1',
            Email: 'teste@teste.com',
            Login: 'teste1',
            NivelAcesso: 'Usuario',
        },
        {
            Usuario: 'Teste 2',
            Email: 'teste@teste.com',
            Login: 'teste2',
            NivelAcesso: 'Usuario',
        },
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

    const dataSelect = limpaSelect(data, 'NivelAcesso')

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
                                                            nomeTabela='Lista de Usuários' 
                                                            columns={columns}
                                                            data={data}
                                                            dataSelect={dataSelect}
                                                            placeholderSelect={"Nível de Acesso"}
                                                            indexSelect={'NivelAcesso'}
                                                            indexTable={'Usuario'}
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

export default Usuarios;