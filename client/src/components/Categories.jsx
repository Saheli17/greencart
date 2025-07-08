// import React from 'react'
// import { assets, categories } from '../assets/assets'
// import { useAppContext } from '../context/AppContext'

// const Categories = () => {
//     const { navigate } = useAppContext()
//     return (
//         <div className='mt-16'>
//             <p className='text-2xl md:text-3xl font-medium'>Categories</p>
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
//                 {categories.map((category, index) => (
//                     <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' style={{ backgroundColor: category.bgColor }}
//                         onClick={() => {
//                             navigate(`/products/${category.path.toLowerCase()}`);
//                             scrollTo(0, 0)
//                         }}>
//                         <img src={category.image} alt={category.text} className='group-hover:scale-105 transition max-w-28 ' />
//                         <p className='text-sm font-medium'>{category.text}</p>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     )
// }

// export default Categories

import React from 'react'
import { motion } from 'framer-motion'
import { assets, categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
    const { navigate } = useAppContext()

    // Animation container with stagger effect
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    }

    // Individual item animation
    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    }

    return (
        <div className='mt-16'>
            {/* Animated heading */}
            <motion.p
                className='text-2xl md:text-3xl font-medium'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5 }}
            >
                Categories
            </motion.p>

            {/* Category grid with animation on scroll */}
            <motion.div
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'
                        style={{ backgroundColor: category.bgColor }}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`);
                            scrollTo(0, 0);
                        }}
                    >
                        <img
                            src={category.image}
                            alt={category.text}
                            className='transition max-w-28 group-hover:scale-105'
                        />
                        <p className='text-sm font-medium mt-2'>{category.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Categories
