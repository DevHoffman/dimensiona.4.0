import './style.css'

import { useEffect } from 'react'

function Dashboard() {

    useEffect(() => {
    }, [])

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
                            Dashboard
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
