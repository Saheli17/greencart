// import React from 'react'
// import ProductCard from './ProductCard'
// import { useAppContext } from '../context/AppContext'

// const BestSeller = () => {
//   const { products } = useAppContext();
//   return (
//     <div className='mt-16'>
//       <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
//         {products.filter((product) => product.inStock).slice(0, 5).map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}

//       </div>
//     </div>
//   )
// }

// export default BestSeller
import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const { products } = useAppContext()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <div className='mt-16'>
      <motion.p
        className='text-2xl md:text-3xl font-medium'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Best Sellers
      </motion.p>

      <motion.div
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  )
}

export default BestSeller
