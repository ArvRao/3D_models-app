import { React, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import P4 from '../assets/P4'

import { OrbitControls } from "@react-three/drei"
const P1_Detail = () => {
    return (
        <div style={{ height: "370px", width: "460px" }}>
             <br /> <br />
            <p className="text-2xl font-extralight">RICE & RONI</p>
            <Canvas className="border-4 border-double border-green-400 bg-black">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight intensity={1.0} angle={0.4} penumbra={1} position={[8, 11, 12]} castShadow />
                <Suspense fallback={null}>
                    <P4 />
                </Suspense>
            </Canvas>

        </div>
    )
}

export default P1_Detail