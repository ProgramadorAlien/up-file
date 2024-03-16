import React, { useState, useRef } from 'react';
import '../DragDrop.css';
//import { FcGallery } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileImage } from '@fortawesome/free-solid-svg-icons';


function DragDrop() {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
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
                                <FontAwesomeIcon icon={faFileAlt} style={{ color: "rgba(243, 166, 23, 0.929)", }} />
                                <p>Drag & Drop here or <b>Browse</b></p>
                            </div>

                        </>

                    )}

                </div>
                <div className="mt-1"><button className='Upload-File' onClick={handleButtonClick}>Upload Manifiest</button></div>

            </div>

            <div className="mb-2" style={{ borderTop: '1px solid #ccc', marginTop: '5px' }}></div>

            <div className="container">
                <div className="row justify-content-center text-center"> {/* Centering the content horizontally and vertically */}
                    <div className="col mb-3 mb-md-0">
                        <p className="mb-0">WN-DA-072-NH20166.cvs</p>
                    </div>
                    <div className="w-100 d-md-none"></div> {/* Add a full-width spacer visible only on small screens */}
                    <div className="col">
                        <p className="mb-0">5.7MB</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center"> {/* Align items vertically */}
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faFileImage} style={{ color: "rgba(243, 166, 23, 0.929)", }} /> {/* Icon */}
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

            <div className="mt-3" style={{ borderTop: '1px solid #ccc', marginTop: '5px' }}></div>
        </div>
    );
}

export default DragDrop;
