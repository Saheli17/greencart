// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../context/AppContext'
// import ProductCard from '../components/ProductCard'

// const AllProducts = () => {
//     const { products, searchQuery } = useAppContext()
//     const [filterProducts, setFilterProducts] = useState([])
//     useEffect(() => {
//         if (searchQuery.length > 0) {
//             setFilterProducts(products.filter(
//                 product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
//             ))
//         } else {
//             setFilterProducts(products)
//         }
//     }, [products, searchQuery])
//     return (
//         <div className='mt-16 flex flex-col'>
//             <div className='flex flex-col items-end w-max'>
//                 <p className='text-2xl font-medium uppercase'>All Products</p>
//                 <div className='w-16 h-0.5 bg-primary rounded-full'></div>
                
//             </div>
//                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
//                     {filterProducts.filter((product) => product.inStock).map((product, index) => (
//                         <ProductCard key={index} product={product} />
//                     ))}
//                 </div>
           
//         </div>
//     )
// }

// export default AllProducts

import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'

const AllProducts = () => {
    const { products, searchQuery } = useAppContext()
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilterProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        } else {
            setFilterProducts(products)
        }
    }, [products, searchQuery])

    return (
        <motion.div
            className='mt-16 flex flex-col'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All Products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
                <AnimatePresence>
                    {filterProducts.filter((product) => product.inStock).map((product, index) => (
                        <motion.div
                            key={product._id || index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default AllProducts
