import './style.css'

import DataTable from 'react-data-table-component'
import Select from 'react-select'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iziToast from 'izitoast'
import styled, { keyframes } from 'styled-components'

function Datatable() {
    var timer
    const [Data, setData] = useState([])
    const [Filter, setFilter] = useState([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        setPending(true)
        axios.get('http://localhost/crud_codeigniter/usuarios/datatables')
        .then(response => {
            var resposta = response.data.data
            setData(resposta)
            setFilter(resposta)
            setPending(false)
        })
        .catch(erro => {
            iziToast.destroy()
            setPending(false)
        })
    }, [])

    var kt_filter_year = [
        { value: 'All', label: 'All time' },
        { value: 'thisyear', label: 'This year' },
        { value: 'thismonth', label: 'This month' },
        { value: 'lastmonth', label: 'Last month' },
        { value: 'last90days', label: 'Last 90 days' },
    ]

    var kt_filter_orders = [
        { 
            value: 'Thyago Hoffman', label: 'Thyago Hoffman',
        },
        { 
            value: 'Teste 1', label: 'Teste 1',
        },
    ]

    function logChange(value) {
        setPending(true)
        clearTimeout(timer)
        timer = setTimeout(() => {
            const filtro = value.value
            let result = Data.filter(function (item) {
                let itemNome = item.Usuario.toLowerCase()
                let itemEmail = item.Email.toLowerCase()
                let valorNome = filtro.toLowerCase()
                let valorEmail = filtro.toLowerCase()
                return itemNome.indexOf(valorNome) !== -1
                    || itemEmail.indexOf(valorEmail) !== -1
            })
            setFilter(result)
            setPending(false)
        }, 1000)
    }

    function onChangeTale(e) {
        setPending(true)
        clearTimeout(timer)
        timer = setTimeout(() => {
            const filtro = e.target.value
            let result = Data.filter(function (item) {
                let itemNome = item.Usuario.toLowerCase()
                let itemEmail = item.Email.toLowerCase()
                let valorNome = filtro.toLowerCase()
                let valorEmail = filtro.toLowerCase()
                return itemNome.indexOf(valorNome) !== -1
                    || itemEmail.indexOf(valorEmail) !== -1
            })
            setFilter(result)
            setPending(false)
        }, 1000)
    }

    const rotate360 = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
        `;

    const Spinner = styled.div`
        margin: 16px;
        animation: ${rotate360} 1s linear infinite;
        transform: translateZ(0);
        border-top: 2px solid grey;
        border-right: 2px solid grey;
        border-bottom: 2px solid grey;
        border-left: 4px solid #009ef7;
        background: transparent;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    `;

    const CustomLoader = () => (
        <div>
            <Spinner />
            <div>Carregando Dados...</div>
        </div>
    );

    const columns = [
        {
            name: 'Nome',
            selector: row =>    <div className="d-flex py-4">
                                    <div className="me-5 position-relative">
                                        <div className="symbol symbol-35px symbol-circle">
                                            <span className="symbol-label bg-light-danger text-danger fw-bold">O</span>
                                        </div>
                                        <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <span className="fs-6 text-gray-800">{row.Usuario}</span>
                                    </div>
                                </div>,
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
            sortable: true,
        },
        {
            name: <div className="px-6">Detalhes</div>,
            selector: row => <Link to={`./Usuarios/detalhes/${row.CodiUsuario}`} className="btn btn-light btn-sm">Detalhes</Link>,
            sortable: true,
            right: true,
        },
    ]

    const subHeaderComponent = (
        <div>
            {/* <!--begin::Card toolbar-->*/}
            <div className="card-toolbar my-1 d-flex">
                {/* <!--begin::Select-->*/}
                <div className="me-6 my-1">
                    <Select
                        id="kt_filter_year"
                        name="year"
                        defaultValue="All"
                        data-control="select2"
                        data-hide-search="true"
                        className="w-200px form-select-solid form-select-sm"
                        options={kt_filter_year}
                        onChange={logChange}
                    />
                </div>
                {/* <!--end::Select-->*/}
                {/* <!--begin::Select-->*/}
                <div className="me-4 my-1">
                    <Select
                        id="kt_filter_orders"
                        name="orders"
                        defaultValue="All"
                        data-control="select2"
                        data-hide-search="true"
                        className="w-200px form-select-solid form-select-sm"
                        options={kt_filter_orders}
                        onChange={logChange}
                    />
                </div>
                {/* <!--end::Select-->*/}
                {/* <!--begin::Search-->*/}
                <div className="d-flex align-items-center position-relative my-1">
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->*/}
                    <span className="svg-icon svg-icon-3 position-absolute ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                        </svg>
                    </span>
                    {/* <!--end::Svg Icon-->*/}
                    <input 
                        type="text" 
                        id="kt_filter_search" 
                        className="form-control form-control-solid form-select-sm w-200px ps-9" 
                        placeholder="Pesquisar" 
                        onChange={onChangeTale}
                    />
                </div>
                {/* <!--end::Search-->*/}
            </div>
            {/* <!--begin::Card toolbar-->*/}
        </div>
    )

    return(
        <div>
            <DataTable
                title='Lista de Usuários'
                columns={columns}
                data={Filter}
                responsive
                pagination
                highlightOnHover
                progressPending={pending}
                progressComponent={<CustomLoader />}
                subHeader
                subHeaderAlign="right"
                subHeaderWrap
                subHeaderComponent={subHeaderComponent}
            />
        </div>
    )
}

export default Datatable