import React from "react";
import NavLink from "./NavLink";
import CarouselAd from "./CarouselAd";

const ProductCarousel = ({ tags, images }) => {
  return (
    <div>
      <div className="">
        <div className="container mx-auto my-10">
          <div className="flex justify-between items-center">
            <ul className="flex space-x-5">
              {tags.map((item) => (
                <li
                  key={item}
                  className="border border-black px-3 py-2 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <NavLink className="border-b-4 border-black font-bold">
              VIEW ALL
            </NavLink>
          </div>
          <div className="w-full mt-5">
            <CarouselAd slides={images} type="product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
