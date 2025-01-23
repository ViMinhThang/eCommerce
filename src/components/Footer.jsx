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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-600" viewBox="0 0 24 24">
                            <path d="M22 12c0 5.523-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2s10 4.478 10 10zM12 6c-.553 0-1 .447-1 1v2h-2v3h2v8h3v-8h2l1-3h-3V7c0-.553-.447-1-1-1h-2z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-pink-600" viewBox="0 0 24 24">
                            <path d="M12 2.2c3.299 0 3.7.012 5.004.072 1.336.062 2.523.28 3.467.637a6.186 6.186 0 0 1 2.362 1.809 6.186 6.186 0 0 1 1.809 2.362c.358.944.576 2.131.637 3.467.06 1.304.072 1.705.072 5.004 0 3.299 0 3.7-.012 5.004-.072 1.336-.062 2.523-.28 3.467-.637a6.186 6.186 0 0 1 2.362-1.809 6.186 6.186 0 0 1 1.809-2.362c.358-.944.576-2.131.637-3.467.06-1.304.072-1.705.072-5.004 0-3.299 0-3.7-.072-5.004-.06-1.336-.062-2.523-.28-3.467-.637a6.186 6.186 0 0 1-2.362-1.809 6.186 6.186 0 0 1-1.809-2.362c-.358-.944-.576-2.131-.637-3.467-.06-1.304-.072-1.705-.072-5.004zm-8.33 2.743a4.95 4.95 0 0 0-.631 1.47c-.146.522-.263 1.109-.35 1.713a8.812 8.812 0 0 0-.22 1.72c-.255-.308-.514-.624-.776-.921a9.2 9.2 0 0 0-.939-.91c-.407-.442-.79-.91-1.16-1.398a9.105 9.105 0 0 0-.57-.536zm12.661-.265a5.62 5.62 0 0 0 .546 1.34l.078.206c.183.487.345.97.476 1.487.038.112.072.226.11.34a7.903 7.903 0 0 0 1.512 1.238.88.88 0 0 1-.006-.04z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-400" viewBox="0 0 24 24">
                            <path d="M23 3c-.8.4-1.6.7-2.5.8.9-.6 1.5-1.5 1.8-2.5-.8.5-1.6.9-2.5 1.1-.8-.9-1.9-1.5-3.1-1.5-2.4 0-4.4 2-4.4 4.4 0 .3 0 .6.1.9C7.7 7.2 4.1 5.3 2.1 2.2c-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.4 1.7 3.1-.6 0-1.1-.2-1.6-.5v.1c0 1.8 1.3 3.3 3.1 3.7-.3.1-.7.1-1.1.1-.3 0-.6 0-.9-.1.6 1.9 2.3 3.3 4.3 3.3-1.6 1.3-3.5 2.1-5.6 2.1-.4 0-.8 0-1.2-.1 2.1 1.3 4.5 2 7 2 8.4 0 13-7 13-13 0-.2 0-.3 0-.5.9-.7 1.6-1.5 2.1-2.5z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-700" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-4h2v4zm-1-9c-.7 0-1.3.5-1.3 1.2 0 .6.5 1.2 1.2 1.2.6 0 1.2-.5 1.2-1.2 0-.7-.5-1.2-1.2-1.2zM11 8H9V7h2V5H9c-.5 0-.9.4-.9.9V7c0 .5.4.9.9.9h2c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9z" />
                        </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-red-600" viewBox="0 0 24 24">
                            <path d="M23.5 6.5c-.2-.7-.7-1.2-1.4-1.4-1.4-.5-7.1-2.6-13.7-2.6-6.7 0-12.4 2.1-13.7 2.6-.7.2-1.2.7-1.4 1.4-.5 1.5-.7 4.4-.7 4.4s.2 2.9.7 4.4c.2.7.7 1.2 1.4 1.4 1.4.5 7.1 2.6 13.7 2.6 6.6 0 12.3-2.1 13.7-2.6.7-.2 1.2-.7 1.4-1.4.5-1.5.7-4.4.7-4.4s-.2-2.9-.7-4.4zM9 15V9l6 3-6 3z" />
                        </svg>
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