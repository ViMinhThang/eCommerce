import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCumb from "../../components/BreadCumb";
import Overlay from "../../components/Overlay";
import { generateBreadcrumbItems, slugToTitle } from "../../utils/utils"
import AccordionItem from "../../components/AccordionItem";
import Accordion from "../../components/Accordion";
import axios from "axios"

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [isOpenOverlay, setIsOpenOverlay] = useState(false)


  const priceFilters = [
    { label: "Giá (Thấp - Cao)", value: "price_asc" },
    { label: "Giá (Cao - Thấp)", value: "price_desc" },
    { label: "Mới nhất trước", value: "newest" },
    { label: "Bán chạy nhất", value: "best_selling" },
  ];

  const getSortLabel = () => {
    const params = getCurrentParams();
    const sortValue = params.get("sort")
    const foundFilter = priceFilters.find((item) => item.value === sortValue)
    return foundFilter ? foundFilter.label : "Tất cả sản phẩm"
  }

  const getCurrentParams = () => {
    return new URLSearchParams(location.pathname)
  }
  const getCurrentQuery = () => {
    return new URLSearchParams(location.search)
  }
  const setURIParams = (filterName, value) => {
    const params = getCurrentQuery();
    if (params.has(filterName) && params.get(filterName) === value) {
      params.delete(filterName)
    } else {
      params.set(filterName, value)
    }
    const searchParams = params.toString()
    const newURL = `${location.pathname}${searchParams ? `?${searchParams}` : ""}`
    navigate(`${newURL}`, { replace: true })
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const params = getCurrentParams();
      const query = getCurrentQuery();
      console.log(params.toString())
      try {
        const response = query ? await axios.get(`/api/products/${params}?${query.toString()}`) : await axios.get(`/api/products/${params}`)
        console.log(response)
        setProducts(response.data)
      } catch (err) {
        console.log("Error when trying to call API ", err)
      }

    };
    fetchProducts()
  }, [location.search]);

  return (
    <div className="relative container mx-auto mt-10">
      <BreadCumb items={generateBreadcrumbItems(location)} />

      <h1 className="font-bold mt-5 text-3xl">{getSortLabel()}</h1>
      <div className=" font-semibold text-sm flex justify-end mt-28">
        <button onClick={() => setIsOpenOverlay(true)} className="flex space-x-2 justify-center items-center border-2 border-black p-3"><p>Lọc & Sắp xếp</p> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" /></svg></button>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {products.map((product) => (
          <Link to={`/sp/${product._id}`} key={product._id} className="product-card hover:border-2 border-black">
            <img src={product.image[0]} alt={product.name} />
            <div className="flex flex-col ms-2">
              <p className="font-bold">{product.price}</p>
              <h3>{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      {isOpenOverlay && <Overlay onClose={() => setIsOpenOverlay(false)}>
        <div className="flex flex-col p-8">
          <p className="font-bold text-xl">Bộ lọc được áp dụng</p>
        </div>
        <div className="mt-5">
          <Accordion>
            <AccordionItem title="Lọc theo giá">
              {priceFilters.map((item) => (
                <div
                  key={item.value}
                  className="border-b-2 p-2 cursor-pointer"
                  onClick={() => setURIParams("sort", item.value)}
                >
                  {item.label}
                </div>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </Overlay>
      }
    </div>
  );
};

export default SearchPage;
