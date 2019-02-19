import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';
import ThXin from './../../Title/th_xin/ThXin.js';
import './custom-image-crop.css';
import './css.scss';
import { downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef } from './../../../scripts/utilities/base64Utils.js';

class UaCrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: null,
            crop: {
                aspect: 1 / 1,
            },
        };
        this.imagePreviewCanvasRef = React.createRef();
    }
    static propTypes = {
        className: PropTypes.string,
        labelText: PropTypes.string,
        imgMaxSize: PropTypes.number,
        acceptedFileTypes: PropTypes.string,
    };
    static defaultProps = {
        className: '',
        labelText: 'Upload',
        imgMaxSize: 2000000000, // bytes
        acceptedFileTypes: 'image/x-png, image/png, image/jpg, image/jpeg, image/gif',
    };
    verifyFile=(files)=> {
        const { imgMaxSize, acceptedFileTypes } = this.props;
        const acceptedFileTypesArr = acceptedFileTypes.split(',').map((item) => {
            return item.trim();
        });
        if (typeof FileReader === 'undefined') {
            lert('瀏覽器不支援，請升級版本或更換瀏覽器');
            return false;
        }
        if (files && files.length > 0) {
            const filessize = files.size;
            if (filessize > imgMaxSize) {
                alert(`This file is not allowed ${filessize} bytes is too large`);
                return false;
            }
            if (!acceptedFileTypesArr.includes(files[0].type)) {
                alert('This file is not allowed. Only images are allowed.');
                return false;
            }
            return true;
        }
    }
    handleFileSelect=()=> {
        const files = event.target.files;
        const isVerified = this.verifyFile(files);
        if (isVerified) {
            const currentFile = files[0];
            console.log(currentFile);
            const myFileReader = new FileReader();
            myFileReader.addEventListener('load', ()=>{
                const Result = myFileReader.result;
                this.setState({
                    imgSrc: Result,
                    imgSrcExt: extractImageFileExtensionFromBase64(Result),
                });
            }, false);
            myFileReader.readAsDataURL(currentFile);
        }
    }
    handleOnCropChange=(crop)=> {
        this.setState({
            crop: crop,
        });
    }
    handleOnCropComplete=(crop, pixelCrop)=> {
        const canvasRef = this.imagePreviewCanvasRef.current;
        const { imgSrc } = this.state;
        image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
        this.handleAutoUpload();
    }
    handleAutoUpload=()=> {
        const { imgSrc, imgSrcExt } = this.state;
        if (imgSrc) {
            const canvasRef = this.imagePreviewCanvasRef.current;
            const imgData64 = canvasRef.toDataURL('image/' + imgSrcExt, 0.95);
            const Filename = 'img.' + imgSrcExt;
            // file to be uploaded
            console.log('handleAutoUpload', imgData64, Filename);
        }
    }
    handleDownloadClick=()=> {
        event.preventDefault();
        const { imgSrc, imgSrcExt } = this.state;
        if (imgSrc) {
            const canvasRef = this.imagePreviewCanvasRef.current;
            const imgData64 = canvasRef.toDataURL('image/' + imgSrcExt, 0.95);
            const Filename = 'img.' + imgSrcExt;

            // Download file
            downloadBase64File(imgData64, Filename);
            this.handleClearToDefault();
        }
    }
    handleClearToDefault=()=> {
        event.preventDefault();
        const canvas = this.imagePreviewCanvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.setState({
            imgSrc: null,
            imgSrcExt: null,
            crop: { aspect: 1 / 1 },
        });
    }
    render() {
        const { className, labelText } = this.props;
        const { imgSrc } = this.state;
        const inputStyle = { display: 'none' };
        const canvasStyle = { borderRadius: '50%' };
        const divStyle = {
            'width': '50%',
            'display': 'inline-block',
            'verticalAlign': 'top',
            'textAlign': 'center',
        };
        return (
            <div className='ua_crop'>
                <label
                    htmlFor='ua_crop'
                    className='ua_crop_label'>{labelText}</label>
                <input
                    className={`ua_crop_input ${className}`}
                    id="ua_crop"
                    type='file'
                    style={inputStyle}
                    multiple={false}
                    accept="image/*"
                    onChange={()=>this.handleFileSelect()} />
                {(imgSrc != null) &&
                    <div>
                        <div style={divStyle}>
                            <ThXin text='裁切個人頭像'
                                link='#ticket'
                                className='sm' />
                            <ReactCrop
                                src={imgSrc}
                                crop={this.state.crop}
                                onComplete={this.handleOnCropComplete}
                                onChange={this.handleOnCropChange} />
                        </div>
                        <div style={divStyle}>
                            <ThXin text='預覽個人頭像'
                                link='#ticket'
                                className='sm' />
                            <canvas ref={this.imagePreviewCanvasRef}
                                style={canvasStyle}>
                            </canvas>
                        </div>
                        {/* <button onClick={()=>this.handleDownloadClick()}>Download</button> */}
                        {/* <button onClick={()=>this.handleClearToDefault()}>Clear</button> */}
                    </div>
                }
            </div>
        );
    }
}

export default UaCrop;
