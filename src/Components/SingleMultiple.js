import React, { useState } from 'react';
import { LuClock7 } from "react-icons/lu";

const SingleMultiple = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [scheduleType, setScheduleType] = useState('');
    

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleScheduleTypeChange = (e) => {
        setScheduleType(e.target.value);
    };

    return (
        
        <div>


<p style={{ marginTop: '16px' }}><b>Client</b></p>
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
            <div className="d-flex align-items-center justify-content-between mb-2" style={{ paddingLeft: 0 }}>
                <div>
                    <label htmlFor='select-client1'>Testing Center 1</label>
                </div>
                <div >
                    <select
                        className="form-select"
                        id='select-client1'
                        name='select-client1'
                        value={selectedOption}
                        onChange={handleOptionChange}
                        
                    >
                        <option value="" disabled >Select Client</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="iconclock-container">
                    <LuClock7 /> 
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2" style={{ paddingLeft: 0 }}>
                <div>
                    <label htmlFor='select-client2'>Testing Center 2</label>
                </div>
                <div>
                    <select
                        className="form-select "
                        id='select-client2'
                        name='select-client2'
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="" disabled>Select Client</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="iconclock-container">
                    <LuClock7 />
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2" style={{ paddingLeft: 0 }}>
                <div>
                    <label htmlFor='select-client3' >Testing Center 3</label>
                </div>
                <div>
                    <select
                        className="form-select "
                        id='select-client3'
                        name='select-client3'
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
                    <div className="iconclock-container">
                        <LuClock7 />
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2" style={{ paddingLeft: 0 }}>
                <div>
                    <label htmlFor='select-client4'>Testing Center 4</label>
                </div>
                <div>
                    <select
                        className="form-select"
                        id='select-client4'
                        name='select-client4'
                        value={selectedOption}
                        onChange={handleOptionChange}

                    >
                        <option value="" disabled>Select Client</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="iconclock-container">
                    <LuClock7 />
                </div>
            </div>
        </div>
        </div>
    );
};

export default SingleMultiple;
