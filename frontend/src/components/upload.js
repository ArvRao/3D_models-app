import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from '../App'
import React, {useState} from 'react';
import axios from 'axios';

const Upload = () => {

    const [file, setFile] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')

   
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', file.data)
        const response = await fetch('http://localhost:5000/file', {
            method: 'POST',
            body: formData,
        })
        if (response) setStatus(response.statusText)
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setFile(img)
    }

   

    return (
        <div className="pt-6">
            <h1 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-serif">Upload a model</h1> <br />
            {/* <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-36 border-2 py-2" onClick={uploadModel}>Click here</button> */}
            <hr />
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleFileChange}></input>
                <button className="bg-blue-500" type='submit'>Submit</button>
    
</form>
            {status && <h4>{status}</h4>}

        </div>
    )
}

export default Upload