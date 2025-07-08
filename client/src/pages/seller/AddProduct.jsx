// import React, { useState } from 'react'
// import { assets, categories } from '../../assets/assets';
// import toast from 'react-hot-toast';
// import { useAppContext } from '../../context/AppContext'
// const AddProduct = () => {
//     const { axios } = useAppContext()
       
//     const [files, setFiles] = useState([]);
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [category, setCategory] = useState('');
//     const [price, setPrice] = useState('');
//     const [offerPrice, setOfferPrice] = useState('');
//     const onSubmitHandler = async (event) => {
//         try {
//             event.preventDefault();
//             const productData = {
//                 name, 
//                 description: description.split('\n'), 
//                 category, 
//                 price, 
//                 offerPrice
//             }
//             const formData = new FormData();
//             formData.append('productData', JSON.stringify(productData));
//             for (let i = 0; i < files.length; i++) {
//                 formData.append('images', files[i])
//             }
//             const { data } = await axios.post('/api/product/add', formData)
//             if (data.success) {
//                 toast.success(data.message)
//                 setName('');
//                 setDescription('');
//                 setCategory('');
//                 setPrice('');
//                 setOfferPrice('');
//                 setFiles([]);
//             } else {
//                 toast.error(data.message)
//                 console.log(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//             console.log(error.message)
//         }

//     }
//     return (
//         <div className="no-scrollbar flex-1 h-[95vh] overflow-y-hidden flex flex-col justify-between">
//             <form onSubmit={onSubmitHandler} className="md:p-10 p-4 space-y-5 max-w-lg">
//                 <div>
//                     <p className="text-base font-medium">Product Image</p>
//                     <div className="flex flex-wrap items-center gap-3 mt-2">
//                         {Array(4).fill('').map((_, index) => (
//                             <label key={index} htmlFor={`image${index}`}>
//                                 <input
//                                     onChange={(e) => {
//                                         const updatedFiles = [...files];
//                                         updatedFiles[index] = e.target.files[0]
//                                         setFiles(updatedFiles)
//                                     }}
//                                     type="file" id={`image${index}`} hidden />
//                                 <img className="max-w-24 cursor-pointer" src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area} alt="uploadArea" width={100} height={100} />
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-1 max-w-md">
//                     <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
//                     <input onChange={(e) => setName(e.target.value)} value={name} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
//                 </div>
//                 <div className="flex flex-col gap-1 max-w-md">
//                     <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
//                     <textarea onChange={(e) => setDescription(e.target.value)} value={description} id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
//                 </div>
//                 <div className="w-full flex flex-col gap-1">
//                     <label className="text-base font-medium" htmlFor="category">Category</label>
//                     <select onChange={(e) => setCategory(e.target.value)} value={category} id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
//                         <option value="">Select Category</option>
//                         {categories.map((item, index) => (
//                             <option key={index} value={item.path}>{item.path}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="flex items-center gap-5 flex-wrap">
//                     <div className="flex-1 flex flex-col gap-1 w-32">
//                         <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
//                         <input onChange={(e) => setPrice(e.target.value)} value={price} id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
//                     </div>
//                     <div className="flex-1 flex flex-col gap-1 w-32">
//                         <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
//                         <input onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice} id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
//                     </div>
//                 </div>
//                 <button className="cursor-pointer px-8 py-2.5 bg-primary text-white font-medium rounded">ADD</button>
//             </form>
//         </div>
//     );
// };


// export default AddProduct
import React, { useState } from 'react'
import { assets, categories } from '../../assets/assets';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

const AddProduct = () => {
    const { axios } = useAppContext()

    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [offerPrice, setOfferPrice] = useState('');

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();
            const productData = {
                name,
                description: description.split('\n'),
                category,
                price,
                offerPrice
            };
            const formData = new FormData();
            formData.append('productData', JSON.stringify(productData));
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i]);
            }
            const { data } = await axios.post('/api/product/add', formData);
            if (data.success) {
                toast.success(data.message);
                setName('');
                setDescription('');
                setCategory('');
                setPrice('');
                setOfferPrice('');
                setFiles([]);
            } else {
                toast.error(data.message);
                console.log(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        }
    };

    return (
        <motion.div
            className="no-scrollbar flex-1 h-[95vh] overflow-y-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.form
                onSubmit={onSubmitHandler}
                className="md:p-10 p-4 space-y-5 max-w-lg"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4).fill('').map((_, index) => (
                            <motion.label
                                key={index}
                                htmlFor={`image${index}`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <input
                                    onChange={(e) => {
                                        const updatedFiles = [...files];
                                        updatedFiles[index] = e.target.files[0];
                                        setFiles(updatedFiles);
                                    }}
                                    type="file"
                                    id={`image${index}`}
                                    hidden
                                />
                                <img
                                    className="max-w-24 cursor-pointer"
                                    src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                                    alt="uploadArea"
                                    width={100}
                                    height={100}
                                />
                            </motion.label>
                        ))}
                    </div>
                </motion.div>

                {[
                    {
                        label: "Product Name",
                        id: "product-name",
                        type: "text",
                        value: name,
                        onChange: setName
                    },
                    {
                        label: "Product Description",
                        id: "product-description",
                        type: "textarea",
                        value: description,
                        onChange: setDescription
                    }
                ].map((field, i) => (
                    <motion.div key={i} className="flex flex-col gap-1 max-w-md" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        <label className="text-base font-medium" htmlFor={field.id}>{field.label}</label>
                        {field.type === "textarea" ? (
                            <textarea
                                id={field.id}
                                rows={4}
                                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
                                placeholder="Type here"
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value}
                            />
                        ) : (
                            <input
                                id={field.id}
                                type={field.type}
                                placeholder="Type here"
                                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value}
                                required
                            />
                        )}
                    </motion.div>
                ))}

                <motion.div className="w-full flex flex-col gap-1" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        id="category"
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                    >
                        <option value="">Select Category</option>
                        {categories.map((item, index) => (
                            <option key={index} value={item.path}>{item.path}</option>
                        ))}
                    </select>
                </motion.div>

                <motion.div className="flex items-center gap-5 flex-wrap" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            id="product-price"
                            type="number"
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input
                            onChange={(e) => setOfferPrice(e.target.value)}
                            value={offerPrice}
                            id="offer-price"
                            type="number"
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>
                </motion.div>

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-8 py-2.5 bg-primary text-white font-medium rounded"
                >
                    ADD
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default AddProduct;
