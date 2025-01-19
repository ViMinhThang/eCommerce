import React from 'react'
import { Link } from 'react-router-dom'


const SvgIcon = ({ children, className = '', ...props }) => (
  <svg className={className} {...props}>
    {children}
  </svg>
)

const NavLink = ({ to, children, className = '' }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
)

const Header = () => {
  return (
    <div className='px-10 py-10'>
      <div className='flex justify-between items-center'>
        <div className='flex-none w-96'>
          <Link to="/" className='inline-block w-14 h-14'>
            <SvgIcon viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg" fill="black">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
              />
            </SvgIcon>
          </Link>
        </div>

        <ul className="font-bold text-xs flex flex-1 justify-center items-center space-x-4">
          {['MEN', "WOMEN", 'KIDS', 'SPORTS', 'BRANDS', 'NEW ARRIVALS'].map((item) => (
            <li className='px-4 py-2 hover:text-red-500'>
              <NavLink key={item} to={`/${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </NavLink>
            </li>

          ))}
          <li className='px-4 py-2'>
            <NavLink to="outlet" className='text-red-500'>
              OUTLET
            </NavLink>
          </li>
        </ul>
        <div className='flex flex-none w-96 justify-center items-center space-x-4'>
          <div className='relative border-black border-2 flex justify-center items-center'>
            <input type='text' className='px-3 py-1' />
            <div className='absolute pointer-events-auto right-0 cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </div>

          </div>
          {[
            'M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Z',
            'm480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z',
            'M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z',
          ].map((path, idx) => (
            <Link key={idx} to="/">
              <SvgIcon xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="black">
                <path d={path} />
              </SvgIcon>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Header

