import { Link } from 'react-router-dom'
import { React, Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import P3 from '../assets/P3'

import { OrbitControls } from "@react-three/drei"
const P1_Detail = () => {
    return (
        <div style={{ height: "500px", width: "600px" }}>
            <Link className="underline bg-pink-300" to="/contents">Go back</Link> <br />
            <Canvas style={{ background: "#cfdae3" }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <P3 />
                </Suspense>
            </Canvas>

        </div>
    )
}

export default P1_Detail