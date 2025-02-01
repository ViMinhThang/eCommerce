import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({ items}) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(prev => prev === index ? null : index)
  }

  return (
    <div className='w-full max-w-2xl mx-auto'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion