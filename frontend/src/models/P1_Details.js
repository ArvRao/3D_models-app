import { Link } from 'react-router-dom'
import { React, useState } from 'react'
import { Canvas } from 'react-three-fiber'

const P1_Detail = () => {
    return (
        <>
            <Link className="underline text-blue-500" to="/contents">Go back</Link>

            <Canvas>
                {/* No html to be written inside Canvas element */}
                <mesh>
                    <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
                    <meshStandardMaterial attach='material' />
                </mesh>
            </Canvas>

        </>
    )
}

export default P1_Detail