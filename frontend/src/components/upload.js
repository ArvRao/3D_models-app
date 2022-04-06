import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from '../App'
import React, {useState} from 'react';
import axios from 'axios';

const Upload = () => {

    const [file, setFile] = useState()

    const uploadModel = e => {
        let files = e.target.files
        console.warn(files)
        setFile(e.target.files[0])

    }

    const onSubmit = (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append('file', file)

        axios.post('localhost:5000/upload', data)
            .then((e) => {
                console.log('Success')
            })
            .catch((e) => {
                console.log('Error', e)
            })

    }



    return (
        <div className="pt-6">
            <h1 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-serif">Upload a model</h1> <br />
            {/* <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-36 border-2 py-2" onClick={uploadModel}>Click here</button> */}
            <form onSubmit={onSubmit} method="post">
            <input type="file" name="file" onChange={uploadModel} />
            <button>Submit</button>
            
            </form>

            </div>
    )
}

export default Upload