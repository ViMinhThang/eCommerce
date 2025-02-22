import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
const CartPage = () => {

    const [popup, setPopup] = useState(false)

    const tooglePopup = () => {
        if (popup === false) {
            setPopup(true)
        } else {
            setPopup(false)
        }
    }
    const { cartItems } = useCart()
    console.log(cartItems)
    return (
        <div className='mx-72'>
            <div className='max-w-[1600px] flex justify-between mt-20'>
                <div className='max-w-[960px] flex justify-between items-center'>
                    <div className='flex flex-col justify-center space-y-5'>
                        <h2 className='font-bold text-4xl'>GIỎ HÀNG CỦA BẠN</h2>
                        <p>TỔNG CỘNG (1 sản phẩm) 4.900.000₫</p>
                        <p>Các mặt hàng trong giỏ hàng của bạn không được bảo lưu — hãy kiểm tra ngay để đặt hàng.</p>
                        <div className='flex flex-col space-y-5'>
                            {cartItems.length > 0 &&
                                cartItems.map((item, idx) => (
                                    <div key={idx} className='border border-black flex'>
                                        <div>
                                            <img src={item.image[0]} alt={item.name} width='280px' height='280px' />

                                        </div>
                                        <div className='flex flex-1 justify-evenly my-5'>
                                            <div className='flex  flex-col justify-between'>
                                                <div className='flex-col justify-center'>
                                                    <p>{item.name}</p>
                                                    <p>{item.color}</p>
                                                </div>
                                                <div className='flex-col justify-center'>
                                                    <p>Kích cỡ: {item.size}</p>
                                                    <p>{item.countInStock > 0 ? "Mặt hàng có sẵn mới nhất" : ''}</p>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    {item.countInStock > 0 && (
                                                        <select className="border-2 border-gray bg-white h-20 max-w-24  p-3">
                                                            {Array.from({ length: item.countInStock }, (_, index) => (
                                                                <option key={index + 1} value={index + 1}>
                                                                    {index + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                                </div>

                                            </div>
                                            <div className='flex flex-col'>
                                                {item.price}
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></p>
                                                <p> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg></p>
                                            </div>
                                        </div>
                                    </div>

                                ))

                            }

                        </div>
                    </div>

                </div>
                <div className='w-[500px] flex flex-col justify-start space-y-16'>
                    <Button className='bg-black text-white w-[100%]'>
                        THANH TOÁN
                    </Button>
                    <div className='flex-col justify-start'>
                        <p className='font-semibold text-2xl mb-8'> Tóm Tắt Đơn Hàng</p>
                        <div className='flex-col justify-center mb-14'>
                            <div className='flex justify-between mb-2'>
                                <p>{cartItems.length} sản phẩm</p>
                                <p>{cartItems.reduce((sum, item) => sum += (item.quantity * item.price), 0)}</p>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p>Giao hàng</p>
                                <p>Miễn phí</p>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p>Tổng</p>
                                <p className='font-bold'>{cartItems.reduce((sum, item) => sum += (item.quantity * item.price), 0)}</p>
                            </div>
                        </div>
                        <span onClick={() => tooglePopup()} className={`${popup ? 'hidden' : ""} underline font-medium hover:bg-black hover:text-white text-xl`}>Sử dụng mã khuyến mãi</span>
                        {popup === true && (
                            <InputField label="Nhập mã khuyến mãi của bạn" className="focus:border-b-gray" />

                        )}
                        <p className='mt-10'>Phương thức thanh toán được chấp nhận</p>
                        <div className='flex space-x-3 mt-5'>
                            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon-adidas-cash-on-delivery">
                                    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M5 0H36V10V19.8262H5V0ZM7.41031 14.7146V5.11142L10.3593 2.16243H30.73L33.68 5.1111V14.7149L30.73 17.6637H10.3594L7.41031 14.7146ZM0 6.26079H2.15856V21.8722H28.57V24H0V6.26079Z" fill="black" />
                                    <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M14.4 10.1491C14.4 6.90403 17.2649 4.27335 20.51 4.27335C23.7551 4.27335 26.38 6.90403 26.38 10.1491C26.38 13.3943 23.7551 16.025 20.51 16.025C17.2649 16.025 14.4 13.3943 14.4 10.1491ZM20.51 6.68848C18.5988 6.68848 17.05 8.23788 17.05 10.1492C17.05 12.0604 18.5988 13.6098 20.51 13.6098C22.4213 13.6098 23.97 12.0604 23.97 10.1492C23.97 8.23788 22.4213 6.68848 20.51 6.68848Z" fill="black" />
                                </g>
                            </svg>
                            <svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9131 2.56595H26.464V21.432H14.9131V2.56595Z" fill="#FF5F00" />
                                <path d="M16.1028 12.0006C16.0999 8.31975 17.7897 4.84194 20.6852 2.56928C15.7662 -1.29656 8.70222 -0.733465 4.45772 3.86284C0.213229 8.45914 0.213229 15.5455 4.45772 20.1418C8.70222 24.7381 15.7662 25.3012 20.6852 21.4353C17.7888 19.162 16.0989 15.6827 16.1028 12.0006Z" fill="#EB001B" />
                                <path d="M40.0978 12.0006C40.0977 16.5942 37.4748 20.7844 33.3432 22.7917C29.2115 24.799 24.2963 24.2711 20.6852 21.432C23.5795 19.1574 25.2693 15.6801 25.2693 11.999C25.2693 8.31789 23.5795 4.84053 20.6852 2.56595C24.2963 -0.273088 29.2115 -0.801059 33.3432 1.20627C37.4748 3.2136 40.0977 7.40382 40.0978 11.9973V12.0006Z" fill="#F79E1B" />
                            </svg>
                            <svg width="51" height="24" viewBox="0 0 51 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon-adidas-visa">
                                    <path id="Vector" d="M32.9155 5C29.4363 5 26.3271 6.59021 26.3271 9.52823C26.3271 12.8976 31.8414 13.1303 31.8414 14.8229C31.8414 15.5356 30.9151 16.1737 29.3331 16.1737C27.088 16.1737 25.41 15.2822 25.41 15.2822L24.692 18.247C24.692 18.247 26.625 19 29.1915 19C32.9953 19 35.9885 17.3317 35.9885 14.3435C35.9885 10.7831 30.4514 10.5573 30.4514 8.98628C30.4514 8.4279 31.2117 7.81619 32.7891 7.81619C34.5689 7.81619 36.0211 8.46453 36.0211 8.46453L36.7238 5.60107C36.7238 5.60107 35.1437 5 32.9155 5ZM1.08427 5.21613L1 5.64835C1 5.64835 2.46372 5.88455 3.78201 6.35578C5.4794 6.89608 5.60036 7.21066 5.88622 8.18763L9.00132 18.7771H13.1773L16.3939 11.9966L19.6105 5.21613H15.4442L11.3105 14.4363L9.62366 6.62083C9.46896 5.72638 8.68535 5.21613 7.72619 5.21613H1.08427ZM21.2859 5.21613L18.0175 18.7771H21.9904L25.2473 5.21609L21.2859 5.21613ZM43.4442 5.21613C42.4862 5.21613 41.9786 5.66842 41.6061 6.45876L35.7855 18.7771H39.9519L40.7579 16.724H45.8337L46.3239 18.7771H50L46.7929 5.21613H43.4442ZM43.986 8.87988L45.221 13.9686H41.9125L43.986 8.87988Z" fill="#1434CB" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CartPage