import React from 'react'
import Button from '../../components/Button'
import { useFavorite } from '../../context/FavoriteContext'
import { Link } from 'react-router-dom'

const FavoritePage = () => {

    const { favItems } = useFavorite()
    const firstList = favItems.slice(0, 2)
    const secondList = favItems.slice(2, favItems.length)
    console.log(favItems)
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className='w-[900px]'>
                <div className='mx-auto'>
                    <div className='flex flex-col justify-center my-auto'>
                        <div className='flex flex-col justify-center'>
                            <h2 className='font-bold text-4xl'>MY WISHLIST</h2>
                            <p>6 ITEMS</p>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex flex-initial w-[50%] gap-3'>
                                {firstList.map((item, index) => (
                                    <Link to={`/sp/${item._id}`} key={index} className='border border-white hover:border-black'>
                                        <div className='relative'>
                                            <img src={item.image[0]} />
                                            <p className='absolute bottom-0 left-2 bg-white text-black px-2'>{item.price}</p>
                                        </div>
                                        <p className='px-2 pt-2 pb-3'>{item.name}</p>
                                    </Link>
                                ))}
                            </div>



                            <div className='bg-slate-500 p-3 space-y-2 flex flex-col w-[60%]'>
                                <h2 className='text-2xl text-white'>DON'T LOSE YOUR WISHLIST</h2>
                                <p className='text-white'>Join the adiClub today and receive a 15% discount voucher for your first order. Or log in to save the item(s) so they won't be lost.</p>
                                <Button className='text-black bg-white w-[60%]'>
                                    ĐĂNG KÝ
                                </Button>
                                <p className='text-white'>Already an adiClub member?</p>
                                <p className='text-white underline'>ĐĂNG NHẬP</p>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-5'>
                            {secondList.map((item, index) => (
                                <Link to={`/sp/${item._id}`} key={index} className='border border-white hover:border-black'>
                                    <div className='relative'>
                                        <img src={item.image[0]} />
                                        <p className='absolute bottom-0 left-2 bg-white text-black px-2'>{item.price}</p>
                                    </div>
                                    <p className='px-2 pt-2 pb-3'>{item.name}</p>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-yellow-300 font-bold text-4xl p-8 w-[100%] mt-20">
                <p className="p-5">TRỞ THÀNH HỘI VIÊN & HƯỞNG ƯU ĐÃI 15%</p>
                <Button className="bg-black text-white max-w-64 py-3">
                    ĐĂNG KÝ MIỄN PHÍ
                </Button>
            </div>
        </div>
    )
}

export default FavoritePage