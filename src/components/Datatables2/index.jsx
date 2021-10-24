import './style.css'

import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Select from 'react-select'
import Loader from '../../components/Loader'

function Datatable2(props) {
    // var timer
    const [pending, setPending] = useState(true)

    useEffect(() => {
        setPending(false)
    }, [])

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
                        // options={nivelAcesso}
                        // onChange={onChangeSelect}
                        placeholder={props.placeholderSelect}
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
                        // onChange={onChangeTable}
                    />
                </div>
                {/* <!--end::Search-->*/}
            </div>
            {/* <!--begin::Card toolbar-->*/}
        </div>
    )

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };




    return(
        <div>
            <DataTable
                title={props.nomeTabela}
                columns={props.columns}
                data={props.data}
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

export default Datatable2