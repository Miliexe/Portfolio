import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import E404 from '../../asset/404.glb'

export function Model(props) {
    const { nodes, materials } = useGLTF(E404)
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.01, 0.21]} scale={0.01}>
                <mesh
                    geometry={nodes.mesh_id43.geometry}
                    material={materials['50']}
                    position={[-49, -25.23, 7.5]}
                />
            </group>
        </group>
    )
}

function NotFound() {
    return (
        <div className="error404">
            <Canvas
                className="error-3d"
                camera={{ fov: 1, position: [5, 0, 90] }}
            >
                <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={2} position={[50, 0, 50]} />
                    <Model />
                    <OrbitControls
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                        enablePan={true}
                        enableZoom={false}
                        enableRotate={true}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default NotFound
