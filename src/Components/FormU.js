import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { LuClock7 } from "react-icons/lu";
//import { faClock } from '@fortawesome/free-solid-svg-icons';
import DragDrop from './DragDrop';
import Toggle from './Toggle';
import SingleMultiple from './SingleMultiple';



function FormU() {

    const [importName, setImportName] = useState('');
    const [splitSchedule, setSplitSchedule] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

     // Define function to handle selected file change
     const handleFileChange = (file) => {
        setSelectedFile(file);
    };


    const handleImportNameChange = (e) => {
        setImportName(e.target.value);
    };

    const handleSplitScheduleChange = (e) => {
        setSplitSchedule(e.target.value);
    };

    


    //------------useEffectHook
     // Log selectedFile whenever it changes
     useEffect(() => {
        if (selectedFile !== null) {
        console.log("Selected File in useEffect:", selectedFile);
        }
    }, [selectedFile]);


    return (
        <div style={{ marginBottom: '70px' }}>
        <main style={{ marginTop: '70px' }}>

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


                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color:'#030953dd', marginBottom: '2rem' }}>
                        <h2 style={{ marginTop: '0rem', marginBottom: '2rem', position: 'relative', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', width: 'fit-content', margin: '0 auto' }}>
                            Document Upload
                        </h2>
                    </div>


                    <div className="row">
                        <div className="col-lg-7">     {/*First Column */}
                            <div style={{ paddingRight: '22px' }}>
                                <select
                                    className="form-select"
                                    id='select-importname'
                                    value={importName}
                                    onChange={handleImportNameChange}
                                    style={{ padding: '2px', color: '#030953dd', fontWeight: 'bold', border: '2px solid #ccc', height: '40px', fontSize: '15px' }}
                                >
                                    <option value="" disabled>Select import Name</option>
                                    <option value="name1">Name 1</option>
                                    <option value="name2">Name 2</option>
                                    <option value="name3">Name 3</option>
                                </select>
                                <div className='col-lg-7' style={{ borderTop: '1px solid #ccc', marginTop: '15px' }}></div>
                                <div className="mt-2 mb-1"><p className="blueText mb-2"><b>Select a manifest that you like to import</b></p></div>
                                <div>
                                    <DragDrop onFileChange={handleFileChange} /> {/* Componente DragDrop */}
                                </div>

                                <div className='col-lg-7' style={{ borderTop: '1px solid #ccc', marginTop: '15px' }}></div>
                                <div><p className="mt-1 mb-2"><b>Elapse Date Checking:</b></p>
                                    <p className="mt-2 mb-2">No Elapse Dates!</p>
                                </div>
                                <div className='col-lg-7' style={{ borderTop: '1px solid #ccc', marginTop: '2px' }}></div>
                                <div className="mt-2"><p className="blueText mb-1"><b>Tolerance Windows</b></p></div>

                                <div className="row justify-content-left" style={{ marginTop: '1px' }}>
                                    <div className="col-md-auto" style={{ marginRight: '0px', paddingRight: '1px' }}>
                                        {/*<FontAwesomeIcon icon={faToggleOn} flip="vertical" size="2x" style={{ color: "#12197d" }} /> */}
                                        <Toggle />  {/*Render Toggle component */}
                                    </div>
                                    <div className="col-md-auto" style={{ marginRight: '0px', marginTop: '9px' }}>
                                        <p>|</p>
                                    </div>
                                    <div className="col-md-auto iconclock-container" style={{ marginRight: '0px', paddingRight: '0px', paddingLeft: '1px', marginBottom: '0px', marginTop: '6px' }}>
                                        <LuClock7 />
                                    </div>
                                    <div className="col-md-auto" style={{ marginRight: '0px', paddingRight: '0px', marginBottom: '8px', marginTop: '8px' }}>
                                        <p>Select Tolerance Level</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-------------------------Second column*/}
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
                            <div><p className="mt-3 mb-1"><b>Location Checking:</b></p>
                                <p className="mt-2 mb-1">All Available!</p>
                            </div>
                            <div className='col-lg-9' style={{ borderTop: '1px solid #ccc', marginTop: '0px' }}></div>

                            <div className="single-multiple">
                                <SingleMultiple />   {/*Render SingleMultiple */}
                            </div>
                        </div>
                    </div>

                    {/*----------------------------Last Row------------------------------------------- */}
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
        </div>
    )
};

export default FormU;