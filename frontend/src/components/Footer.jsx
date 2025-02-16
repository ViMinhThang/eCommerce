import React from 'react'

const Footer = () => {
    return (
        <div className='mt-5 flex flex-col'>
            <div className='flex justify-evenly items-center'>
                <div className='flex flex-col space-y-5'>
                    <h2 className='font-bold'>San Pham</h2>
                    <p>Giay</p>
                    <p>Quan ao</p>
                    <p>Phu kien</p>
                    <p>Hang moi ve</p>
                    <p>Top Sellers</p>
                    <p>Outlet</p>
                </div>

                <div className='flex flex-col ml-10 space-y-5'>
                    <h2 className='font-bold'>Customer Service</h2>
                    <p>Contact Us</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns & Exchanges</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                </div>

                <div className='flex flex-col ml-10 space-y-5'>
                    <h2 className='font-bold'>About Us</h2>
                    <p>Our Story</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Blog</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className='flex flex-col ml-10 space-y-5'>
                    <h2 className='font-bold'>Follow Us</h2>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/NE_Wfacebook_image_footer_tcm337_875964_78c1a9acbc.png' />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/NE_Winstagram_logo_footer_tcm221_875968_97cba77886.png' />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/NEW_Black_icon_Twitter_logo_transparent_PNG_tcm337_875966_4d1f590104.png' />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/NE_Wyoutube_icon_footer_tcm337_875967_a9b811ec3d.png" />
                    </a>
                </div>
            </div>

            <div className='mt-5 p-5 bg-gray-800 text-white text-center'>
                <a href='#'>Cai dat cookie | </a>
                <a href='#'>Chinh sach bao mat | </a>
                <a href='#'>Dieu khoan va dieu kien | </a>
                <a href='#'>Xuat ban boi | </a>
                <a href='#'>2020 Cong Ty TNHH adidas Viet | </a>
            </div>
        </div>
    )
}

export default Footer