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
            <h1 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-serif rounded-full">Upload a model</h1> <br />
            <hr />
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleFileChange}></input> <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type='submit'>Submit</button>
    
</form>
            <strong>Status:</strong> {status}

        </div>
    )
}

export default Upload