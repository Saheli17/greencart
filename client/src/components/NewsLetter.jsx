// import React from 'react'

// const NewsLetter = () => {
//     return (
//         <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14">
//             <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
//             <p className="md:text-lg text-gray-500/70 pb-8">
//                 Subscribe to get the latest offers, new arrivals, and exclusive discounts
//             </p>
//             <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
//                 <input
//                     className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
//                     type="text"
//                     placeholder="Enter your email id"
//                     required
//                 />
//                 <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primaryDull transition-all cursor-pointer rounded-md rounded-l-none">
//                     Subscribe
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default NewsLetter

import React from 'react'
import { motion } from 'framer-motion'

const NewsLetter = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            <motion.h1
                className="md:text-4xl text-2xl font-semibold"
                variants={itemVariants}
            >
                Never Miss a Deal!
            </motion.h1>

            <motion.p
                className="md:text-lg text-gray-500/70 pb-8"
                variants={itemVariants}
            >
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </motion.p>

            <motion.form
                className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
                variants={itemVariants}
            >
                <input
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primaryDull transition-all cursor-pointer rounded-md rounded-l-none"
                >
                    Subscribe
                </motion.button>
            </motion.form>
        </motion.div>
    )
}

export default NewsLetter
