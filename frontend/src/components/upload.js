import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from '../App'

const upload = () => {

    const uploadModel = (e) => {
        let files = e.target.files
        console.warn("data file", files)
    }


    return (
        <div className="pt-6">
            <h1 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-serif">Upload a model</h1> <br />
            {/* <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-36 border-2 py-2" onClick={uploadModel}>Click here</button> */}
            <input type="file" name="file" onChange={uploadModel} />

                </div>
    )
}

export default upload