import React from "react";
import Button from "./Button";

const Banner = ({ image, h2, p }) => {
  return (
    <div className="relative">
      <img src={image} />
      <div className="absolute left-52 top-[70%] space-y-2">
        <h2 className="bg-white inline text-2xl">{h2}</h2>
        <p className="bg-white">{p}</p>
        <Button className="bg-white">MUA NGAY</Button>
      </div>
    </div>
  );
};

export default Banner;
