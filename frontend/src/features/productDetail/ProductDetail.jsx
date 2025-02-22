import React, { use, useEffect, useState } from "react";
import BreadCumb from "../../components/BreadCumb";
import { Link, useLocation } from "react-router-dom";
import { generateBreadcrumbItems } from "../../utils/utils";
import Button from "../../components/Button";
import { MdFavoriteBorder } from "react-icons/md";
import Accordion from "../../components/Accordion";
import AccordionItem from "../../components/AccordionItem";
import axios from "axios";
import { getCurrentParams } from "../../utils/urlUtils";

const ProductDetail = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null)
  const [suggestionProduct, setSuggestionProduct] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const param = getCurrentParams(location);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/sp/${param}`)
        const responseSuggest = await axios.get(`/api/products/suggestion`)
        setProduct(response.data)
        setSuggestionProduct(responseSuggest.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [param])
  const imageURL = product ? product.image : [];

  return (
    <div>
      <div className="absolute z-50">
        <BreadCumb items={generateBreadcrumbItems(location)} />
      </div>
      <div className="flex gap-5 relative">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-2 w-[1430px] border-r-2">
            {imageURL.map((item, index) => (
              <img src={product && item} key={index} />
            ))}

          </div>
          <Accordion className="mx-auto ">
            <AccordionItem className="border-b-2 border-t-2" classNameTitle="font-bold" title='Đánh giá'>

            </AccordionItem>
            <AccordionItem className="border-b-2" classNameTitle="font-bold " title="Mô tả">
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className=" space-y-2">
                  <h2 className="text-xl font-bold">
                    {product && product.descHeader}
                  </h2>
                  <p>
                    {product && product.description}
                  </p>
                </div>
                <img src={product && product.image[0]} />
              </div>
            </AccordionItem>
            <AccordionItem className="border-b-2" classNameTitle="font-bold" title="Thông tin chi tiết">
              <ul className="grid grid-cols-2 mx-auto gap-5 list-disc pl-5">
                {product && product.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
          <div className="ms-20 mt-20 font-bold text-3xl mb-20">
            <h2>Hoàn thiện phong cách</h2>
            <div className="mt-10 flex gap-5 w-[1200px]">
              {suggestionProduct.map((product) => (
                <Link to={`/sp/${product._id}`} key={product._id} className="product-card hover:border-2 border-black">
                  <img src={product.image[0]} alt={product.name} />
                  <div className="flex flex-col ms-2">
                    <p className="text-sm font-medium">{product.price}</p>
                    <h3 className="text-xl font-medium">{product.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-10 mr-2 sticky top-20 h-fit">
          <div className="flex flex-col mt-10 space-y-1">
            <p className="text-2xl">{product && product.category}</p>
            <h2 className="text-3xl font-bold">{product && product.name}</h2>
            <p className="font-bold">{product && product.price}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Màu sắc</p>
            <div className="flex space-x-1">
              <span className="p-3 bg-neutral-100">
                {product && product.color}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Kích cỡ</p>
            <div className="grid grid-cols-5 gap-2">
              {product && product.size.map((item, idx) => (
                <span className="p-3 bg-neutral-100" key={idx}>
                  {item}
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
      <div className="flex justify-center items-center bg-yellow-300 font-bold text-4xl p-8">
        <p className="p-5">TRỞ THÀNH HỘI VIÊN & HƯỞNG ƯU ĐÃI 15%</p>
        <Button className="bg-black text-white max-w-64 py-3">
          ĐĂNG KÝ MIỄN PHÍ
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
