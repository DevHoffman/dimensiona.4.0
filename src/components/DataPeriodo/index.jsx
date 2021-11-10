import './style.css'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function DataPeriodo() {
    const [openCalendar, setOpenCalendar] = useState(false)

    console.log(openCalendar)
    
    
    return (
        <div>
            <div className="card-body p-12">
                <form action="" id="kt_invoice_form">
                    <div className="d-flex flex-column align-items-start flex-xxl-row">
                        <div className="d-flex align-items-center flex-equal fw-row me-4 order-2" data-bs-toggle="tooltip" data-bs-trigger="hover" title="" data-bs-original-title="Specify invoice date">
                            <div className="fs-6 fw-bolder text-gray-700 text-nowrap">
                                Período:
                            </div>
                            <div className="position-relative d-flex align-items-center w-150px" onClick={(e) => setOpenCalendar(true)}>
                                <input className="form-control form-control-white fw-bolder pe-5 flatpickr-input" placeholder="Selecionar Data" name="invoice_date" type="date" />
                                <span className="svg-icon svg-icon-2 position-absolute ms-4 end-0">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                        <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4" data-bs-toggle="tooltip" data-bs-trigger="hover" title="" data-bs-original-title="Enter invoice number">
                            <span className="fs-2x fw-bolder text-gray-800">Relatório por Período</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row" data-bs-toggle="tooltip" data-bs-trigger="hover" title="" data-bs-original-title="Specify invoice due date">
                            <div className="fs-6 fw-bolder text-gray-700 text-nowrap" id="data">Teste</div>
                        </div>
                        <div className={"flatpickr-calendar animate  arrowTop arrowLeft " + openCalendar === true ? 'open' : ''} tabIndex="-1">
                            <div className="flatpickr-months">
                                <span className="flatpickr-prev-month">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                                        <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path>
                                    </svg>
                                </span>
                                <div className="flatpickr-month">
                                    <div className="flatpickr-current-month">
                                        <select className="flatpickr-monthDropdown-months" aria-label="Month" tabIndex="-1">
                                            <option className="flatpickr-monthDropdown-month" value="0" tabIndex="-1">January</option>
                                            <option className="flatpickr-monthDropdown-month" value="1" tabIndex="-1">February</option>
                                            <option className="flatpickr-monthDropdown-month" value="2" tabIndex="-1">March</option>
                                            <option className="flatpickr-monthDropdown-month" value="3" tabIndex="-1">April</option>
                                            <option className="flatpickr-monthDropdown-month" value="4" tabIndex="-1">May</option>
                                            <option className="flatpickr-monthDropdown-month" value="5" tabIndex="-1">June</option>
                                            <option className="flatpickr-monthDropdown-month" value="6" tabIndex="-1">July</option>
                                            <option className="flatpickr-monthDropdown-month" value="7" tabIndex="-1">August</option>
                                            <option className="flatpickr-monthDropdown-month" value="8" tabIndex="-1">September</option>
                                            <option className="flatpickr-monthDropdown-month" value="9" tabIndex="-1">October</option>
                                            <option className="flatpickr-monthDropdown-month" value="10" tabIndex="-1">November</option>
                                            <option className="flatpickr-monthDropdown-month" value="11" tabIndex="-1">December</option>
                                        </select>
                                        <div className="numInputWrapper">
                                            <input className="numInput cur-year" type="number" tabIndex="-1" aria-label="Year" />
                                            <span className="arrowUp"></span>
                                            <span className="arrowDown"></span>
                                        </div>
                                    </div>
                                </div>
                                <span className="flatpickr-next-month">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17">
                                        <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="flatpickr-innerContainer">
                                <div className="flatpickr-rContainer">
                                    <div className="flatpickr-weekdays">
                                        <div className="flatpickr-weekdaycontainer">
                                            <span className="flatpickr-weekday">Sun</span>
                                            <span className="flatpickr-weekday">Mon</span>
                                            <span className="flatpickr-weekday">Tue</span>
                                            <span className="flatpickr-weekday">Wed</span>
                                            <span className="flatpickr-weekday">Thu</span>
                                            <span className="flatpickr-weekday">Fri</span>
                                            <span className="flatpickr-weekday">Sat</span>
                                        </div>
                                    </div>
                                    <div className="flatpickr-days" tabIndex="-1">
                                        <div className="dayContainer">
                                            <span className="flatpickr-day prevMonthDay" aria-label="October 31, 2021" tabIndex="-1">31</span>
                                            <span className="flatpickr-day " aria-label="November 1, 2021" tabIndex="-1">1</span>
                                            <span className="flatpickr-day " aria-label="November 2, 2021" tabIndex="-1">2</span>
                                            <span className="flatpickr-day " aria-label="November 3, 2021" tabIndex="-1">3</span>
                                            <span className="flatpickr-day " aria-label="November 4, 2021" tabIndex="-1">4</span>
                                            <span className="flatpickr-day " aria-label="November 5, 2021" tabIndex="-1">5</span>
                                            <span className="flatpickr-day " aria-label="November 6, 2021" tabIndex="-1">6</span>
                                            <span className="flatpickr-day " aria-label="November 7, 2021" tabIndex="-1">7</span>
                                            <span className="flatpickr-day " aria-label="November 8, 2021" tabIndex="-1">8</span>
                                            <span className="flatpickr-day today" aria-label="November 9, 2021" aria-current="date" tabIndex="-1">9</span>
                                            <span className="flatpickr-day " aria-label="November 10, 2021" tabIndex="-1">10</span>
                                            <span className="flatpickr-day " aria-label="November 11, 2021" tabIndex="-1">11</span>
                                            <span className="flatpickr-day " aria-label="November 12, 2021" tabIndex="-1">12</span>
                                            <span className="flatpickr-day " aria-label="November 13, 2021" tabIndex="-1">13</span>
                                            <span className="flatpickr-day " aria-label="November 14, 2021" tabIndex="-1">14</span>
                                            <span className="flatpickr-day " aria-label="November 15, 2021" tabIndex="-1">15</span>
                                            <span className="flatpickr-day " aria-label="November 16, 2021" tabIndex="-1">16</span>
                                            <span className="flatpickr-day " aria-label="November 17, 2021" tabIndex="-1">17</span>
                                            <span className="flatpickr-day " aria-label="November 18, 2021" tabIndex="-1">18</span>
                                            <span className="flatpickr-day " aria-label="November 19, 2021" tabIndex="-1">19</span>
                                            <span className="flatpickr-day " aria-label="November 20, 2021" tabIndex="-1">20</span>
                                            <span className="flatpickr-day " aria-label="November 21, 2021" tabIndex="-1">21</span>
                                            <span className="flatpickr-day " aria-label="November 22, 2021" tabIndex="-1">22</span>
                                            <span className="flatpickr-day " aria-label="November 23, 2021" tabIndex="-1">23</span>
                                            <span className="flatpickr-day " aria-label="November 24, 2021" tabIndex="-1">24</span>
                                            <span className="flatpickr-day " aria-label="November 25, 2021" tabIndex="-1">25</span>
                                            <span className="flatpickr-day " aria-label="November 26, 2021" tabIndex="-1">26</span>
                                            <span className="flatpickr-day " aria-label="November 27, 2021" tabIndex="-1">27</span>
                                            <span className="flatpickr-day " aria-label="November 28, 2021" tabIndex="-1">28</span>
                                            <span className="flatpickr-day " aria-label="November 29, 2021" tabIndex="-1">29</span>
                                            <span className="flatpickr-day " aria-label="November 30, 2021" tabIndex="-1">30</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 1, 2021" tabIndex="-1">1</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 2, 2021" tabIndex="-1">2</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 3, 2021" tabIndex="-1">3</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 4, 2021" tabIndex="-1">4</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 5, 2021" tabIndex="-1">5</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 6, 2021" tabIndex="-1">6</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 7, 2021" tabIndex="-1">7</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 8, 2021" tabIndex="-1">8</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 9, 2021" tabIndex="-1">9</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 10, 2021" tabIndex="-1">10</span>
                                            <span className="flatpickr-day nextMonthDay" aria-label="December 11, 2021" tabIndex="-1">11</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DataPeriodo