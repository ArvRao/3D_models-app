import { React, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import P6 from '../assets/P6'

import { OrbitControls } from "@react-three/drei"
const P6_Detail = () => {
    return (
        <div className="pt-24 pb-6" style={{ height: "370px", width: "460px" }}>
            <br />
            <p className="text-2xl font-extralight">FARFALLE</p>
            <Canvas className="border-4 border-double border-green-400 bg-black">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <P6 />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default P6_Detail