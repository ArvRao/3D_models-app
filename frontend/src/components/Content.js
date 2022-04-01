import { React } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div>

            <div className="text-xl inline-block">

                <p>CHEERIOS <Link className="underline text-blue-400" to="/p1">View</Link> </p>

                <br />
                <p>SWISS MUESLI <Link className="underline text-blue-400" to="/p2">View</Link> </p>
                <br />

                <p>SOFTASILK <Link className="underline text-blue-400" to="/p3">View</Link> </p>

                <br />
                <p>RICE & RONI <Link className="underline text-blue-400" to="/p4">View</Link> </p>

                <br />
                <p>FARFALLE <Link className="underline text-blue-400" to="/p5">View</Link> </p>

                <br />
                <p>BROWN RICE & QUINOA <Link className="underline text-blue-400" to="/p6">View</Link> </p>
                <br />
                <p>NATURE VALLEY <Link className="underline text-blue-400" to="/p7">View</Link> </p>
                <br />
                <p>EARL GREY <Link className="underline text-blue-400" to="/p8">View</Link> </p>
             
                <br />

                <p>KELLOGG'S SPECIAL K  <Link className="underline text-blue-400" to="/p12">View</Link> </p>
             
                <br />
                <p>KELLOGG'S MUESLI FRUIT MAGIC  <Link className="underline text-blue-400" to="/p13">View</Link> </p>
             
                <br />

                <Link className="underline bg-blue-800" to="/about">Go back</Link> <br /> <br />

                <p className="underline">Upload a file</p>

                <br />
            <footer id="footer">Copyright &copy; 2022</footer>

            </div>
        </div >
    )
}

export default Content