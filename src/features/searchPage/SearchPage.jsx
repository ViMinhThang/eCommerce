import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import BreadCumb from "../../components/BreadCumb";
import Overlay from "../../components/Overlay";

const SearchPage = () => {
  const { categorySlug } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);


  const [isOpenOverlay, setIsOpenOverlay] = useState(false)

  const slugToTitle = (slug) => {
    const titleMap = {
      "hang-moi-ve": "Hàng Mới Về",
      giay: "Giày Nam",
      "phu-kien": "Phụ Kiện Nam",
    };
    return titleMap[slug] || slug.split("-").join(" ").toUpperCase();
  };

  // Tạo breadcrumb items từ URL
  const generateBreadcrumbItems = () => {
    const pathnames = location.pathname
      .split("/")
      .filter((x) => x)
      .map((path, index, arr) => {
        const isLast = index === arr.length - 1;
        return {
          path: isLast ? null : `/${arr.slice(0, index + 1).join("/")}`,
          title: slugToTitle(path),
        };
      });

    // Thêm mục Home vào đầu
    return [{ path: "/", title: "Home" }, ...pathnames];
  };

  // Fetch sản phẩm theo category
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
      <BreadCumb items={generateBreadcrumbItems()} />

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
