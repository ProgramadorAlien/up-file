import React, { useState, useRef } from 'react';
import '../DragDrop.css';
//import { FcGallery } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileImage } from '@fortawesome/free-solid-svg-icons';


function DragDrop({onFileChange}) {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
        // Call the function passed down from FormU to handle file change
        onFileChange(droppedFile);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        // Call the function passed down from FormU to handle file change
        onFileChange(selectedFile);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <div className="drag-drop-container" onDrop={handleDrop} onDragOver={handleDragOver}>
                <input
                    type="file"
                    accept="*"
                    onChange={handleFileInputChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                />
                <div className="drag-drop-content">
                    {file ? (
                        <div>
                            <p>Selected file: {file.name}</p>
                        </div>
                    ) : (
                        <>
                            <div className="drag-drop-message" onClick={handleButtonClick}>
                                {/*  <FcGallery />*/}
                                <FontAwesomeIcon icon={faFileAlt} style={{ color: "#FB9D27", }} />
                                <p>Drag & Drop here or <b>Browse</b></p>
                            </div>

                        </>

                    )}

                </div>
                <div className="mt-1"><button className='Upload-File' onClick={handleButtonClick}>Upload Manifiest</button></div>

            </div>

            <div className="mb-2" style={{ borderTop: '1px solid #ccc', marginTop: '5px' }}></div>

            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-6 mb-3 mb-md-0 text-md-right"> {/* Adjust column size and alignment */}
                        <p className="mb-0 gray-text">WN-DA-072-NH20166.cvs</p>
                    </div>
                    <div className="col-6 mb-3 mb-md-0 text-md-left"> {/* Adjust column size and alignment */}
                        <p className="mb-0 gray-text">5.7MB</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center"> {/* Align items vertically */}
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faFileImage} style={{ color: "#FB9D27", }} /> {/* Icon */}
                        </div>
                        <div className="col">
                            <div className="progress" style={{ height: '4px' }}>
                                <div
                                    className="progress-bar bg-custom"
                                    role="progressbar"
                                    style={{ width: '3%' }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-1" style={{ borderTop: '1px solid #ccc', marginTop: '5px' }}></div>
        </div>
    );
}

export default DragDrop;
