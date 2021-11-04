import './style.css'

// import DatePicker from 'rsuite/DatePicker'
// import { DateRangePicker } from 'rsuite'
// import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'

function DataPeriodo() {

    return (
        <div>
            <form action="" id="kt_invoice_form">
                <div class="d-flex flex-column align-items-start flex-xxl-row">
                    <div class="d-flex align-items-center flex-equal fw-row me-4 order-2" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Specify invoice date">
                        <div class="fs-6 fw-bolder text-gray-700 text-nowrap">Date:</div>
                        <div class="position-relative d-flex align-items-center w-150px">
                            <input class="form-control form-control-white fw-bolder pe-5" placeholder="Select date" name="invoice_date" />
                            <span class="svg-icon svg-icon-2 position-absolute ms-4 end-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Enter invoice number">
                        <span class="fs-2x fw-bolder text-gray-800">SELECIONAR DATA</span>
                        <input type="text" class="form-control form-control-flush fw-bolder text-muted fs-3 w-125px" value="2021001" placehoder="..." />
                    </div>
                    <div class="d-flex align-items-center justify-content-end flex-equal order-3 fw-row" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Specify invoice due date">
                        <div class="fs-6 fw-bolder text-gray-700 text-nowrap">Due Date:</div>
                        <div class="position-relative d-flex align-items-center w-150px">
                            <input class="form-control form-control-white fw-bolder pe-5" placeholder="Select date" name="invoice_due_date" />
                            <span class="svg-icon svg-icon-2 position-absolute end-0 ms-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataPeriodo