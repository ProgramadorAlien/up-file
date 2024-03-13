import React, { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { LuClock7 } from "react-icons/lu";
//import { faClock } from '@fortawesome/free-solid-svg-icons';
import DragDrop from './DragDrop';
import Toggle from './Toggle';


function FormU() {

    const [importName, setImportName] = useState('');
    const [splitSchedule, setSplitSchedule] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [scheduleType, setScheduleType] = useState('');

    const handleImportNameChange = (e) => {
        setImportName(e.target.value);
    };

    const handleSplitScheduleChange = (e) => {
        setSplitSchedule(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleScheduleTypeChange = (e) => {
        setScheduleType(e.target.value);
    };

    return (
        <main>

            <div className="form-content">
                <div className="container">
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        style={{
                            backgroundColor: '#030953dd',
                            borderRadius: "7px",
                            position: 'absolute',
                            top: '25px',
                            left: '25px'
                        }}
                    >
                        <span aria-hidden="true" style={{ color: 'white' }}>&times;</span>
                    </button>

                    <h2 className="text-center mt-5 mb-2">Document Upload</h2>
                    <div className='col-lg-4 mx-auto mb-6' style={{ borderTop: '1px solid #ccc', marginTop: '1px', marginBottom: '50px' }}></div>

                    <div className="row">
                        <div className="col-lg-7">
                            <select
                                className="form-select"
                                value={importName}
                                onChange={handleImportNameChange}
                                style={{ padding: '2px', color: '#030953dd', fontWeight: 'bold' }}
                            >
                                <option value="" disabled>Select import Name</option>
                                <option value="name1">Name 1</option>
                                <option value="name2">Name 2</option>
                                <option value="name3">Name 3</option>
                            </select>
                            <div className='col-lg-6' style={{ borderTop: '1px solid #ccc', marginTop: '20px' }}></div>
                            <div className="mt-3"><p className="blueText"><b>Select a manifest that you like to import</b></p></div>
                            <div>
                                <DragDrop /> {/* Componente DragDrop */}
                            </div>

                            <div className='col-lg-6' style={{ borderTop: '1px solid #ccc', marginTop: '10px' }}></div>
                            <div><p className="mt-3"><b>Elapse Date Checking:</b></p>
                                <p className="mt-2">No Elapse Dates!</p>
                            </div>
                            <div className='col-lg-6' style={{ borderTop: '1px solid #ccc', marginTop: '10px' }}></div>
                            <div className="mt-3"><p className="blueText"><b>Tolerance Windows</b></p></div>

                            <div className="row justify-content-left" style={{ marginTop: '8px' }}>
                                <div className="col-md-auto" style={{ marginRight: '0px', paddingRight: '1px' }}>
                                    {/*<FontAwesomeIcon icon={faToggleOn} flip="vertical" size="2x" style={{ color: "#12197d" }} /> */}
                                    <Toggle />
                                </div>
                                <div className="col-md-auto" style={{ marginRight: '0px', marginTop: '9px' }}>
                                    <p>|</p>
                                </div>
                                <div className="col-md-auto" style={{ marginRight: '0px', paddingRight: '0px', paddingLeft: '1px', marginBottom: '0px', marginTop: '6px' }}>
                                    <LuClock7 />
                                </div>
                                <div className="col-md-auto" style={{ marginRight: '0px', paddingRight: '0px', marginBottom: '8px', marginTop: '8px' }}>
                                    <p>Select Tolerance Level</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <p className="mt-0 mb-1"><b>Split Schedule Using Social Distance?</b></p>
                            <div className="form-check form-check-inline" style={{ marginTop: '0px' }}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="splitSchedule"
                                    id="yesRadio"
                                    value="yes"
                                    checked={splitSchedule === 'yes'}
                                    onChange={handleSplitScheduleChange}
                                />
                                <label className="form-check-label" htmlFor="yesRadio">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline" style={{ marginTop: '0px' }}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="splitSchedule"
                                    id="noRadio"
                                    value="no"
                                    checked={splitSchedule === 'no'}
                                    onChange={handleSplitScheduleChange}
                                />
                                <label className="form-check-label" htmlFor="noRadio">
                                    No
                                </label>
                                <div style={{ marginTop: '10px' }}></div>
                            </div>
                            <div className='col-lg-9' style={{ borderTop: '1px solid #ccc', marginTop: '0px' }}></div>
                            <div><p className="mt-3"><b>Location Checking</b></p>
                                <p className="mt-2 mb-1">All Available!</p>
                            </div>
                            <div className='col-lg-9' style={{ borderTop: '1px solid #ccc', marginTop: '0px' }}></div>

                            <p style={{ marginTop: '0px' }}><b>Client</b></p>
                            <div className="form-check form-check-inline" style={{ marginTop: '0px' }}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="scheduleType"
                                    id="singleRadio"
                                    value="single"
                                    checked={scheduleType === 'single'}
                                    onChange={handleScheduleTypeChange}
                                />
                                <label className="form-check-label" htmlFor="singleRadio">
                                    Single
                                </label>
                            </div>
                            <div className="form-check form-check-inline" style={{ marginTop: '0px' }}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="scheduleType"
                                    id="multipleRadio"
                                    value="multiple"
                                    checked={scheduleType === 'multiple'}
                                    onChange={handleScheduleTypeChange}
                                />
                                <label className="form-check-label" htmlFor="multipleRadio">
                                    Multiple
                                </label>
                                <div style={{ marginTop: '10px' }}></div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <label>Testing Center 1</label>
                                    </div>
                                    <div>
                                        <select
                                            className="form-select"
                                            value={selectedOption}
                                            onChange={handleOptionChange}
                                        >
                                            <option value="" disabled>Select Client</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <LuClock7 />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <label>Testing Center 2</label>
                                    </div>
                                    <div>
                                        <select
                                            className="form-select"
                                            value={selectedOption}
                                            onChange={handleOptionChange}
                                        >
                                            <option value="" disabled>Select Client</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <LuClock7 />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <label>Testing Center 3</label>
                                    </div>
                                    <div>
                                        <select
                                            className="form-select"
                                            value={selectedOption}
                                            onChange={handleOptionChange}
                                        >
                                            <option value="" disabled>Select Client</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <div>
                                            <LuClock7 />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <label>Testing Center 4</label>
                                    </div>
                                    <div>
                                        <select
                                            className="form-select"
                                            value={selectedOption}
                                            onChange={handleOptionChange}
                                        >
                                            <option value="" disabled>Select Client</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <LuClock7 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{ marginTop: '-40px' }}>
                        <p className="text-center mt-5 mb-2"><b>Data in the input file is correct. Please press Continue to input</b></p>

                        <div className="row justify-content-center">
                            <div className="col-12 col-md-auto">
                                <button className="btn btn-primary btn-lg btn-block mb-3">Continue Import</button>
                            </div>
                            <div className="col-12 col-md-auto">
                                <button className="btn btn-secondary btn-lg btn-block">Cancel</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </main>
    )
};

export default FormU;