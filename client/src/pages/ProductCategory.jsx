// import React from 'react'
// import { useAppContext } from '../context/AppContext'
// import { useParams } from 'react-router-dom'
// import { categories } from '../assets/assets'
// import ProductCard from '../components/ProductCard'
// const ProductCategory = () => {
//     const { products } = useAppContext()
//     const { category } = useParams()
//     const searchCategory = categories.find((item) => item.path.toLowerCase() === category)
//     const filterProducts = products.filter((product) => product.category.toLowerCase() === category)
//     return (
//         <div className='mt-16'>
//             {searchCategory && (
//                 <div className='flex flex-col items-end w-max'>
//                     <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
//                     <div className='w-16 h-0.5 bg-primary rounded-full'></div>
//                 </div>
//             )}
//             {filterProducts.length > 0 ? (
//                 <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
// {filterProducts.map((product)=>(
//     <ProductCard key={product._id} product={product}/>
// ))}
//                 </div>
//             ) : (
//                 <div className='flex items-center justify-center h-[60vh'>
// <p className='text-2xl font-medium text-primary'> No Products found in this category.</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default ProductCategory
import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'

const ProductCategory = () => {
    const { products } = useAppContext()
    const { category } = useParams()
    const searchCategory = categories.find((item) => item.path.toLowerCase() === category)
    const filterProducts = products.filter((product) => product.category.toLowerCase() === category)

    return (
        <motion.div
            className='mt-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {searchCategory && (
                <motion.div
                    className='flex flex-col items-end w-max'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
                    <div className='w-16 h-0.5 bg-primary rounded-full'></div>
                </motion.div>
            )}

            {filterProducts.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
                    <AnimatePresence>
                        {filterProducts.map((product, index) => (
                            <motion.div
                                key={product._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <motion.div
                    className='flex items-center justify-center h-[60vh]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className='text-2xl font-medium text-primary'> No Products found in this category.</p>
                </motion.div>
            )}
        </motion.div>
    )
}

export default ProductCategory