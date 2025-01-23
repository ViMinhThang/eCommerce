import React from 'react'
import { useLocation } from 'react-router-dom';
const UserProfileNav = ({ page }) => {
    const location = useLocation();

    return (
        <div className='border-t-2 border-b-2 pb-5'>
            <div className='flex flex-col items-center justify-center mt-5'>
                {page === "news" ? (
                    <div className='w-[1200px] flex items-center justify-between'>
                        <div className='flex flex-col justify-start items-start'>
                            <h2 className='font-bold text-3xl'>CHÀO HUYNH</h2>
                            <p className='text-sm'>0 Điểm</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="https://www.adidas.com.vn/glass/react/ab41356/assets/img/membership-home/myaccount-redesign/new-adiClub-levels/adiclub-level-1-badge-DT-SVG.svg" />
                        </div>
                    </div>
                ) : ''}

                <div className="space-x-5 mt-12 font-medium">
                    <a href='/my-account' className={`${location.pathname === "/my-account" ? "border-b-2 border-black p-5" : 'p-5 font-light'}`}>TIN TỨC</a>
                    <a href="/order-history" className={`${location.pathname === "/order-history" ? "border-b-2 border-black" : 'p-5 font-light'}`}>ĐƠN HÀNG</a>
                    <a href="/my-account/profile" className={`${location.pathname === "/my-account/profile" ? "border-b-2 border-black" : 'p-5 font-light'}`}>TÀI KHOẢN</a>
                </div>
            </div>
        </div>
    )
}

export default UserProfileNav