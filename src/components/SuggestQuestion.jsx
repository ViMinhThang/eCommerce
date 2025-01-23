import React from 'react'

const SuggestQuestion = () => {
    return (
        <div>
            <div className='flex flex-col w-[1600px]'>
                <h2 className='text-xl'>CÂU HỎI THƯỜNG GẶP</h2>
                <div className='grid grid-cols-2 flex-wrap mt-10 gap-5'>
                    <a className='flex flex-col border hover:border-black h-[160px] p-5 justify-between'>
                        <h2 className='text-xl font-bold'>LÀM CÁCH NÀO TÔI CÓ THỂ TRẢ HÀNG?</h2>
                        <p className='text-sm font-light'>Trả Lại Hàng & Hoàn Tiền</p>
                    </a>
                    <a className='flex flex-col border hover:border-black h-[160px] p-5 justify-between'>
                        <h2 className='text-xl font-bold'>Khi nào tôi sẽ được hoàn tiền?</h2>
                        <p className='text-sm font-light'>Trả Lại Hàng & Hoàn Tiền</p>
                    </a>
                    <a className='flex flex-col border hover:border-black h-[160px] p-5 justify-between'>
                        <h2 className='text-xl font-bold'>Tại sao đơn hàng trực tuyến của tôi bị hủy?</h2>
                        <p className='text-sm font-light'>Đang đặt hàng</p>
                    </a>
                    <a className='flex flex-col border hover:border-black  h-[160px] p-5 justify-between'>
                        <h2 className='text-xl font-bold'>Thời gian giao hàng là khi nào?</h2>
                        <p className='text-sm font-light'>GIAO HÀNG</p>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default SuggestQuestion