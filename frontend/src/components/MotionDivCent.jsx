import { motion } from 'framer-motion'
import React from 'react'
import "./Animationblox.css"
export default function MotionDivCent() {
    return (
        <>
            <motion.div
                className='Card-class'
                initial={{ scale: 1, x: 0, y: 100 }}
                whileInView={{ scale: 1, x: 0, y: 0, transition: { duration: 0.3 } }}
                viewport={{ once: true, amount: .5}}

            >
                <div className='inner-card'>

                </div>
                <div className='inner-cardT'>
                    <div className='inner-cardTitle'>
                        <div className='inner-1Row'>
                            <div className='innerIn-1Row'>
                                <p>$3,273,279</p>
                            </div>
                            <div className='IconSale'>
                                <p>For sale</p>
                            </div>
                        </div>
                        <div className='inner-2Row'>
                            <p>Luxury 5-bed Villa</p>
                        </div>
                        <div className='inner-3Row'>
                            <div className='MapIcon'></div>
                            <p>29 Terrace Rd, BH2 5EL</p>
                        </div>

                    </div>
                    <div className='inner-cardInfo'>
                        <div className='Info-1Box'>
                            <div className='Info-Icon'>
                                <div className='RulerIcon'></div>
                                <p>1634 <span>sqft</span></p>
                            </div>

                            <div className='Info-Icon'>
                                <div className='BedIcon'></div>

                                <p>5 Beds</p>
                            </div>

                            <div className='Info-Icon'>
                                <div className='ShowerIcon'></div>

                                <p>5 Beds</p>
                            </div>

                        </div>
                    </div>
                    <div className='inner-cardOwner'>
                        <div className='Owner-Img'></div>
                        <div className='Owner-Name'>
                            <p>Jennifer Bloom</p>
                            <span>+44 235 123 321</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
