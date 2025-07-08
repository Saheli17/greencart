// import React, { useEffect, useState } from 'react'
// import { assets } from '../assets/assets'
// import { useAppContext } from '../context/AppContext'
// import toast from 'react-hot-toast'
// const InputField = ({ type, placeholder, name, handleChange, address }) => (
//     <input
//         className='w-full px-2 py-2.5 border border-gray-500/20 rounded outline-none text-gray-500 focus:border-primary transition'
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         onChange={handleChange}
//         value={address[name]}
//         required
//     />
// )

// export const AddAddress = () => {
//     const{axios,user,navigate}=useAppContext()
//     const [address,setAddress]=useState({
//         firstName:'',
//         lastName:'',
//         email:'', 
//         street:'', 
//         city:'', 
//         state:'', 
//         zipcode:'', 
//         country:'', 
//         phone:'',

//     })
//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setAddress((prevAddress)=>({
//             ...prevAddress,
//             [name]:value,
//         }))

//     }
//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post('/api/address/add', {address,userId: user._id,});

//             if (data.success) {
//                 toast.success(data.message);
//                 navigate('/cart');
//             } else {
//                 toast.error(data.message);      
//                 console.log(data)          
//             }
//         } catch (error) {
//             toast.error(error.message);            
//         }

//     }
//     useEffect(()=>{
//         if(!user){
//             navigate('/cart')
//         }
//     },[])
//     return (
//         <div className='mt-16 pb-16'>
//             <p className='text-2xl md:text-3xl text-gray-500'>
//                 Add Shipping<span className='font-semibold text-primary'>Address</span>
//             </p>
//             <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
//                 <div className='flex-1 max-w-md'>
//                     <form className='space-y-3 mt-6 text-sm' onSubmit={onSubmitHandler}>
//                         <div className='grid grid-cols-2 gap-4'>
//                             <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="First Name"
//                                 name='firstName'
//                                 address={address}
//                             />
//                             <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="Last Name"
//                                 name='lastName'
//                                 address={address}
//                             />
//                         </div>
//                          <InputField
//                                 handleChange={handleChange}
//                                 type="email"
//                                 placeholder="Email Address"
//                                 name='email'
//                                 address={address}
//                             />
//                              <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="Street"
//                                 name='street'
//                                 address={address}
//                             />
//                             <div className='grid grid-cols-2 gap-4'>
//                             <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="City"
//                                 name='city'
//                                 address={address}
//                             />
//                             <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="State"
//                                 name='state'
//                                 address={address}
//                             />
//                         </div>
//                         <div className='grid grid-cols-2 gap-4'>
//                             <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="Zip code"
//                                 name='zipcode'
//                                 address={address}
//                             />
//                             <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="Country"
//                                 name='country'
//                                 address={address}
//                             />
//                         </div>
//                          <InputField
//                                 handleChange={handleChange}
//                                 type="text"
//                                 placeholder="Phone"
//                                 name='phone'
//                                 address={address}
//                             />
//                             <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primaryDull transition cursor-pointer uppercase'>
//                                 Save address
//                             </button>
//                     </form>
//                 </div>
//                 <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt='add address' />
//             </div>
//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { useAppContext } from '../context/AppContext';
// import toast from 'react-hot-toast';

// const InputField = ({ type, placeholder, name, handleChange, address }) => (
//   <input
//     className='w-full px-2 py-2.5 border border-gray-500/20 rounded outline-none text-gray-500 focus:border-primary transition'
//     type={type}
//     placeholder={placeholder}
//     name={name}
//     onChange={handleChange}
//     value={address[name]}
//     required
//   />
// );

// export const AddAddress = () => {
//   const { axios, user, navigate } = useAppContext();

//   const [address, setAddress] = useState({
//     // firstName: '',
//     // lastName: '',
//     // email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!user || !user._id) {
//       toast.error('User not found. Please login again.');
//       return;
//     }

//     try {
//       console.log('Submitting with userId:', user._id);
//       const { data } = await axios.post('/api/address/add', {
//         address,
//         userId: user._id,
//         name:user.name,
//         email:user.email,
//       });

//       if (data.success) {
//         toast.success(data.message);
//         navigate('/cart');
//       } else {
//         toast.error(data.message);
//         console.log(data);
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message);
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//       navigate('/cart');
//     }
//   }, [user]);

//   if (!user) return null;

//   return (
//     <div className='mt-16 pb-16'>
//       <p className='text-2xl md:text-3xl text-gray-500'>
//         Add Shipping <span className='font-semibold text-primary'>Address</span>
//       </p>

//       <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
//         <div className='flex-1 max-w-md'>
//           <form className='space-y-3 mt-6 text-sm' onSubmit={onSubmitHandler}>
//             {/*<div className='grid grid-cols-2 gap-4'>
//               <InputField
//                 handleChange={handleChange}
//                 type='text'
//                 placeholder='First Name'
//                 name='firstName'
//                 address={address}
//               />
//               <InputField
//                 handleChange={handleChange}
//                 type='text'
//                 placeholder='Last Name'
//                 name='lastName'
//                 address={address}
//               />
//             </div>
//             <InputField
//               handleChange={handleChange}
//               type='email'
//               placeholder='Email Address'
//               name='email'
//               address={address}
//             />*/}

//             <InputField
//               handleChange={handleChange}
//               type='text'
//               placeholder='Street'
//               name='street'
//               address={address}
//             />

//             <div className='grid grid-cols-2 gap-4'>
//               <InputField
//                 handleChange={handleChange}
//                 type='text'
//                 placeholder='City'
//                 name='city'
//                 address={address}
//               />
//               <InputField
//                 handleChange={handleChange}
//                 type='text'
//                 placeholder='State'
//                 name='state'
//                 address={address}
//               />
//             </div>

//             <div className='grid grid-cols-2 gap-4'>
//               <InputField
//                 handleChange={handleChange}
//                 type='text'
//                 placeholder='Zip code'
//                 name='zipcode'
//                 address={address}
//               />
//               <InputField
//                 handleChange={handleChange}
//                 type='text'
//                 placeholder='Country'
//                 name='country'
//                 address={address}
//               />
//             </div>

//             <InputField
//               handleChange={handleChange}
//               type='text'
//               placeholder='Phone'
//               name='phone'
//               address={address}
//             />

//             <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primaryDull transition cursor-pointer uppercase'>
//               Save address
//             </button>
//           </form>
//         </div>

//         <img
//           className='md:mr-16 mb-16 md:mt-0'
//           src={assets.add_address_iamge}
//           alt='add address'
//         />
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <motion.input
    className='w-full px-2 py-2.5 border border-gray-500/20 rounded outline-none text-gray-500 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={address[name]}
    required
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  />
);

export const AddAddress = () => {
  const { axios, user, navigate } = useAppContext();

  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!user || !user._id) {
      toast.error('User not found. Please login again.');
      return;
    }

    try {
      const { data } = await axios.post('/api/address/add', {
        address,
        userId: user._id,
        name: user.name,
        email: user.email,
      });

      if (data.success) {
        toast.success(data.message);
        navigate('/cart');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/cart');
    }
  }, [user]);

  if (!user) return null;

  return (
    <motion.div
      className='mt-16 pb-16'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className='text-2xl md:text-3xl text-gray-500'>
        Add Shipping <span className='font-semibold text-primary'>Address</span>
      </p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <motion.div
          className='flex-1 max-w-md'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <form className='space-y-3 mt-6 text-sm' onSubmit={onSubmitHandler}>
            <InputField
              handleChange={handleChange}
              type='text'
              placeholder='Street'
              name='street'
              address={address}
            />

            <div className='grid grid-cols-2 gap-4'>
              <InputField
                handleChange={handleChange}
                type='text'
                placeholder='City'
                name='city'
                address={address}
              />
              <InputField
                handleChange={handleChange}
                type='text'
                placeholder='State'
                name='state'
                address={address}
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <InputField
                handleChange={handleChange}
                type='text'
                placeholder='Zip code'
                name='zipcode'
                address={address}
              />
              <InputField
                handleChange={handleChange}
                type='text'
                placeholder='Country'
                name='country'
                address={address}
              />
            </div>

            <InputField
              handleChange={handleChange}
              type='text'
              placeholder='Phone'
              name='phone'
              address={address}
            />

            <motion.button
              whileTap={{ scale: 0.97 }}
              className='w-full mt-6 bg-primary text-white py-3 hover:bg-primaryDull transition cursor-pointer uppercase'
            >
              Save address
            </motion.button>
          </form>
        </motion.div>

        <motion.img
          className='md:mr-16 mb-16 md:mt-0'
          src={assets.add_address_iamge}
          alt='add address'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};
