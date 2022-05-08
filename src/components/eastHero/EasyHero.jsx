import { OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Earth from '../earth/earth'
import NGlobe from '../nGlobe/NGLobe'
import './styles.css'
import { useNavigate } from 'react-router-dom'
const EasyHero = () => {
    const navigate = useNavigate()
    return (
        <section class="hero-section">
            <div class="container">
                <div class="row" style={{ height: "calc(100vh - 80px)" }}>
                    <div class="col-sm-12 col-md-4 my-auto">
                        <div class="hero-content">
                            <h3 class="hero-title">
                                The solutions of tomorrow.
                            </h3>
                            <div class="hero-desc">
                            A leading technology firm with profound business and functional knowledge.                            </div>
                            <button class="learn-more">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text" onClick={()=> navigate('/about-us')}>Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8 globe-container">
                        {/* <div className="globe-earth"> */}
                        <div className='globb'>
                            <Canvas camera={{ zoom: 1, position: [200, 4000, 20000], fov: 28, near: 20, far: 1000000, rotateY: 45 / 180 * Math.PI }}>
                                <ambientLight intensity={1} />
                                {/* <Sky></Sky> */}
                                <hemisphereLight color={0x1496d1} groundColor={0x0991be} intensity={2} />
                                <pointLight position={[0, 50000, -50000]} color={0xffeeb1} intensity={2}/>
                                <Suspense fallback={null}>
                                    <NGlobe />
                                </Suspense>
                                <OrbitControls autoRotate={true} autoRotateSpeed={2} enablePan={false} enableZoom={false} />
                            </Canvas>
                        </div>

                        {/* </div> */}
                        {/* <div class="globe-earth">
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EasyHero