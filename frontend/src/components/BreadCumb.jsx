import React from "react";
import { Link } from "react-router-dom";

const BreadCumb = ({ items }) => {
  return (
    <nav aria-label="breadcumb">
      <ol className="breacumb flex font-bold text-xl">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcumb-item ${
              index === items.length - 1 ? "active" : ""
            }`}
          >
            {index !== items.length - 1 ? (
              <>
                <Link className="underline" to={item.path}>
                  {item.title}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCumb;
