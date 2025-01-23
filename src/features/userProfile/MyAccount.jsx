import React from 'react'
import NavLink from '../../components/NavLink';
import { IoIosArrowRoundForward } from 'react-icons/io';
import UserProfileNav from '../../components/UserProfileNav';
const MyAccount = () => {
    return (
        <>
            <UserProfileNav page="news" />
            <div className='bg-slate-100 pt-28'>
                <div className="w-[1600px] mx-auto my-auto flex flex-col justify-evenly">
                    <div className='w-[493px] p-5 bg-white space-y-5'>
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl">VOUCHER CỦA BẠN (1)</h2>
                            <p className="text-sm">Mở tổng quan về phiếu quà tặng của bạn bằng nút bên dưới.</p>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <span className="bg-blue-500 text-white flex-initial w-48 p-2">1 MỘT VOUCHER MỚI</span>
                            <NavLink className="border-2 border-black py-4 px-3 w-64 flex items-center">
                                XEM VOUCHER CỦA BẠN
                                <IoIosArrowRoundForward className=' ml-2 text-3xl' />
                            </NavLink>
                        </div>

                    </div>
                    <div className='p-5 ps-0 space-y-5'>
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl">ĐIỂM VÀ MỨC THƯỞNG ADICLUB</h2>
                            <p className="text-sm">Đây là không gian cá nhân của bạn. Hiểu rõ hơn về trạng thái hội viên của bạn và các điểm thưởng, mức thưởng mà bạn đã đạt được.</p>
                        </div>
                        <div className="flex items-center space-y-5 space-x-5 bg-white p-12">
                            <div className="flex flex-1 justify-between items-center">
                                <p className="w-[352px]">Tới giờ rồi. Bây giờ bạn có quyền truy cập vào tất cả các phần thưởng Cấp 1. Khám phá phần thưởng của bạn và bắt đầu kiếm điểm để mở khóa cấp độ tiếp theo.</p>
                                <img src="https://www.adidas.com.vn/glass/react/ab41356/assets/img/membership-home/myaccount-redesign/new-adiClub-levels/adiclub-level-1-badge-DT-SVG.svg" />
                            </div>
                            <div className="bg-zinc-100 flex flex-col flex-1 p-12">
                                <div className="flex justify-between">
                                    <p>Tổng điểm</p>
                                    <p>Thứ hạng tiếp theo</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex"><h2 className="text-blue-500 text-4xl">50</h2></div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="text-blue-500">LEVEL 2</p>
                                        <p>1000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 ps-0 space-y-5'>
                        <h2 className="font-bold text-2xl">CHỈ DÀNH CHO BẠN</h2>
                        <div className="flex items-center space-y-5 space-x-5 bg-white p-12 w-[493px]">
                            <div className="flex flex-col justify-start items-start">
                                <p className="w-[352px] font-bold text-l">THĂNG HẠNG & MỞ KHOÁ PHẦN THƯỞNG</p>
                                <p>Bạn sẽ cần điểm thưởng để thăng hạng và mở khoá các phần thưởng mới. Hãy cùng bắt đầu với những cách dễ nhất để kiếm điểm.</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 ps-0 space-y-5'>
                        <h2 className="font-bold text-2xl">BẠN CẦN TRỢ GIÚP?</h2>
                        <div className="flex items-start space-x-5 bg-white p-12 justify-start w-[852px]">
                            <div className="flex flex-col justify-start items-start">
                                <p className="text-black hover:bg-black hover:text-white">Sản phẩm</p>
                                <p className="text-black hover:bg-black hover:text-white">Đặt hàng & Thanh Toán</p>
                                <p className="text-black hover:bg-black hover:text-white">Giao hàng</p>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <p className="text-black hover:bg-black hover:text-white" >Chương trình khuyến mãi & Quà tặng</p>
                                <p className="text-black hover:bg-black hover:text-white">Trả lại hàng và hoàn tiền</p>
                                <p className="text-black hover:bg-black hover:text-white">Tài khoản & Bản tin</p>
                            </div>
                            <div className="flex flex-col align-top">
                                <p className="text-black hover:bg-black hover:text-white">Thông tin công ty</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default MyAccount