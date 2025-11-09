import React from 'react'
import { motion } from 'framer-motion'

export default function CardMove({ IsReversed }) {
    return (

        IsReversed
            ?
            <motion.div className='CardMover'
                initial={{ x: 150, scale: 0.8, opacity: 0.3 }
                }
                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className='textclass-div'>
                    <h3>Bathroom</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium cumque natus fugiat rerum impedit. Harum et assumenda illum, nisi consectetur, repellat recusandae eos ducimus, facere eligendi temporibus consequuntur veritatis.</p>
                </div>
                <div className='Imaged-class'></div>

            </motion.div >
            :
            <motion.div className='CardMover'
                initial={{ x: -150, scale: 0.8, opacity: 0.3 }
                }
                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className='Imaged-class'></div>
                <div className='textclass-div'>
                    <h3>Bathroom</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium cumque natus fugiat rerum impedit. Harum et assumenda illum, nisi consectetur, repellat recusandae eos ducimus, facere eligendi temporibus consequuntur veritatis.</p>
                </div>
            </motion.div >



    )
}
