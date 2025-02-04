import React, { useState } from "react";

const Accordion = ({ children, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: activeIndex === index,
          onClick: () => handleToggle(index),
        });
      })}
    </div>
  );
};

export default Accordion;
