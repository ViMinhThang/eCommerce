import React from 'react'
import UserProfileNav from '../../components/UserProfileNav'
import { IoIosArrowForward } from 'react-icons/io'

const UserProfile = () => {
    return (
        <div>
            <UserProfileNav page="news" />
            <div className='bg-gray-100'>
                <div className='w-[20%]'>
                    <h2 className="font-bold text-2xl">Tổng quan tài khoản</h2>
                    <div className='bg-white'>
                        <div className='flex justify-between items-center text-black hover:text-white hover:bg-black hover:underline'>
                            <a href='#' className="font-medium text-xl  p-5">Thông tin cá nhân</a>
                            <IoIosArrowForward className=' ml-2 text-3xl' />

                        </div>
                        <div className='flex justify-between items-center text-black hover:text-white hover:bg-black hover:underline'>
                            <a href='#' className="font-medium text-xl  p-5">Sổ địa chỉ</a>
                            <IoIosArrowForward className=' ml-2 text-3xl' />

                        </div>
                        <div className='flex justify-between items-center text-black hover:text-white hover:bg-black hover:underline'>
                            <a href='#' className="font-medium text-xl  p-5">Đăng xuất</a>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile