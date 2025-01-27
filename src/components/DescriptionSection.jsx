import React from "react";

const DescriptionSection = ({ title, content = [], className }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto max-w-[1600px] w-[1000px] space-y-5 my-5">
      <p className="font-bold text-3xl mt-5">
        STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
      </p>
      {content.map((item) => (
        <p className={`text-left ${className}`}>{item}</p>
      ))}
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.056 31.8178L25.5403 6.66699L17.7654 11.152L29.6895 31.8178H40.056ZM26.2251 31.8178L16.6374 15.2206L8.86255 19.7056L15.8586 31.8178H26.2251ZM7.77487 23.7878L12.4076 31.8178H2.04107L0 28.2728L7.77487 23.7878Z"
          fill="white"
        ></path>
      </svg>
    </div>
  );
};

export default DescriptionSection;