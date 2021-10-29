import './style.css'

// import { Link } from "react-router-dom"

function Navigation() {
    var url = window.location.pathname;
    var segment

    if ( url.substring(url.lastIndexOf('/') + 1) === ''){
        segment = 'Dashboard'
    }
    else if (url.substring(url.lastIndexOf('/') + 1) === 'TempoReal') {
        segment = 'Tempo Real'
    }
    else {
        segment = url.substring(url.lastIndexOf('/') + 1)
    }

    return(
        <div>
            {/* <!--begin::Page title-->*/}
            <div className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                {/* <!--begin::Title-->*/}
                <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">Dimensiona</h1>
                {/* <!--end::Title-->*/}
                {/* <!--begin::Separator-->*/}
                <span className="h-20px border-gray-200 border-start mx-4"></span>
                {/* <!--end::Separator-->*/}
                {/* <!--begin::Breadcrumb-->*/}
                <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                    {/* <!--begin::Item-->*/}
                    <li className="breadcrumb-item">
                        <span className="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    {/* <!--end::Item-->*/}
                    {/* <!--begin::Item-->*/}
                    <li className="breadcrumb-item text-dark">{segment}</li>
                    {/* <!--end::Item-->*/}
                </ul>
                {/* <!--end::Breadcrumb-->*/}
            </div>
            {/* <!--end::Page title-->*/}
        </div>
    )
}

export default Navigation;