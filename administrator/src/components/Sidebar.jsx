import React from 'react'
import {NavLink} from "react-router-dom";
import {assets} from "../assets/admin_assets/assets.js";

const Sidebar = () => {
    return (
        <div className='w-[22%] min-h-screen border-r-2 ' >
            <div className='flex flex-col gap-3 pt-6 pl-[15%] text-[15px]'>
                <NavLink className={ `flex items-center py-2 rounded-lg gap-3 border border-r-0 px-3 border-gray-100`} to='/add-product'>
                    <img className='w-5 h-5' src={assets.add_icon} alt=""/>
                    <p className='hidden md:block  '>Добавить продукт</p>
                </NavLink>
                <NavLink className='flex items-center py-2 rounded-lg gap-3 border border-r-0 px-3 border-gray-100' to='/list-product'>
                    <img className='w-5 h-5' src={assets.order_icon} alt=""/>
                    <p className='hidden md:block  '>Все продукты</p>
                </NavLink>
                <NavLink className='flex items-center py-2 rounded-lg gap-3 border border-r-0 px-3 border-gray-100' to='/orders'>
                    <img className='w-5 h-5' src={assets.order_icon} alt=""/>
                    <p className='hidden md:block  '>Заказы</p>
                </NavLink>
            </div>
        </div>
    )
}
export default Sidebar
