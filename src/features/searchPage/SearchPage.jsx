import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import BreadCumb from "../../components/BreadCumb";
import Overlay from "../../components/Overlay";
import {generateBreadcrumbItems,slugToTitle}  from "../../utils/utils"

const SearchPage = () => {
  const { categorySlug } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);

  const [isOpenOverlay, setIsOpenOverlay] = useState(false)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/${categorySlug}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  return (
    <div className="relative container mx-auto mt-10">
      <BreadCumb items={generateBreadcrumbItems(location)} />

      <h1 className="font-bold mt-5 text-3xl">{slugToTitle(categorySlug)}</h1>
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
      {isOpenOverlay && <Overlay onClose={() => setIsOpenOverlay(false)} />
      }
    </div>
  );
};

export default SearchPage;
