import React from "react";
import BreadCumb from "../../components/BreadCumb";
import { useLocation } from "react-router-dom";
import { generateBreadcrumbItems } from "../../utils/utils";
import Button from "../../components/Button";
import { MdFavoriteBorder } from "react-icons/md";
import Accordion from "../../components/Accordion";
import AccordionItem from "../../components/AccordionItem";

const ProductDetail = () => {
  const location = useLocation();

  const imageURL = [
    "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/645b32a19b844ce5a54f75421ab50bbd_9366/Dep_Keitaki_Alpha_Xam_JR1150_01_00_standard.jpg",
    "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/146d358882a54deca7bc67cb88b13ba4_9366/Dep_Keitaki_Alpha_Xam_JR1150_02_standard_hover.jpg",
    "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e53cff6dace24227852172e361bb25fd_9366/Dep_Keitaki_Alpha_Xam_JR1150_03_standard.jpg",
    "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/23890dcd62c640d4a2a7e2aab154923a_9366/Dep_Keitaki_Alpha_Xam_JR1150_04_standard.jpg",
  ];

  const colorURL = [
    "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/0b08f6fdc6094b0db119eecd63e28b56_9366/Dep_Keitaki_Alpha_Xam_JR1150_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/38d75a18231544dca2d9a8310f0a5069_9366/Dep_Keitaki_Alpha_DJen_JR1152_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/798f14b63e084dbc90391a64a68bb6ee_9366/Dep_Keitaki_Alpha_Mau_tim_JR1153_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/c847a01dca144b6c831fd2df62a580d3_9366/Dep_Keitaki_Alpha_Mau_xanh_da_troi_JR1154_00_plp_standard.jpg",
  ];

  return (
    <div>
      <div className="absolute z-50">
        <BreadCumb items={generateBreadcrumbItems(location)} />
      </div>
      <div className="flex gap-5">
        <div className="grid grid-cols-2 gap-2 w-[1430px]">
          {imageURL.map((item, index) => (
            <img src={item} key={index} />
          ))}
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col mt-10 space-y-1">
            <p className="text-2xl">Sportswear</p>
            <h2 className="text-3xl font-bold">Dép KEITAKI ALPHA</h2>
            <p className="font-bold">450.000đ</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Màu sắc</p>
            <div className="flex space-x-1">
              {[
                colorURL.map((item, idx) => (
                  <img className="w-[69.8px]" src={item} key={idx} />
                )),
              ]}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Kích cỡ</p>
            <div className="grid grid-cols-5 gap-2">
              {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
                <span className="p-3 bg-neutral-100" key={idx}>
                  {item} UK
                </span>
              ))}
            </div>
          </div>
          <div className="flex">
            <Button className="bg-black text-white w-[80%]">
              Thêm vào giỏ hàng
            </Button>
            <div className="flex items-center border-2 border-black p-5 ms-2">
              <MdFavoriteBorder />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Accordion className="ms-40">
          <AccordionItem className="border-b-2 border-t-2" classNameTitle="font-bold " title="Mô tả">
            <div className="grid grid-cols-2 gap-5">
              <div className="">
                <h2 className="text-xl font-bold">
                  Đôi dép thoải mái, êm ái phù hợp ở bãi biển, hồ bơi hoặc ghế
                  sofa.
                </h2>
                <p>
                  Bất kể bạn đang thư giãn bên hồ bơi hay ra ngoài đi dạo, đôi
                  dép adidas này sẽ giúp đôi chân bạn luôn thoải mái. Thân dép
                  bằng cao su ôm chân cùng đế ngoài bằng chất liệu EVA tạo lớp
                  đệm siêu nhẹ. Hãy diện đôi dép này và thư giãn.
                </p>
              </div>
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23890dcd62c640d4a2a7e2aab154923a_9366/Dep_Keitaki_Alpha_Xam_JR1150.jpg" />
            </div>
          </AccordionItem>
          <AccordionItem className="border-b-2" classNameTitle="font-bold" title="Thông tin chi tiết">
                <ul className="grid grid-cols-2 mx-auto gap-5 list-disc pl-5">
                  <li>Dáng regular fit</li>
                  <li>Kiểu dáng slip-on</li>
                  <li>Thân dép bằng cao su</li>
                  <li>Màu sản phẩm: Grey Three / Core Black / Core Black</li>
                  <li>Mã sản phẩm: JR1150</li>
                </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductDetail;
