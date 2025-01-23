import React from 'react'
import UserProfileNav from '../../components/UserProfileNav'
import SuggestQuestion from '../../components/SuggestQuestion'

const OrderHistory = () => {
    return (
        <>
            <UserProfileNav page="orderHistory" />
            <div className='flex flex-col justify-center items-center'>

            </div>
            <div className='bg-slate-200 flex justify-center items-center'>
                <div className="w-[1600px] py-10">
                    <p className='text-xl'>Tìm kiếm một đơn đặt hàng khác?</p>
                    <a href='#' className='text-black hover:text-white hover:bg-black underline text-xl'>Theo dõi đơn hàng của bạn</a>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20'>
                <SuggestQuestion />

            </div>
        </>
    )
}

export default OrderHistory