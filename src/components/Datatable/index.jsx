import './style.css'

import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Select from 'react-select'
import axios from 'axios'
// import { confirmAlert } from 'react-confirm-alert' // Import
// import { Link } from "react-router-dom"

// import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import iziToast from 'izitoast'

import Loader from '../../components/Loader'

function Datatable() {
    var timer
    const [nivelAcesso, setNivelAcesso] = useState([])
    const [Data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        setPending(true)
        axios.get('http://localhost/crud_codeigniter/usuarios/datatables')
        .then(response => {
            iziToast.destroy()
            console.clear()
            var resposta = response.data.data
            setData(resposta)

            var niveisAcesso  = []
            var niveis2 = [];
            var niveisFinais = []

            resposta.map(item => {
                return niveisAcesso.push(item.NivelAcesso)
            })

            niveisAcesso.map(nivel => {
                if(!niveis2.includes(nivel)){
                    return niveis2.push(nivel)
                }
                else {
                    return false
                }
            })

            niveis2.map(item => {
                return niveisFinais.push({value: item, label: item})
            })
            
            setNivelAcesso(niveisFinais)
            setFilter(resposta)
            setPending(false)
        })
        .catch(erro => {
            iziToast.destroy()
            console.clear()
            setPending(false)
        })
    }, [])

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    function onChangeSelect(value) {
        setPending(true)
        clearTimeout(timer)
        timer = setTimeout(() => {
            const filtro = value.value
            let result = Data.filter(function (item) {
                let itemNivelAcesso = item.NivelAcesso.toLowerCase()
                let valorNivelAcesso = filtro.toLowerCase()
                return itemNivelAcesso.indexOf(valorNivelAcesso) !== -1
            })
            setFilter(result)
            setPending(false)
        }, 1000)
    }

    function onChangeTable(e) {
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

    // function onClickCadastrar() {
    //     confirmAlert({
    //         title: `Cadastrar`,
    //         buttons: [
    //             {
    //                 label: 'Confirmar',
    //                 onClick: () => iziToast.success({ title: 'Vlw Tmj' })
    //             },
    //             {
    //                 label: 'Cancelar',
    //                 onClick: () => iziToast.error({ title: 'Opa' })
    //             }
    //         ]
    //     })
    // }

    const columns = [
        {
            name: 'Nome',
            // selector: row =>    <div className="d-flex py-4">
            //                         <div className="me-5 position-relative wmin-50px">
            //                             <div className="symbol symbol-circle symbol-50px">
            //                                 <span className="symbol-label bg-light-danger text-danger fw-bold">O</span>
            //                             </div>
            //                         </div>
            //                         <div className="d-flex flex-column justify-content-center w-200px">
            //                             <span className="fs-6 text-gray-800">{row.Usuario}</span>
            //                         </div>
            //                     </div>,
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
        // {
        //     name: <div className="px-6">Detalhes</div>,
        //     selector: row => <Link to={`./Usuarios/Detalhes/${row.CodiUsuario}`} className="btn btn-primary btn-sm">Detalhes </Link>,
        //     right: true,
        // },
    ]

    // const data = [
    //     {
    //         Usuario: 'Thyago Hoffman',
    //         Email: 'thoffman1698@gmail.com',
    //         Login: 'hoffman',
    //         NivelAcesso: 'Administrador',
    //     },
    //     {
    //         Usuario: 'Administrador',
    //         Email: 'teste@teste.com',
    //         Login: 'teste',
    //         NivelAcesso: 'Usuario',
    //     },
    // ]

    const subHeaderComponent = (
        <div>
            {/* <!--begin::Card toolbar-->*/}
            <div className="card-toolbar my-1 d-flex align-items">
                {/* <!--begin::Cadastrar-->*/}
                {/* <button type="button" className="btn btn-sm btn-primary" onClick={onClickCadastrar}>Cadastrar +</button> */}
                {/* <!--end::Cadastrar-->*/}
                {/* <!--begin::Select-->*/}
                <div className="me-4 my-1">
                    <Select
                        id="nivelAcesso"
                        name="orders"
                        data-control="select2"
                        data-hide-search="true"
                        className="w-200px form-select-solid form-select-sm"
                        options={nivelAcesso}
                        onChange={onChangeSelect}
                        placeholder="Nível de Acesso"
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
                        onChange={onChangeTable}
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
                data={filter}
                responsive
                pagination
                highlightOnHover
                progressPending={pending}
                progressComponent={<Loader texto="Carregando Dados..." />}
                subHeader
                subHeaderAlign="right"
                subHeaderWrap
                subHeaderComponent={subHeaderComponent}
                paginationComponentOptions={paginationComponentOptions}
            />
        </div>
    )
}

export default Datatable