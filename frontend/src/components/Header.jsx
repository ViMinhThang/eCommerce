import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { categoriesArray } from "../constant/categories";
import { useCart } from "../context/CartContext";

const SvgIcon = ({ children, className = "", ...props }) => (
  <svg className={className} {...props}>
    {children}
  </svg>
);

const Header = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const { cartItems } = useCart();
  return (
    <div className="pt-10 border-b-2">
      <div className="flex justify-between items-center px-10">
        <div className="flex-none w-96">
          <Link to="/" className="inline-block w-14 h-14">
            <SvgIcon
              viewBox="100 100 50 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
              />
            </SvgIcon>
          </Link>
        </div>

        <ul className="font-bold text-xs flex flex-1 justify-center items-center space-x-4">
          {["MEN", "WOMEN", "KIDS", "SPORTS", "BRANDS", "NEW ARRIVALS"].map(
            (item) => (
              <div
                className="relative"
                key={item}
                onMouseEnter={
                  item === "MEN" ? () => setIsOpenPopup(true) : () => { }
                }
              >
                <li className="px-4 py-2 hover:text-red-500">
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                  >
                    {item}
                  </NavLink>
                </li>
                {item === "MEN" && isOpenPopup && (
                  <div
                    className="absolute top-[53px] left-[-33rem] w-[1920px]"
                    onMouseEnter={() => setIsOpenPopup(true)}
                    onMouseLeave={() => setIsOpenPopup(false)}
                  >
                    <Dropdown isOpen={isOpenPopup} content={categoriesArray} />
                  </div>
                )}
              </div>
            )
          )}

          <li className="px-4 py-2">
            <NavLink to="outlet" className="text-red-500">
              OUTLET
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-none w-96 justify-center items-center space-x-4">
          <div className="relative border-black border-2 flex justify-center items-center">
            <input type="text" className="px-3 py-1" />
            <div className="absolute pointer-events-auto right-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </div>
          </div>
          <Link to="/my-account">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
          </Link>
          <Link to="/favorite">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
          </Link>
          <Link to="/cart" className="relative group">
            <div className="text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="black"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
              </svg>
            </div>

            {cartItems.length > 0 && (
              <p className="absolute -top-0 -right-2 border-yellow-200 bg-yellow-200 text-black text-xs font-bold px-1 py-0 rounded-full border shadow-md">
                {cartItems.length}
              </p>
            )}
          </Link>

        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ isOpen = false, onClose = true, content = [] }) => {
  if (!isOpen) return null;
  const generateSlug = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD") // Tách ký tự có dấu thành base + diacritic
      .replace(/[\u0300-\u036f]/g, "") // Xóa dấu
      .replace(/[^\w\s]/g, "") // Xóa ký tự đặc biệt
      .replace(/\s+/g, "-") // Thay space bằng dấu gạch
      .replace(/-+/g, "-") // Giảm nhiều gạch liên tiếp thành 1 gạch
      .trim();
  };

  return (
    <div className="absolute z-50 border-b-2 p-5 bg-white w-full flex-col justify-center items-center">
      <div className="flex justify-center space-x-10">
        {content.map(({ category, items }, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <h2 className="text-xs font-bold mb-2">{category}</h2>
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <Link to={`/men/${generateSlug(item)}`} className="text-sm">
                  {item}
                </Link>
                {index === content.length - 1 && idx === items.length - 1 && (
                  <img
                    className="max-w-[220px]"
                    src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ssf4_samba_hn_tcm337_1086033_72461b35ec.jpg"
                    alt="Adidas"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-10 mt-5">
        {[
          "Tất cả sản phẩm dành cho nam",
          "Tất cả giày nam",
          "Tất cả phụ kiện dành cho nam",
          "Our Men's Better Choices Range",
        ].map((item, index) => (
          <div className="flex" key={index}>
            <h2 className="text-start text-sm font-bold">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
