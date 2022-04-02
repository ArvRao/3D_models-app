import { React, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import P7 from '../assets/P7'

import { OrbitControls } from "@react-three/drei"
const P7_Detail = () => {
    return (
        <div className="pt-12 pb-12" style={{ height: "370px", width: "460px" }}>
            <br />
            <p className="text-2xl font-extralight">BROWN RICE & QUINOA</p>
            <Canvas className="border-4 border-double border-green-400 bg-black">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight intensity={0.7} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <P7 />
                </Suspense>
            </Canvas>

        </div>
    )
}

export default P7_Detail