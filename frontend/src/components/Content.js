import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div>

            <div className="text-xl inline-block">

                <p>p1.glb <Link className="underline text-blue-400" to="/p1">View</Link> </p>

                <br />
                <p>p2.glb <Link className="underline text-blue-400" to="/p2">View</Link> </p>
                <br />

                <p>p3.glb <Link className="underline text-blue-400" to="/p3">View</Link> </p>

                <br />
                <p>p4.glb <Link className="underline text-blue-400" to="/p4">View</Link> </p>

                <br />
                <p>p5.glb <Link className="underline text-blue-400" to="/p5">View</Link> </p>

                <br />
                <p>p6.glb <Link className="underline text-blue-400" to="/p6">View</Link> </p>
                <br />
                <Link className="underline bg-pink-300" to="/about">Go back</Link> <br />
            </div>
        </div >
    )
}

export default Content