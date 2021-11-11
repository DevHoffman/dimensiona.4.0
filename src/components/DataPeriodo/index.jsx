import './style.css'

import { useState, Fragment } from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
// import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker'
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function DataPeriodo() {
    const [value, setValue] = useState([null, null])

    return (
        <div>
            <div className="card-body p-12">
                <form action="" id="kt_invoice_form">
                    <div className="d-flex align-items-start flex-xxl-row">
                        <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Enter invoice number">
                            <span className="fs-2x fw-bolder text-gray-800">Relatório por Período</span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card-body p-12">
                <form action="" id="kt_invoice_form">
                    <div className="d-flex align-items-start flex-xxl-row">
                        <div className="d-flex align-items-center flex-equal fw-row me-4 order-0" data-bs-toggle="tooltip" data-bs-trigger="hover" title="" data-bs-original-title="Specify invoice date">
                            <div className="fs-6 fw-bolder text-gray-700 text-nowrap">
                                Período:
                            </div>
                            <div className="position-relative d-flex align-items-center justify-content-center w-550px">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        {/* <MobileDateRangePicker
                                            startText="Data Inicial"
                                            endText="Data Final"
                                            value={value}
                                            onChange={(newValue) => {
                                                console.log(new Date())
                                                setValue(newValue)
                                                document.getElementById('data').innerText = newValue
                                            }}
                                            renderInput={(startProps, endProps) => (
                                                <Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{ mx: 2 }}> - </Box>
                                                    <TextField {...endProps} />
                                                </Fragment>
                                            )}
                                        /> */}
                                        <DesktopDateRangePicker
                                            startText="Data Inicial"
                                            endText="Data Final"
                                            value={value}
                                            mask="__/__/____"
                                            onChange={(newValue) => {
                                                let data = new Date(newValue[0])
                                                let data2 = new Date(newValue[1])
                                                data = data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear()
                                                data2 = data2.getDay() + '/' + data2.getMonth() + '/' + data2.getFullYear()
                                                console.log(data, data2)
                                                
                                                setValue(newValue)
                                                document.getElementById('data').innerText = data + ' - ' + data2
                                            }}
                                            renderInput={(startProps, endProps) => (
                                                <Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{ mx: 2 }}> - </Box>
                                                    <TextField {...endProps} />
                                                </Fragment>
                                            )}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row" data-bs-toggle="tooltip" data-bs-trigger="hover" title="" data-bs-original-title="Specify invoice due date">
                            <div className="fs-6 fw-bolder text-gray-700" id="data"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DataPeriodo
