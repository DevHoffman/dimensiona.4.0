import './style.css'

import Header from '../../components/Template/Header'
import Navbar from '../../components/Template/Navbar'
import Footer from '../../components/Template/Footer'

function TempoReal(){
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
                                                teste
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