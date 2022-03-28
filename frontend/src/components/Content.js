import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div>

            <div className="text-xl inline-block">

                <p>p1.glb</p>
                <Link className="underline text-blue-400" to="/p1">View</Link> <br />

                <p>p2.glb</p>
                <Link className="underline text-blue-400" to="/p2">View</Link> <br />

                <p>p3.glb</p>
                <Link className="underline text-blue-400" to="/p3">View</Link> <br />

                <p>p4.glb</p>
                <Link className="underline text-blue-400" to="/p4">View</Link> <br />
                <br />


                <Link className="underline bg-pink-300" to="/about">Go back</Link> <br />
            </div>
        </div >
    )
}

export default Content