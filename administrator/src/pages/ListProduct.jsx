import React, {useEffect, useState} from 'react'
import axios from "axios";
import {backendUrl} from "../App.jsx";
import {toast} from "react-toastify";
import {assets} from "../assets/admin_assets/assets.js";

const ListProduct = ({token}) => {
    const [list, setList] = useState([])

    const fetchList = async () => {
        // calling api and getting list of all products
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers: {token}})
            if (response.data.success) {
                toast.success(response.data.message) // перезагружаем страницу сразу же
                await fetchList()
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])
    if (list.length === 0) {
        return <div className='w-100 h-100 text-center'>
            <p className='text-blue-700 font-semibold'>Вы пока еще не разместили товары!</p>
        </div>
    }
    return (
        <div>
            <p className='mb-2'>Весь лист продуктов</p>
            <div className='flex flex-col gap-2' >
                {/* List table title */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-blue-100 text-sm'>
                    <b className='text-center'>Изображение</b>
                    <b className='text-center'>Имя</b>
                    <b className='text-center'>Категория</b>
                    <b className='text-center'>Цена</b>
                    <b className='text-center'>Действие</b>
                </div>

                {/* products*/}

                {
                    list.map((item, index) => (
                        <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-1 border-b text-center' key={index}>
                            <img className='rounded-lg ' style={{width: '120px'}} src={item.image[0]} alt=""/>
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.price}₽</p>

                            <img onClick={() => {
                                removeProduct(item._id)
                            }} className='ml-auto mr-auto cursor-pointer' src={assets.cancel_icon} alt=""/>
                        </div>
                    ))
                }

                </div>
        </div>
    )
}
export default ListProduct
