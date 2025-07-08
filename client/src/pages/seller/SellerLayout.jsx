// import React from 'react'
// import { useAppContext } from '../../context/AppContext';
// import { assets } from '../../assets/assets';
// import { Link, NavLink, Outlet } from 'react-router-dom';
// import toast from 'react-hot-toast';
// const SellerLayout = () => {
//     const { navigate, axios } = useAppContext()



//     const sidebarLinks = [
//         { name: "Add Product", path: "/seller", icon: assets.add_icon },
//         { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
//         { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
//     ];
//     const logout = async () => {
       
//         try {
//             const { data } = await axios.get('/api/seller/logout');

//             if (data.success) {
//                 toast.success(data.message);
//                 navigate('/');
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error('Logout failed');
//         }
//     }
//     return (
//         <>
//             <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
//                 <Link to="/">
//                     <img className="cursor-pointer w-34 md:w-38" src={assets.logo} alt="logo" />
//                 </Link>
//                 <div className="flex items-center gap-5 text-gray-500">
//                     <p>Hi! Admin</p>
//                     <button onClick={logout} className='border rounded-full text-sm px-4 py-1'>Logout</button>
//                 </div>
//             </div>
//             <div className='flex'>
//                 <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col">
//                     {sidebarLinks.map((item) => (
//                         <NavLink to={item.path} key={item.name} end={item.path == "/seller"}
//                             className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
//                             ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
//                                     : "hover:bg-gray-100/90 border-white "
//                                 }`
//                             }
//                         >
//                             <img src={item.icon} alt='' className='w-7 h-7' />
//                             <p className="md:block hidden text-center">{item.name}</p>
//                         </NavLink>
//                     ))}
//                 </div>
//                 <Outlet />
//             </div>
//         </>
//     );
// }

// export default SellerLayout

import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link, NavLink, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const SellerLayout = () => {
    const { navigate, axios } = useAppContext();

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    const logout = async () => {
        try {
            const { data } = await axios.get('/api/seller/logout');
            if (data.success) {
                toast.success(data.message);
                navigate('/');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Logout failed');
        }
    };

    return (
        <>
            {/* Header */}
            <motion.div
                className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Link to="/">
                    <img className="cursor-pointer w-34 md:w-38" src={assets.logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </motion.div>

            {/* Sidebar + Content Layout */}
            <div className='flex h-[calc(100vh-56px)] overflow-hidden'>
                {/* Sidebar */}
                <motion.div
                    className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {sidebarLinks.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            end={item.path === "/seller"}
                            className={({ isActive }) =>
                                `flex items-center py-3 px-4 gap-3 
                                ${isActive
                                    ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                    : "hover:bg-gray-100/90 border-white"
                                }`
                            }
                        >
                            <motion.img
                                src={item.icon}
                                alt=''
                                className='w-7 h-7'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            />
                            <p className="md:block hidden text-center">{item.name}</p>
                        </NavLink>
                    ))}
                </motion.div>

                {/* Outlet Page Content */}
                <motion.div
                    className='flex-1 w-full overflow-y-auto scrollbar-hide'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <Outlet />
                </motion.div>
            </div>
        </>
    );
};

export default SellerLayout;
