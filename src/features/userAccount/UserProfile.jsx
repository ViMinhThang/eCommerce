import React, { useState, useCallback } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import Button from "../../components/Button";
import { FaPlus } from "react-icons/fa6";
import PopUp from "../../components/PopUp";
import InputField from "../../components/InputField";
import provincesWithDistricts from "../../constant/province";

const Profile = () => {
  const [popupType, setPopupType] = useState(null);

  const openPopup = useCallback((type) => setPopupType(type), []);
  const closePopup = useCallback(() => setPopupType(null), []);

  return (
    <div className="flex flex-col p-5">
      <div className="mb-10">
        <h2 className="font-semibold text-2xl mb-3">Thông tin của tôi</h2>
        <p className="text-xl">
          Hãy chỉnh sửa bất kỳ thông tin chi tiết nào bên dưới để tài khoản của
          bạn luôn được cập nhật.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-2xl">Thông tin chi tiết</h2>
        <div className="mt-5 space-y-3">
          <p className="text-xl">HUYNH THANG</p>
          <p className="text-xl">1995-07-24</p>
          <p className="text-xl">GIỚI TÍNH</p>
        </div>

        <span
          onClick={() => openPopup("editInfo")}
          className="text-xl text-black hover:text-white hover:bg-black underline cursor-pointer"
        >
          Chỉnh sửa
        </span>
      </div>
      <div className="space-y-3 mt-10">
        <h2 className="font-semibold text-2xl">Chi tiết đăng nhập</h2>
        <h3 className="text-xl font-medium">Email</h3>
        <p className="text-xl">huynhminhthang246@gmail.com</p>
        <span
          onClick={() => openPopup("editEmail")}
          className="text-xl text-black hover:text-white hover:bg-black underline cursor-pointer"
        >
          Chỉnh sửa
        </span>
        <div className="mt-5">
          <h2 className="font-semibold text-2xl mt-5 mb-3">Mật khẩu</h2>
          <span
            onClick={() => openPopup("editPassword")}
            className="text-xl text-black hover:text-white hover:bg-black underline cursor-pointer"
          >
            Chỉnh sửa
          </span>
        </div>
      </div>
      <div className="mt-10 space-y-5">
        <h2 className="font-semibold text-2xl">
          Đăng xuất khỏi tất cả trình duyệt web
        </h2>
        <p className="text-xl">
          Thao tác này sẽ giúp bạn đăng xuất khỏi tất cả các trình duyệt web mà
          bạn đã sử dụng để truy cập vào trang web của adidas. Để đăng nhập lại,
          bạn sẽ phải nhập thông tin đăng nhập của mình.
        </p>
        <Button>Đăng xuất</Button>
        <h2 className="text-2xl">Quản lý tài khoản</h2>
        <Button onClick={() => openPopup("deleteAccount")}>
          Xóa tài khoản
        </Button>
        <p className="text-xl">
          Khi xóa tài khoản, bạn sẽ không còn có quyền truy cập các thông tin
          được lưu trữ trong tài khoản adidas của mình, chẳng hạn như lịch sử
          đặt hàng hoặc danh sách yêu thích
        </p>
      </div>

      {popupType === "editInfo" && (
        <PopUp isOpen onClose={closePopup} title="Chỉnh sửa thông tin của bạn">
          <div className="bg-white">
            <InputField id="name" label="Tên" />
            <InputField id="middleName" label="Họ" />
            <div className="flex flex-col mt-5">
              <h2 className="text-2xl font-bold">Ngày sinh</h2>
              <div className="flex gap-5">
                <InputField id="dd" label="dd" />
                <InputField id="mm" label="mm" />
                <InputField id="yy" label="yyyy" />
              </div>
            </div>
            <div className="flex flex-col mt-5 space-y-5">
              <h2 className="text-xl font-bold">Giới tính</h2>
              <div className="flex">
                {["Nam", "Nữ", "Khác"].map((item, idx) => (
                  <label
                    className="flex justify-center items-center space-x-1 me-2"
                    key={idx}
                  >
                    <input
                      className="w-[24px] h-[24px] focus:bg-black focus:border-black focus:outline-none focus:ring-2 focus:ring-white"
                      type="radio"
                      name="gender"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-5 space-y-5">
              <Button className="w-full bg-black font-light text-white">
                Cập nhập thông tin
              </Button>
              <Button onClick={closePopup} className="w-full font-light">
                Hủy
              </Button>
            </div>
          </div>
        </PopUp>
      )}

      {popupType === "editEmail" && (
        <PopUp isOpen onClose={closePopup} title="Chỉnh sửa email của bạn">
          <div className="bg-white">
            <InputField id="Email" label="Email" />
            <div className="mt-5 space-y-5">
              <Button className="w-[45%] bg-black font-light text-white">
                Lưu các thay đổi
              </Button>
              <Button onClick={closePopup} className="w-[45%] font-light">
                Hủy
              </Button>
            </div>
          </div>
        </PopUp>
      )}

      {popupType === "editPassword" && (
        <PopUp isOpen onClose={closePopup} title="Chỉnh sửa mật khẩu của bạn">
          <div className="bg-white">
            <InputField id="oldPassword" label="Mật khẩu cũ" type="password" />
            <InputField id="newPassword" label="Mật khẩu mới" type="password" />
            <div className="mt-5 space-y-5">
              <Button className="w-[45%] bg-black font-light text-white">
                Lưu các thay đổi
              </Button>
              <Button onClick={closePopup} className="w-[45%] font-light">
                Hủy
              </Button>
            </div>
          </div>
        </PopUp>
      )}

      {popupType === "deleteAccount" && (
        <PopUp
          isOpen
          onClose={closePopup}
          title="Huynh, CHÚNG TÔI SẼ RẤT TIẾC VÌ SỰ VẮNG MẶT CỦA BẠN"
        >
          <div className="bg-white">
            <p>
              Bạn có chắc chắn muốn xóa tài khoản adidas không? Khi xóa tài
              khoản, bạn sẽ không còn có quyền truy cập các thông tin được lưu
              trữ trong tài khoản adidas của mình, chẳng hạn như lịch sử đặt
              hàng hoặc danh sách yêu thích
            </p>
            <p>
              Nếu bạn chọn xoá tài khoản của mình, email xác nhận sẽ được gửi
              đến .
            </p>
            <div className="mt-5 space-y-5">
              <Button className="bg-black font-light text-white w-full">
                Xóa tài khoản
              </Button>
              <Button onClick={closePopup} className="font-light w-full">
                Đóng
              </Button>
            </div>
          </div>
        </PopUp>
      )}
    </div>
  );
};

const Address = () => {
  const [popupType, setPopupType] = useState(null);
  const openpopup = useCallback((type) => setPopupType(type), []);
  const closepopup = useCallback(() => setPopupType(null), []);

  const [province, setProvince] = useState("");
  const [city, setCity] = useState(
    provincesWithDistricts["Thành phố Hồ Chí Minh"]
  );
  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setProvince(province);
    setCity(provincesWithDistricts[province]);
    console.log(1);
  };

  return (
    <div className="flex flex-col p-5 space-y-10">
      <div className="space-y-5">
        <h2 className="font-semibold text-2xl">Sổ địa chỉ</h2>
        <p className="text-xl">Bạn còn 4/5 ô địa chỉ</p>
      </div>
      <div
        onClick={() => openpopup("address")}
        className="grid grid-cols-2 gap-5"
      >
        <div className="border-2 hover:border-black p-5 flex flex-col justify-between cursor-pointer">
          Thêm địa chỉ
          <FaPlus />
        </div>
        <div className="border-2 hover:border-black p-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <div>hojo ZXZXZX</div>
            <div>DFSDFSD</div>
            <div>DFSDFSD</div>
            <div>Binh Thanh District, Ho Chi Minh, 23433423, VN</div>
            <div>3123123123</div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-start items-center space-x-2">
              <button className="underline text-black hover:text-white hover:bg-black">
                Chỉnh sửa
              </button>
              <button className="underline text-black hover:text-white hover:bg-black">
                Xóa
              </button>
            </div>
            <div className="flex">Mặc định</div>
          </div>
        </div>
      </div>
      {popupType === "address" && (
        <PopUp isOpen onClose={closepopup} title="Thêm địa chỉ mới">
          <div className="bg-white">
            <div className="flex gap-5">
              <div className="w-64 flex-1">
                <InputField id="name" label="Tên" />
              </div>
              <div className="w-64 flex-1">
                <InputField id="middleName" label="Họ" />
              </div>
            </div>
            <div className="mt-5">
              <InputField id="detailAddress" label="Tên toàn nhà/Số tầng" />
            </div>
            <div className="mt-5 flex gap-5">
              <InputField
                id="province"
                isSelectField
                onChange={handleProvinceChange}
              >
                {Object.keys(provincesWithDistricts).map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </InputField>
              <InputField id="province" isSelectField>
                {city.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </InputField>
            </div>
            <div className="mt-5 w-[75%]">
              <InputField id="phoneNumber" label="Số điện thoại" />
            </div>
            <div className="mt-5 flex gap-5 w-[35%]">
              <Button className="bg-black text-white font-light">Lưu</Button>
              <Button onClick={closepopup} className="font-light">Hủy</Button>
            </div>
          </div>
        </PopUp>
      )}
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="bg-gray-200 pt-5">
      <div className="w-[1600px] mx-auto flex py-5">
        <div className="w-[20.83%] flex flex-col space-y-3 me-10">
          <h2 className="font-bold text-2xl">Tổng quan tài khoản</h2>
          <div className="bg-white">
            <div className="flex justify-between items-center text-black hover:text-white hover:bg-black hover:underline px-2 transition-all duration-300 ease-in-out">
              <Link
                to="/my-account/profile"
                className="font-medium text-xl p-5"
              >
                Thông tin cá nhân
              </Link>
              <IoIosArrowForward className="ml-2 text-3xl" />
            </div>
            <div className="flex justify-between items-center text-black hover:text-white hover:bg-black hover:underline px-2 transition-all duration-300 ease-in-out">
              <Link
                to="/my-account/profile/address-book"
                className="font-medium text-xl p-5"
              >
                Sổ địa chỉ
              </Link>
              <IoIosArrowForward className="ml-2 text-3xl" />
            </div>
            <div className="flex justify-between items-center text-black hover:text-white hover:bg-black hover:underline px-2 transition-all duration-300 ease-in-out">
              <Link to="#" className="font-medium text-xl p-5">
                Đăng xuất
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white ml-[4.16%] w-[75%]">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/address-book" element={<Address />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
