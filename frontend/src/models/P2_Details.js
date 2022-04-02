import { React, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import P2 from '../assets/P2'
import { OrbitControls } from "@react-three/drei"
const P1_Detail = () => {
    return (
        <div style={{ height: "370px", width: "470px" }}> <br />
            <br />
            <p className="text-2xl font-extralight">SWISS MUESLI</p>
            
            <Canvas className="border-4 border-double border-green-400 bg-black">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <P2 />
                </Suspense>
            </Canvas>


        </div>
    )
}

export default P1_Detail