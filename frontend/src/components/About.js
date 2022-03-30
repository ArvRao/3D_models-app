import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from '../App'

const About = () => {
    return (
        <div>
            <h2>This is About page</h2>
            <br />
            <div>
                <Link to="/">Go back</Link> <br />
            </div>
        </div>
    )
}

export default About