import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    return new URLSearchParams(location.search)
  }
  const setURIParams = (filterName, value) => {
    const params = getCurrentParams();
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
      console.log(params.toString())
      try {
        const response = await axios.get(`/api/products?${params.toString()}`)
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
        <button onClick={() => setIsOpenOverlay(true)} className="border-2 border-black p-3">Lọc & Sắp xếp</button>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
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
